import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CreateHouseAdd = () => {

    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()

    const createNewHouseAdd = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = user.email
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

        const newHouser = {
            name, email, address, city, bedrooms, bathrooms, roomSize, picture, availabilityDate, rent, phoneNumber, desc
        }

        axiosPublic.post('/myHouse', newHouser)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Created New House Successful!',
                        'success'
                    )
                    navigate('/dashboard')
                    
                }
            })
    }

    return (
        <div>
            <form  onSubmit={createNewHouseAdd} method="dialog" className="card-body shadow-2xl grid grid-cols-2 items-center gap-10 shadow-gray-400">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" value={user?.displayName} className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Address</span>
                    </label>
                    <input name="address" type="text" placeholder="address" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">city</span>
                    </label>
                    <input name="city" type="text" placeholder="city" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Bedrooms</span>
                    </label>
                    <input name="bedrooms" type="number" placeholder="bedrooms" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Bathrooms</span>
                    </label>
                    <input name="bathrooms" type="number" placeholder="bathrooms" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">RoomSize</span>
                    </label>
                    <input name="roomSize" type="text" placeholder="roomSize" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Picture</span>
                    </label>
                    <input name="picture" type="text" placeholder="picture" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">availabilityDate</span>
                    </label>
                    <input name="availabilityDate" type="date" placeholder="availabilityDate" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">rent</span>
                    </label>
                    <input name="rent" type="number" placeholder="rent" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Phone Number</span>
                    </label>
                    <input name="phoneNumber" type="text" placeholder="phoneNumber" className="p-4 rounded-md border-b-4" required />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text ">Description</span>
                    </label>
                    <textarea name="desc" type="text" placeholder="description" className="p-4 rounded-md border-b-4 textarea textarea-bordered" required />
                </div>
                <div className="form-control mt-6 col-span-2">
                    <button type="submit" className="btn btn-outline btn-primary text-white">Add New House</button>
                </div>
            </form>
        </div>
    );
};

export default CreateHouseAdd;