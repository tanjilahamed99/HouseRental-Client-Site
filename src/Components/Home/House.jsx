import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import DisplayHouseData from "./DisplayHouseData";

const House = () => {
    const axiosPublic = UseAxiosPublic()
    const [houseData, setHouseData] = useState([])
    const [city, setCIty] = useState("")
    const [bedrooms, setBedrooms] = useState('')
    const [availability, setAvailability] = useState()
    const [roomSize, setRoomSize] = useState("")
    const [roomPrice, setRoomPrice] = useState("")
    const [totalData, setTotalData] = useState()
    const [pageShow, setPageShow] = useState()


    useEffect(() => {
        axiosPublic.get(`/allHouse?city=${city}&bedrooms=${bedrooms}&availability=${availability}&roomSize=${roomSize}&roomPrice=${roomPrice}&page=${pageShow}`)
            .then(res => setHouseData(res.data))
    }, [axiosPublic, availability, bedrooms, roomSize, city, roomPrice,pageShow])

    useEffect(() => {
        axiosPublic.get('/totalData')
            .then(res => setTotalData(res.data.total))
    }, [axiosPublic, setTotalData])

    const maxItem = 10

    const totalPage = Math.ceil(totalData / maxItem)

    let pageNum = []

    for (let index = 0; index < totalPage; index++) {
        pageNum.push(index)
    }


    return (
        <div className="my-20">
            <div className="w-[70%] mx-auto flex items-center">
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button className="btn btn-primary btn-outline">Search</button>
            </div>
            <div className="flex gap-3 items-center my-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">City</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => setCIty('Dhaka')}>Dhaka</a></li>
                        <li ><a onClick={() => setCIty('Narsingdi')}>Narsingdi</a></li>
                        <li ><a onClick={() => setCIty('Khulna')}>Khulna</a></li>
                        <li ><a onClick={() => setCIty('Sylhet')}>Sylhet</a></li>
                        <li ><a onClick={() => setCIty('Barisal')}>Barisal</a></li>
                        <li ><a onClick={() => setCIty('Rangpur')}>Rangpur</a></li>
                        <li ><a onClick={() => setCIty('Comilla')}>Comilla</a></li>
                        <li ><a onClick={() => setCIty('Narayanganj')}>Narayanganj</a></li>
                        <li ><a onClick={() => setCIty('Gazipur')}>Gazipur</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">Bed Rooms</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => setBedrooms('1')}>1</a></li>
                        <li ><a onClick={() => setBedrooms('2')}>2</a></li>
                        <li ><a onClick={() => setBedrooms('3')}>3</a></li>
                        <li ><a onClick={() => setBedrooms('4')}>4</a></li>
                        <li ><a onClick={() => setBedrooms('5')}>5</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">availability</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => setAvailability(true)}>Available</a></li>
                        <li ><a onClick={() => setAvailability(false)}>Booked</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">Room Size</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => setRoomSize('desc')}>Bigger</a></li>
                        <li ><a onClick={() => setRoomSize("asc")}>Small</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">Price</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a onClick={() => setRoomPrice('asc')}>Lowest Price</a></li>
                        <li ><a onClick={() => setRoomPrice("desc")}>Hightest Price</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {
                    houseData?.map(house => <DisplayHouseData key={house._id} house={house}></DisplayHouseData>)
                }
            </div>
            <div className="flex gap-3 justify-center mt-10">
                {
                    pageNum?.map(item => <button onClick={() => setPageShow(item)} className='btn btn-outline btn-primary' key={item} >{item}</button>)
                }
            </div>
        </div>
    );
};

export default House;