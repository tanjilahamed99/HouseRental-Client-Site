import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import UseMyHousesData from "../Hooks/UseMyHousesData";
import { Link } from "react-router-dom";

const ManageHouse = () => {
    const axiosPublic = UseAxiosPublic()
    const [myHousesData, refetch] = UseMyHousesData()
    console.log(myHousesData)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/myHouse/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    })

            }
        });

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myHousesData?.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.city}</div>
                                            <div className="text-sm opacity-50">${item.rent}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/dashboard/updateHouseDetails/${item._id}`}>
                                        <button className="btn btn-ghost btn-outline text-green-500">Update</button>
                                    </Link>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-outline text-red-600">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageHouse;