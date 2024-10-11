import React, {  } from 'react';

function Medium() {
  return (
    <div className="w-full h-screen">
      <div className='flex mt-[30px] h-[80vh]'>
        {/* left */}
        <div className='w-1/2 p-[30px] flex flex-col gap-[20px]'>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >Title</button>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >Description</button>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >Our offerings</button>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >Student's Feedback</button>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >About Us</button>
          <button className='font-semibold border-2 w-[300px] border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto ' >Login Button Colour</button>
        </div>
        {/* right */}
        <div className='w-1/2'>

        </div>
      </div>
    </div>
  );
}

export default Medium;
