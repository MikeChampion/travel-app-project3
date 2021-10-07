import PropTypes from "prop-types";

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
    return (
        <main className="flex flex-col items-center mt-4 w-11/12 md:w-5/6 lg:w-3/4 gap-4">
            <div className="flex flex-row justify-between items-center w-5/6">
                <h2 className="text-2xl font-bold self-start">Activities</h2>
                <a href="/addActivity" class="px-2 py-1 bg-yellow-200 border border-yellow-600 rounded-lg">+ activity</a>
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
                            <div class="flex flex-row gap-2">
                                <div class="flex flex-col items-center gap-1">
                                    <button class="p-1 border-2 bg-green-300 border-green-600 text-green-900 rounded"><ion-icon name="thumbs-up"></ion-icon></button>
                                    <p>4</p>
                                </div>
                                <div class="flex flex-col items-center gap-1">
                                    <button class="p-1 border-2 bg-red-300 border-red-600 text-red-900 rounded"><ion-icon name="thumbs-down"></ion-icon></button>
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main> 
    )
}

Activities.propTypes = {
    date: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string
};

export default Activities