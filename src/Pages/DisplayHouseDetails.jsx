import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseUserDetails from "../Hooks/UseUserDetails";

const DisplayHouseDetails = () => {
    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const { user } = useContext(AuthContext)
    const [role] = UseUserDetails()
    const [reload, setReload] = useState()

    const { name, email, address, city, _id, bedrooms, open, bathrooms, roomSize, picture, availabilityDate, rent, phoneNumber, desc } = detail


    useEffect(() => {
        axiosPublic.get(`/updateHouse/${id}`)
            .then(res => setDetail(res.data))
    }, [axiosPublic, id, reload])


    const handleBook = e => {
        e.preventDefault()
        const renterEmail = user?.email
        const RenterName = user?.displayName
        const renterNumber = e.target.number.value
        const purchaseData = {
            renterEmail, RenterName, renterNumber, name, email, address, city, bedrooms, bathrooms, roomSize, picture, availabilityDate, rent, phoneNumber, desc,
        }


        if (role?.purchaseNumber > 0 && open == true) {
            axiosPublic.post('/purchase', purchaseData)
                .then(res => {
                    if (res.data.acknowledged) {
                        const newCount = role?.purchaseNumber - 1
                        axiosPublic.patch(`/purchaseDown/${user?.email}`, { newCount })
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Booking completed",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    axiosPublic.patch(`/house/${_id}`, { open: false })
                                        .then(res => {
                                            if (res.data.modifiedCount > 0) {
                                                setReload("again")
                                            }
                                        })
                                }
                            })
                    }
                })
        } else if (role?.purchaseNumber <= 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have book 2 houses!",
            });
        } else if (open == false) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This House is Booked",
            });
        }


    }



    return (
        <div>
            <Navbar />

            <div>
                <div className="my-20">
                    <div className="hero my-10 w-full">
                        <div className="hero-content flex-col lg:flex-row w-full gap-5">
                            <div className="lg:w-[60%] w-full">
                                <img src={picture} className=" h-[300px] md:h-[450px] lg:h-[550px] w-full rounded-lg shadow-2xl" />
                            </div>
                            <div className="lg:w-[40%] w-full">
                                <form onSubmit={handleBook} className="md:card-body space-y-3 w-full bg-[#f8f6f3]">
                                    <div>
                                        <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">Address : <span className="text-[#c19d68]">{address}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">Rent  : <span className="text-[#c19d68]">${rent}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">Available  : <span className="text-[#c19d68]">{open ? 'Available' : 'Already booking'}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="bg-white p-2 lg:p-4 font-semibold text-lg">City : {city}</h2>
                                    </div>
                                    <div>
                                        <input name="name" type="text" placeholder="" value={user?.displayName} className="p-4 rounded-md border-b-4 w-full" required />
                                    </div>
                                    <div>
                                        <input name="number" type="number" placeholder="number" className="p-4 rounded-md border-b-4 w-full" required />
                                    </div>
                                    <div className="form-control">
                                        <button className="btn btn-outline btn-primary">Book Naw</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 md:px-12 px-5 flex md:flex-row flex-col gap-20">
                        <div className="lg:w-[60%]">
                            <h2 className="font-semibold ">LUXURY House</h2>
                            <h1 className="font-bold text-3xl  my-3">{bathrooms}</h1>
                            <p>{desc}</p>
                            <div className="my-10 flex flex-col md:flex-row md:items-center gap-5 justify-between">
                                <h2 className="font-semibold text-lg">Room size: {roomSize}</h2>
                                <h2 className="font-semibold text-lg">Bath Rooms: {bathrooms}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayHouseDetails;