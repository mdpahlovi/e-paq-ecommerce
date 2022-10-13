import React, { useState } from "react";
import Logo from "../images/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const navLink = ({ isActive }) => (isActive ? "text-lg text-light font-bold" : "text-light");
    const nevMenu = `bg-accent w-full lg:w-auto fixed lg:static top-16 left-0 pb-5 lg:pb-0 transition-all duration-500 -z-10 ${
        open ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
    } lg:opacity-100 lg:translate-y-0`;

    return (
        <nav className="bg-accent sticky top-0 z-10">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center text-base-100">
                <img className="w-20 lg:w-24" src={Logo} alt="" />
                <label className="lg:hidden swap swap-rotate text-3xl cursor-pointer">
                    <input onClick={() => setOpen(!open)} type="checkbox" />
                    <CgMenuRight className="swap-off" />
                    <CgClose className="swap-on" />
                </label>
                <div className={nevMenu}>
                    <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-3">
                        <NavLink to="/" className={navLink} end>
                            Order
                        </NavLink>
                        <NavLink to="review" className={navLink}>
                            Order Review
                        </NavLink>
                        <NavLink to="inventory" className={navLink}>
                            Manage Inventory
                        </NavLink>
                        <NavLink to="about" className={navLink}>
                            About
                        </NavLink>
                        <NavLink to="contact" className={navLink}>
                            Contact
                        </NavLink>
                        <NavLink to="login" className="btn btn-primary">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
