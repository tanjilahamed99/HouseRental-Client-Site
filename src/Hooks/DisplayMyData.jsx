import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import UseAxiosPublic from './UseAxiosPublic';
import UseMyBookingData from './UseMyBookingData';
import UseUserDetails from './UseUserDetails';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const DisplayMyData = ({ house }) => {
    const { address, city, roomSize, picture, availabilityDate, rent, _id,houseId } = house
    const axiosPublic = UseAxiosPublic()
    const [, refetch] = UseMyBookingData()
    const { user } = useContext(AuthContext)
    const [role] = UseUserDetails()


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


                axiosPublic.delete(`/myBooking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const newCount = role?.purchaseNumber + 1
                            axiosPublic.patch(`/purchaseDown/${user?.email}`, { newCount })
                                .then(res => {
                                    if (res.data.modifiedCount > 0) {
                                        axiosPublic.patch(`/house/${houseId}`, { open: true })
                                            .then(res => {
                                                console.log(res.data)
                                                if (res.data.modifiedCount > 0) {
                                                    Swal.fire({
                                                        title: "Deleted!",
                                                        text: "Your file has been deleted.",
                                                        icon: "success"
                                                    });
                                                }
                                            })
                                    }
                                })
                            refetch()
                        }
                    })


            }
        });

    }



    return (
        <div className=' shadow-md hover:shadow-lg pb-5'>
            <div className='relative '>
                <img className='h-[250px] w-full mx-auto' src={picture} alt="" />
                <div className='flex items-center gap-2 absolute top-3 right-3 bg-blue-500 p-3 text-white rounded-md '>
                    <p className=''>${rent}</p>
                </div>
            </div>
            <div className='px-5 space-y-2 mt-4'>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold text-xl '>{address}</p>
                        <p className='font-bold mt-1 text-sm '>{city}</p>
                    </div>
                    <h2 className='text-sm font-bold'>{availabilityDate}</h2>
                </div>

                <div className=''>
                    <p className='font-medium text-sm text-[#616161]'>{roomSize}/Rooms</p>
                </div>
            </div>
            <hr className='w-full border my-3' />
            <div className=' flex items-center justify-between px-5'>
                <div className='flex justify-between'>
                    <div className=''>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayMyData.propTypes = {
    house: PropTypes.object
};

export default DisplayMyData;