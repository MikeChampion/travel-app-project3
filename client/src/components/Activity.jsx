import { useState } from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';

const activities = [
    {
        date: "10/31/2021",
        name: "Halloween",
        desc: "Candy, costumes, parties, a bunch more text just to see what this does at much larger content"
    },
    {
        date: "11/25/2021",
        name: "Turkey Day",
        desc: "Food, Football, PIE!"
    },
    {
        date: "12/25/2021",
        name: "X-Mas",
        desc: "Gifts (hopefully no socks), food"
    },
  ];

function Activities(props) {    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <main className="flex flex-col items-center mt-4 w-11/12 md:w-5/6 lg:w-3/4 gap-4">
            <div className="flex flex-row justify-between items-center w-5/6">
                <h2 className="text-2xl font-bold self-start">Activities</h2>
                <button onClick={() => setModalIsOpen(true)} className="px-2 py-1 bg-yellow-200 border border-yellow-600 rounded-lg">+ activity</button>
            </div>
            <div id="activityContainer" className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between lg:w-5/6">
                {activities.map((activity, index) => (
                    <div key={index} className="activityTile flex flex-row justify-between border border-yellow-600 rounded-lg w-full lg:w-5/12 p-2">
                        <div className="w-8/12">
                            <p>{activity.date}</p>
                            <p className="font-bold">{activity.name}</p>
                            <p>{activity.desc}</p>
                        </div>
                        <div className="flex justify-end items-center w-3/12">
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    {/* <button className="p-1 border-2 bg-green-300 border-green-600 text-green-900 rounded"><ion-icon name="thumbs-up"></ion-icon></button> */}
                                    <button onClick={e => {this.showModal();}} className="p-1 border-2 bg-green-300 border-green-600 text-green-900 rounded"><ion-icon name="thumbs-up"></ion-icon></button>
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
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
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
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
                <div id="newActivity" className="flex flex-col justify-center items-center p-4 mt-4 w-max border-yellow-600 border-2 bg-yellow-300 rounded-lg ">
                    <h2 className="font-bold">Add Activity</h2>
                    <form className="signup-form flex flex-col justify-start items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="name-signup" className="font-bold self-start">Where:</label>
                            <input className="form-input" type="text" id="name-signup" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label htmlFor="email-signup" className="font-bold self-start">When:</label>
                            <input className="form-input" type="text" id="email-signup" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label
                            htmlFor="password-signup"
                            className="font-bold self-start"
                            >Description:</label>
                            <textarea rows="4" cols="40" className="form-input" id="password-signup"></textarea>   
                        </div>
                        <button className="border-yellow-900 border bg-yellow-600 rounded-lg px-2 py-1 self-end text-white"
                            type="submit">Submit</button>
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
    desc: PropTypes.string
};

export default Activities