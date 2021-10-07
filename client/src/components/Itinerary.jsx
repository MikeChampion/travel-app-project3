import PropTypes from "prop-types";

const itinerary = [
    {
        name: "Mike and November",
        modeOfTravel: "car",
        inDate: "11/23/2021",
        outDate: "11/28/2021",
        other: "We're bringing games!",
    },
    {
        name: "Bill and Amber",
        modeOfTravel: "airplane",
        inDate: "11/24/2021",
        outDate: "11/29/2021",
        other: "We'll have puzzles!",
    },

    ];

function Itinerary(props) {   
    return (
        <main className="flex flex-col items-center mt-4 w-11/12 md:w-5/6 lg:w-3/4 gap-4">
            <div className="flex flex-row justify-between items-center w-full">
                <h2 className="text-2xl font-bold self-start">Itinerary</h2>
                <a href="/addItinerary" class="px-2 py-1 bg-yellow-200 border border-yellow-600 rounded-lg">+ itinerary</a>
            </div>
            <div id="itineraryContainer" className="flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:justify-between w-full lg:w-5/6">
                {itinerary.map((item, index) => (
                    <div key={index} className="itineraryTile flex flex-col items-start border border-yellow-600 rounded-lg w-11/12 md:w-5/6 lg:w-5/12 p-2 gap-2">
                        <div className="flex flex-row justify-between w-full">
                            <p><ion-icon name={`${item.modeOfTravel}-outline`} class={"text-lg md:text-xl lg:text-2xl text-blue-900"}></ion-icon></p>
                            <p>{item.inDate} - {item.outDate}</p>
                        </div>
                        <p className="font-bold w-full">{item.name}</p>
                        <p className="items-center w-full">{item.other}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

Itinerary.propTypes = {
    name: PropTypes.string,
    modeOfTravel: PropTypes.string,
    inDate: PropTypes.string,
    outDate: PropTypes.string,
    other: PropTypes.string,
};

export default Itinerary