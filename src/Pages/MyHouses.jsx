import { Link } from "react-router-dom";
import DashBoardTittle from "../Components/Shared/DashBoardTittle";
import { FaPlus } from "react-icons/fa6";

const MyHouses = () => {

    return (
        <div>
            <DashBoardTittle subTittle={"houses"} tittle={"My Houses"}></DashBoardTittle>
            <Link to={'/dashboard/createHouseAdd'}>
                <button className="btn btn-primary mt-4" ><FaPlus /> Add New House</button>
            </Link>
        </div>
    );
};

export default MyHouses;