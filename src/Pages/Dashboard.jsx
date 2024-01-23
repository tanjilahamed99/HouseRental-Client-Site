import { NavLink, Outlet } from "react-router-dom";
import UseUserRole from "../Hooks/UseUserRole";

const Dashboard = () => {

    const [role] = UseUserRole()
    console.log(role)

    return (
        <div className="grid grid-cols-5 gap-10 h-[100vh]">
            <div className="col-span-1 bg-blue-700 text-center py-10 space-y-3">

                {
                    role === "House Owner" && <>
                        <li className="list-none">
                            <NavLink
                                to="/dashboard/myHouse"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                My Houses
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                to="/dashboard/manageHouse"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                Manage House
                            </NavLink>
                        </li>
                    </>
                }
                {
                    role === "House Renter" && <>

                        <li className="list-none">
                            <NavLink
                                to="/dashboard/myBooking"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                My Bookings
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                to="/dashboard/manageBooking"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-white" : ""
                                }
                            >
                                Manage Booking
                            </NavLink>
                        </li>

                    </>
                }
                <hr />
                <li className="list-none">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
            </div>
            <div className="col-span-4 py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;