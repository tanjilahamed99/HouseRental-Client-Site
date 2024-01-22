import PropTypes from 'prop-types';

const DashBoardTittle = ({ tittle, subTittle }) => {
    return (
        <div className='text-center'>
            <h1 className='text-sm font-bold'>{tittle}</h1>
            <h1 className='text-3xl font-bold mt-1 uppercase'>{subTittle}</h1>
        </div>
    );
};

DashBoardTittle.propTypes = {
    tittle: PropTypes.string,
    subTittle: PropTypes.string
};

export default DashBoardTittle;