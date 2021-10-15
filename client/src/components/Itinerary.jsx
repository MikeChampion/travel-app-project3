import { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "../context/UserContext";
import React from 'react';
import Modal from 'react-modal';
import { ADD_TRAVEL } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TRAVELS } from '../utils/queries';

function Itinerary(props) {   
    const [_, setTravel] = React.useContext(UserContext);
    
    const { data } = useQuery(QUERY_TRAVELS);
    console.log(data);

    const [addTravel] = useMutation(ADD_TRAVEL, {
        // Add user to context
        onCompleted({ addTravel }) {
          // Set activity in context (not token - their data)
          setTravel(addTravel.travel);
          setModalIsOpen(false);
        },
      });

      const handleSubmit = (event) => {
        event.preventDefault();
        const submission = Object.fromEntries(new FormData(event.target));
        try {
            addTravel({
              variables: submission,
              refetchQueries: ["travels"],
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
                <h2 className="text-2xl font-bold self-start">Itinerary</h2>
                <button onClick={() => setModalIsOpen(true)} className="px-2 py-1 bg-yellow-200 border border-yellow-600 rounded-lg">+ itinerary</button>
            </div>
            <div id="itineraryContainer" className="flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-between w-full lg:w-5/6">
                {data?.travels.map((item, index) => (
                    <div key={index} className="itineraryTile flex flex-col items-start border border-yellow-600 rounded-lg w-11/12 md:w-5/6 lg:w-5/12 p-2 gap-2">
                        <div className="flex flex-row justify-between w-full">
                            <p className="text-lg md:text-xl lg:text-2xl"><ion-icon name={`${item.how}-outline`}></ion-icon></p>
                            <p>{item.arrive} - {item.depart}</p>
                        </div>
                        <p className="font-bold w-full">{item.who}</p>
                        <p className="items-center w-full">{item.notes}</p>
                    </div>
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
                <div id="itinerary" className="flex flex-col justify-center items-center p-4 mt-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg"
                >
                    <h2 className="font-bold">Add itinerary</h2>
                    <form onSubmit={handleSubmit} className="newItinerary-form flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label for="who" className="font-bold self-start">Who:</label>
                            <input className="form-input" type="text" id="who" name="who" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label for="how" className="font-bold self-start">How:</label>
                            <select className="form-input" type="text" id="how" name="how">
                                <option value="car">Car</option>
                                <option value="airplane">Plane</option>
                                <option value="boat">Boat</option>
                                <option value="train">Train</option>
                            </select>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label for="arrive" className="font-bold self-start">Arrive:</label>
                            <input className="form-input" type="date" id="arrive" name="arrive" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label for="depart" className="font-bold self-start">Depart:</label>
                            <input className="form-input" type="date" id="depart" name="depart" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            for="notes"
                            className="font-bold self-start"
                            >Other info:</label>
                            <textarea rows="4" cols="40" className="form-input" id="notes" name="notes"></textarea>   
                        </div>
                        <button className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white" type="submit">Submit</button>
                    </form>
                </div>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>

        </main>
    )
}

Itinerary.propTypes = {
    who: PropTypes.string,
    how: PropTypes.string,
    arrive: PropTypes.string,
    depart: PropTypes.string,
    notes: PropTypes.string,
};

export default Itinerary