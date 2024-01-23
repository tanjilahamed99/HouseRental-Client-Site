import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const UpdateHouseDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    const [data, setData] = useState()

    useEffect(() => {
        axiosPublic.get(`/updateHouse/${id}`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [axiosPublic, id, setData])

    const updateHouseAdd = e => {
        e.preventDefault()
        const form = e.target
        const address = form.address.value
        const city = form.city.value
        const bedrooms = form.bedrooms.value
        const bathrooms = form.bathrooms.value
        const roomSize = form.roomSize.value
        const picture = form.picture.value
        const availabilityDate = form.availabilityDate.value
        const rent = form.rent.value
        const phoneNumber = form.phoneNumber.value
        const desc = form.desc.value

        const updateHouser = {
            address, city, bedrooms, bathrooms, roomSize, picture, availabilityDate, rent, phoneNumber, desc
        }

        axiosPublic.patch(`/myHouse/${id}`, updateHouser)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Update House Successful!',
                        'success'
                    )
                    navigate('/dashboard')

                }
            })
    }



    return (
        <div>
            <form onSubmit={updateHouseAdd} method="dialog" className="card-body shadow-2xl grid grid-cols-2 items-center gap-10 shadow-gray-400">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Address</span>
                    </label>
                    <input name="address" defaultValue={data?.address} type="text" placeholder="address" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">city</span>
                    </label>
                    <input name="city" defaultValue={data?.city} type="text" placeholder="city" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Bedrooms</span>
                    </label>
                    <input name="bedrooms" defaultValue={data?.bedrooms} type="number" placeholder="bedrooms" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Bathrooms</span>
                    </label>
                    <input name="bathrooms" defaultValue={data?.bathrooms} type="number" placeholder="bathrooms" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">RoomSize</span>
                    </label>
                    <input name="roomSize" defaultValue={data?.roomSize} type="text" placeholder="roomSize" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Picture</span>
                    </label>
                    <input name="picture" defaultValue={data?.picture} type="text" placeholder="picture" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">AvailabilityDate</span>
                    </label>
                    <input name="availabilityDate" defaultValue={data?.availabilityDate} type="date" placeholder="availabilityDate" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">rent</span>
                    </label>
                    <input name="rent" type="number" defaultValue={data?.rent} placeholder="rent" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Phone Number</span>
                    </label>
                    <input name="phoneNumber" defaultValue={data?.phoneNumber} type="text" placeholder="phoneNumber" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text ">Description</span>
                    </label>
                    <textarea name="desc" type="text" placeholder="description" defaultValue={data?.desc} className="p-4 rounded-md border-b-4 textarea textarea-bordered" required />
                </div>
                <div className="form-control mt-6 col-span-2">
                    <button type="submit" className="btn btn-outline btn-primary text-white">Add New House</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateHouseDetails;