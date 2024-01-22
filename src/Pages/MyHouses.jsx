import { useContext } from "react";
import DashBoardTittle from "../Components/Shared/DashBoardTittle";
import { FaPlus } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const MyHouses = () => {

    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()

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
                }
            })


    }


    return (
        <div>
            <DashBoardTittle subTittle={"houses"} tittle={"My Houses"}></DashBoardTittle>
            <button className="btn btn-primary mt-4" onClick={() => document.getElementById('my_modal_3').showModal()}><FaPlus /> Add New House</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={createNewHouseAdd} className="card-body shadow-2xl shadow-gray-400">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" value={user?.displayName} className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Address</span>
                            </label>
                            <input name="address" type="text" placeholder="address" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">city</span>
                            </label>
                            <input name="city" type="text" placeholder="city" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Bedrooms</span>
                            </label>
                            <input name="bedrooms" type="number" placeholder="bedrooms" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Bathrooms</span>
                            </label>
                            <input name="bathrooms" type="number" placeholder="bathrooms" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">RoomSize</span>
                            </label>
                            <input name="roomSize" type="text" placeholder="roomSize" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Picture</span>
                            </label>
                            <input name="picture" type="text" placeholder="picture" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">availabilityDate</span>
                            </label>
                            <input name="availabilityDate" type="date" placeholder="availabilityDate" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">rent</span>
                            </label>
                            <input name="rent" type="number" placeholder="rent" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Phone Number</span>
                            </label>
                            <input name="phoneNumber" type="text" placeholder="phoneNumber" className="p-4 rounded-md border-b-4" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Description</span>
                            </label>
                            <textarea name="desc" type="text" placeholder="description" className="p-4 rounded-md border-b-4 textarea textarea-bordered" required />
                        </div>
                        <div method="dialog" className="form-control mt-6">
                            <button className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                        </div>
                        <form method="dialog">
                            <button className="btn btn-outline btn-primary text-white">Add New House</button>
                            {/* <button className="btn btn-sm btn-circle btn-ghost  right-2 top-2">✕</button> */}
                        </form>
                    </form>

                </div>
            </dialog>
        </div>j
    );
};

export default MyHouses;