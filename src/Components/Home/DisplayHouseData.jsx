
import PropTypes from 'prop-types';
import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayHouseData = ({ house }) => {
    const { name, email, address, city, bedrooms, roomSize, picture, availabilityDate, rent, phoneNumber, desc } = house
    return (
        <Link className=' shadow-md hover:shadow-lg pb-5'>
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
                        <h4 className='font-bold text-lg'>{name}</h4>
                        <p className='text-sm font-bold'>Owner</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='flex gap-2 items-center text-[#616161]'><FaBed className='text-2xl'></FaBed><span className='text-lg'>{bedrooms}</span></h2>
                </div>
            </div>
        </Link>
    );
};

DisplayHouseData.propTypes = {
    house: PropTypes.array
};

export default DisplayHouseData;