import DashBoardTittle from "../Components/Shared/DashBoardTittle";
import DisplayMyData from "../Hooks/DisplayMyData";
import UseMyBookingData from "../Hooks/UseMyBookingData";

const MyBookings = () => {

    const [myBookingData] = UseMyBookingData()
    console.log(myBookingData)

    return (
        <div>
            <DashBoardTittle subTittle={'House'} tittle={"My Bookings"}></DashBoardTittle>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
                {
                    myBookingData?.map(house => <DisplayMyData house={house} key={house._id}></DisplayMyData>)
                }
            </div>
        </div>
    );
};

export default MyBookings;