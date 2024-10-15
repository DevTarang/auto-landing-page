import './App.css';
import React, { useState } from 'react';
import Basic from './pages/basic/basic';
import Medium from './pages/medium/medium'; 

function App() {
  const [selectedPage, setSelectedPage] = useState(null); 

  return (
    <div className="w-full ">
      <div className='w-full h-[10vh] bg-gray-100 flex justify-between items-center px-10'>
        {selectedPage ? (
          <button className='font-bold text-[30px]' onClick={()=>setSelectedPage(null)}>←</button>
        ) : (
          <div></div> 
        )}
        <h1 className='text-[26px] font-bold text-blue-400'>Ios Landing Page Generator</h1>
        <div></div>
      </div>
      
      {selectedPage === 'basic' ? (
        <Basic /> 
      ) : selectedPage === 'medium' ? (
        <Medium /> 
      ) : (
        <div className='w-full h-[80vh] flex flex-wrap'>
          <button 
            className='w-[400px] h-[400px] text-[30px] font-semibold border-2 border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto' 
            onClick={() => setSelectedPage('basic')}  
          >
            Basic
          </button>
          <button 
            className='w-[400px] h-[400px] text-[30px] font-semibold border-2 border-gray-200 p-[10px] text-[#363062] hover:text-white hover:bg-blue-300 shadow-md shadow-gray-300 rounded-lg m-auto'
            onClick={() => setSelectedPage('medium')} 
          >
            Medium
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
