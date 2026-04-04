import React from 'react';
import NewCarHeros from '../../assets/NewCarHero.png'
const NewCarHero = () => {
    return (
        <div>
            <div className='bg-white text-center'>
                <h3 className='text-3xl text-red-600 font-bold pt-5'>New Car</h3>
                <h1 className='text-5xl text-black font-bold mt-5'>Discover our new cars</h1>
                <img className='w-full mt-10' src={NewCarHeros} alt="" />


            </div>
        </div>
    );
};

export default NewCarHero;