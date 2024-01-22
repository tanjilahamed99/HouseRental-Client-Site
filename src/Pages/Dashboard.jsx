import { Outlet } from "react-router-dom";
import UseUserRole from "../Hooks/UseUserRole";

const Dashboard = () => {

    const [ role ] = UseUserRole()
    console.log(role)

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;