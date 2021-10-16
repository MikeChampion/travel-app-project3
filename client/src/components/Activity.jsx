import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "../context/UserContext";
import React from 'react';
import Modal from 'react-modal';
import { ADD_ACTIVITY, ADD_VOTE } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ACTIVITIES } from '../utils/queries';
import auth from "../utils/auth";

function Activities(props) {    
    const [activity, setActivity] = React.useContext(UserContext);
    const [vote, setVote] = React.useContext(UserContext);
    const [user] = React.useContext(UserContext);
    const { data } = useQuery(QUERY_ACTIVITIES);


    const [addActivity] = useMutation(ADD_ACTIVITY, {
        // Add user to context
        onCompleted({ addActivity }) {
          // Set activity in context (not token - their data)
          setActivity(addActivity.activity);
          setModalIsOpen(false);
        },
      });

      const [addVote] = useMutation(ADD_VOTE, {
        // Add user to context
        onCompleted({ addVote }) {
          // Set activity in context (not token - their data)
          setVote(addVote.vote);
        },
      });

      const handleSubmit = (event) => {
        event.preventDefault();
        const submission = Object.fromEntries(new FormData(event.target));
        try {
            addActivity({
              variables: submission,
              refetchQueries: ["activities"],
            });
        } catch (error) {
        //TODO: Handle error with a reusable error component
           console.error(error.message);
        }
      };

      const handleVote = (event) => {
        
        console.log("CLICK");
        try {
            addVote({
              variables: {activityId: event.target.closest("section").id},
              refetchQueries: ["activities"],
            });
        } catch (error) {
        //TODO: Handle error with a reusable error component
           console.error(error.message);
        }
      };


    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <main className="flex flex-col items-center mt-4 w-11/12 md:w-5/6 lg:w-3/4 gap-4">
            <div className="flex flex-row justify-between items-center w-5/6">
                <h2 className="text-2xl font-bold self-start">Activities {user?.data ? <span></span> : <span className="text-base">(Log in to like)</span> }</h2>   
                {user?.data ?
                    <button onClick={() => setModalIsOpen(true)} className="px-2 py-1 bg-yellow-200 border border-yellow-600 rounded-lg">+ activity</button>
                    :
                    <button className="hidden">+</button>
                }
            </div>
            {/* TODO: Consider if <section> tag is appropriate for 'activityTile' */}
            <div id="activityContainer" className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between lg:w-5/6">
                {data?.activities.map((activity, index) => (
                    <section key={activity._id} className="activityTile flex flex-row justify-between border border-yellow-600 rounded-lg w-full lg:w-5/12 p-2" id={activity._id}>
                        <div className="w-8/12">
                            <p>{activity.when}</p>
                            <p className="font-bold">{activity.where}</p>
                            <p>{activity.description}</p>
                        </div>
                        <div className="flex justify-end items-center w-3/12">
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-col items-center gap-1">
                                {/* TODO: button currently toggles between the buttons, fix it */}
                                {user?.data ?
                                <>
                                        <button className="p-1 border-2 bg-green-300 border-green-600 text-green-900 rounded" type="submit"><ion-icon name="thumbs-up" onClick={handleVote} /></button>
                                        <p>{activity.voteCount}</p>
                                        </>
                                    :
                                    <>
                                        <button className="p-1 border-2 bg-green-300 border-green-600 text-green-900 rounded"><ion-icon name="thumbs-up" onClick={handleVote} /></button>
                                        <p>{activity.voteCount}</p>
                                        </>
                                }
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            
            <Modal 
                isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={false} 
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            
                        },
                        content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px',
                        transform: 'translate(-50%, -50%)'
                        }
                    }    
                }
                >
                <div id="newActivity" className="flex flex-col justify-center items-center p-4 mt-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg">
                    <h2 className="font-bold">Add Activity</h2>
                    <form onSubmit={handleSubmit} className="signup-form flex flex-col justify-start items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="where" className="font-bold self-start">Where:</label>
                            <input className="form-input" type="text" id="where" name="where" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="when" className="font-bold self-start">When:</label>
                            <input className="form-input" type="date" id="when" name="when" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            htmlFor="description"
                            className="font-bold self-start"
                            >Description:</label>
                            <textarea rows="4" cols="40" className="form-input" id="description" name="description" ></textarea>   
                        </div>
                        <button className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                            type="submit" >Submit</button>
                    </form>
                </div>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </main>
    )
}

Activities.propTypes = {
    date: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
};

export default Activities