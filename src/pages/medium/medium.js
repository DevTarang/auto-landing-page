import React, { useState } from 'react';

function Medium() {
  const {addedComponents, setAddedComponents} = useState([]);
  return (
    <div className="w-full h-screen">
      <div className='flex mt-[30px] h-[80vh]'>
        {/* left */}
            Currently under development
        {/* right */}
        <div className='w-1/2'>

        </div>
      </div>
    </div>
  );
}

export default Medium;
