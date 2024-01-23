import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import DisplayHouseData from "./DisplayHouseData";

const House = () => {
    const axiosPublic = UseAxiosPublic()
    const [houseData, setHouseData] = useState([])
    useEffect(() => {
        axiosPublic.get('/allHouse')
            .then(res => setHouseData(res.data))
    }, [axiosPublic])


    console.log(houseData)



    return (
        <div className="my-20">
            <div className="w-[70%] mx-auto flex items-center">
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button className="btn btn-primary btn-outline">Search</button>
            </div>
            <div className="flex gap-3 items-center my-10">
                <select className="select select-bordered">
                    <option disabled selected>City</option>
                    <option>Dhaka</option>
                    <option>Narsingdi</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>Sylhet</option>
                    <option>Barisal</option>
                    <option>Rangpur</option>
                    <option>Comilla</option>
                    <option>Narayanganj</option>
                    <option>Gazipur</option>
                </select>
                <select className="select select-bordered">
                    <option disabled selected>Bed Rooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select className="select select-bordered">
                    <option disabled selected>availability</option>
                    <option>Available</option>
                    <option>Booked</option>
                </select>
                <select className="select select-bordered">
                    <option disabled selected>Room Size</option>
                    <option>Bigger</option>
                    <option>Small</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {
                    houseData?.map(house => <DisplayHouseData key={house._id} house={house}></DisplayHouseData>)
                }
            </div>
        </div>
    );
};

export default House;