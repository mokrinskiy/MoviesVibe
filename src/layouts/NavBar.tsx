import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Modal from "../components/SearchModal";
import SearchModal from "../components/SearchModal";

const NavBar: React.FC = () => {
    return (
        <div className="navbar fixed z-50">
            {/* navbar start */}
            <div className="navbar-start">
                {/* mobile dropdown */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <MenuIcon />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <NavLink className="text-lg" to={"/catalog"}>
                                Movies & TV Shows
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/support"}>Support</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to={"/"} className="btn btn-ghost text-xl">
                    <img className="w-[30px] h-[30px]" src="logo.png" />
                    Movies
                </NavLink>
            </div>
            {/* navbar center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink className="text-lg" to={"/catalog"}>
                            Movies & TV Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-lg" to={"/support"}>
                            Support
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* navbar end */}
            <div className="navbar-end">
                <button
                    onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                    }
                    className="btn btn-square"
                >
                    <SearchIcon />
                </button>
                <SearchModal />
            </div>
        </div>
    );
};

export default NavBar;
