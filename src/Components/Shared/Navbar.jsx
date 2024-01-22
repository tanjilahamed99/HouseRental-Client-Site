import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext)

    const ulLinks = <>
        <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Home
            </NavLink>
        </li>
        {
            user && <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-center">
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500" : ""
                    }
                >
                    DashBoard
                </NavLink>
            </li>
        }
        {
            !user && <li><Link to={'/signUp'}>SignUp</Link></li>
        }
    </>

    const handleLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "successful Logout",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }


    return (
        <div className="navbar py-3 border-b-2 container px-5 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  text-black  font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLinks
                        }
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="">
                        <h2 className="text-2xl font-bold">House Rental</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            {
                                ulLinks
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className="btn btn-outline">Logout</button> : <Link to={'/login'}><button className="btn btn-outline">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;