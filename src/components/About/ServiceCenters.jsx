import React from 'react';
import servicecenter1 from '../../assets/servicecenter1.png'
import servicecenter2 from '../../assets/servicecenter2.png'
import servicecenter3 from '../../assets/servicecenter3.png'
import servicecenter4 from '../../assets/servicecenter4.png'
const ServiceCenters = () => {
    return (
        <div className='border-2 border-amber-400 bg-white text-black w-full grid grid-cols-2 gap-10' >
          <div className='Card1 flex gap-5'>
            <img className='w-[282px] h-[332px] ' src={servicecenter1} alt="" />
            <div>
                <h3 className='text-xl font-bold'>DiT Göttingen</h3>
                <p className='text-gray-500'>Hans-Böckler-Str. 26, 37079 Göttingen</p>                                
                <p className='text-gray-500'>Telephone:0551 - 30 54 07 0 </p>                                
                <p className='text-gray-500'>Fax: 0551 - 30 54 07 29</p>   

                <h3 className='text-xl font-bold mt-5'>Service</h3>
                <p className='text-gray-500'>Mon.-Thurs. 8:00 - 17:00 and Fri. 8:00 - 15:00</p>                                
                <p className='text-gray-500'>Sat. Closed </p>                                 

                <h3 className='text-xl font-bold mt-5'>Sales</h3>
                <p className='text-gray-500'>Mon.-Fri. 8:00 - 17:30 <br />Sat. 9:00 - 13:00</p>                                
                  

            </div>

          </div>

            <div className='Card2 flex gap-5'>
            <img className='w-[282px] h-[332px] ' src={servicecenter2} alt="" />
            <div>
                <h3 className='text-xl font-bold'>Autohaus Royal GmbH</h3>
                <p className='text-gray-500'>Hans-Böckler-Str. 26, 37079 Göttingen</p>                                
                <p className='text-gray-500'>Telephone:0551 - 30 54 07 0 </p>                                
                <p className='text-gray-500'>Fax: 0551 - 30 54 07 29</p>   

                <h3 className='text-xl font-bold mt-5'>Service</h3>
                <p className='text-gray-500'>Mon.-Thurs. 8:00 - 17:00 and Fri. 8:00 - 15:00</p>                                
                <p className='text-gray-500'>Sat. Closed </p>                                 

                <h3 className='text-xl font-bold mt-5'>Sales</h3>
                <p className='text-gray-500'>Mon.-Fri. 8:00 - 17:30 <br />Sat. 9:00 - 13:00</p>                                
                  

            </div>

          </div>
            <div className='Card3 flex gap-5'>
            <img className='w-[282px] h-[332px] ' src={servicecenter3} alt="" />
            <div>
                <h3 className='text-xl font-bold'>Car Dealer Tabor</h3>
                <p className='text-gray-500'>Hans-Böckler-Str. 26, 37079 Göttingen</p>                                
                <p className='text-gray-500'>Telephone:0551 - 30 54 07 0 </p>                                
                <p className='text-gray-500'>Fax: 0551 - 30 54 07 29</p>   

                <h3 className='text-xl font-bold mt-5'>Service</h3>
                <p className='text-gray-500'>Mon.-Thurs. 8:00 - 17:00 and Fri. 8:00 - 15:00</p>                                
                <p className='text-gray-500'>Sat. Closed </p>                                 

                <h3 className='text-xl font-bold mt-5'>Sales</h3>
                <p className='text-gray-500'>Mon.-Fri. 8:00 - 17:30 <br />Sat. 9:00 - 13:00</p>                                
                  

            </div>

          </div>
            <div className='Card4 flex gap-5'>
            <img className='w-[282px] h-[332px] ' src={servicecenter4} alt="" />
            <div>
                <h3 className='text-xl font-bold'>Autohaus GmbH Hamburg</h3>
                <p className='text-gray-500'>Hans-Böckler-Str. 26, 37079 Göttingen</p>                                
                <p className='text-gray-500'>Telephone:0551 - 30 54 07 0 </p>                                
                <p className='text-gray-500'>Fax: 0551 - 30 54 07 29</p>   

                <h3 className='text-xl font-bold mt-5'>Service</h3>
                <p className='text-gray-500'>Mon.-Thurs. 8:00 - 17:00 and Fri. 8:00 - 15:00</p>                                
                <p className='text-gray-500'>Sat. Closed </p>                                 

                <h3 className='text-xl font-bold mt-5'>Sales</h3>
                <p className='text-gray-500'>Mon.-Fri. 8:00 - 17:30 <br />Sat. 9:00 - 13:00</p>                                
                  

            </div>

          </div>

        </div>
    );
};

export default ServiceCenters;