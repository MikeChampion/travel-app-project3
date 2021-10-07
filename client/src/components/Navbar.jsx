import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
      name: "Itinerary",
      route: "/itinerary",
  },
  {
      name: "Activities",
      route: "/activities",
  },
];

const navLoginOutLinks = [
    {
        name: "Login",
        route: "/login",
    },
    // {
    //     name: "Logout",
    //     route: "/logout",
    // },
  ];

function Navbar(props) {
    return (
        <nav className="flex flex-row justify-between items-center w-full px-4 py-2 bg-yellow-700 text-white">
            <div className="flex">
                <ion-icon name="airplane-outline"></ion-icon>
                <ion-icon name="earth-outline" class="text-2xl"></ion-icon>
            </div>
            <div className="flex flex-row gap-1 md:gap-2">
                {navLinks.map((link, index) => (
                    <NavLink key={index} to={link.route} activeClassName='bg-yellow-300 text-green-800 hover:text-yellow-900' className="text-sm md:text-lg px-2 py-1 underline rounded-lg hover:text-yellow-300 transition">
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div className="">
                {navLoginOutLinks.map((link, index) => (
                    <NavLink key={index} to={link.route} activeClassName='bg-yellow-300 text-green-800 hover:text-yellow-900' className="text-sm md:text-lg px-2 py-1 underline rounded-lg hover:text-yellow-300 transition">
                        {link.name}
                    </NavLink>
                ))}
            </div>
            
        </nav>
    )
}
  
Navbar.propTypes = {
    name: PropTypes.string,
    route: PropTypes.string,
};

export default Navbar