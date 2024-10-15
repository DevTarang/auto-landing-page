import React, { useState } from 'react';
import "./basic.css";
import Pic from "./../../assets/pic.avif";

function Basic() {
    const [formData, setFormData] = useState({
        header: { title: '' },
        title_section: { title: '', descp: '', img: '' },
        offerings: [{ offering: '' }],
        feedback: [{ name: '', feedback: '' }],
        about: [{ about: '' }],
        login_colour: { color: "#009ae0"},
    });

    const [generatedCode, setGeneratedCode] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedCode) 
          .then(() => {
            setIsCopied(true); 
            setTimeout(() => setIsCopied(false), 2000); 
          })
          .catch(err => console.error('Error copying text: ', err));
      };

  const addOffering = () => {
    setFormData(prevData => ({
      ...prevData,
      offerings: [...prevData.offerings, { offering: "" }]
    }));
  };

  const addFeedback = () => {
    setFormData(prevData => ({
      ...prevData,
      feedback: [...prevData.feedback, { name: "", feedback: "" }]
    }));
  };

  const addAbout = () => {
    setFormData(prevData => ({
      ...prevData,
      about: [...prevData.about, { about: "" }]
    }));
  };

  const handleInputChange = (section, index, field, value) => {
    if (!formData[section]) {
      formData[section] = Array.isArray(formData[section]) ? [] : {};
    }
  
    if (index !== null) {
      if (!formData[section][index]) {
        formData[section][index] = {};
      }
      formData[section][index][field] = value;
    } else {
      formData[section][field] = value;
    }
  
    setFormData({ ...formData });
  };
  

  const generateCode = () => {
    const offeringsHTML = formData.offerings
      .map(item => `<div class="content-box">${item.offering}</div>`)
      .join("");

    const feedbackHTML = formData.feedback
      .map(item => `
        <div class="content-box">
          <strong class="user-name">${item.name}</strong>
          ${item.feedback}
        </div>
      `)
      .join("");

    const aboutHTML = formData.about
      .map(item => `<div class="small-header">${item.about}</div>`)
      .join("");

    const generatedHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="${formData.title_section.descp}">
        <meta name="title" content="${formData.header.title}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='${formData.title_section.descp}'>
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
        <link rel="stylesheet" href="https://classplusapp.com/org/divas/styles.css" />
      </head>
      <body>
        <div class="w-full h-screen">
          <div class="flex mt-[30px] h-[80vh] mx-[40px] border-2 shadow-lg shadow-gray-300 rounded-lg m-auto border-gray-200">
            <div class="main-page">
              <div class="header" id="header">
                <img class="header-logo bdr-rad-8" src="${formData.title_section.img}" loading="lazy" alt="${formData.title_section.title}" />
                <span class="font-size-lg-bold header-name">${formData.header.title}</span>
              </div>
              <div class="main-section">
                <div class="instructor mb-1 border-bottom">
                  <img class="instructor-img bdr-rad-12 mb-5" src="${formData.title_section.img}" loading="lazy" alt="${formData.title_section.title}" /><br/>
                  <span class="font-size-lg-bold mb-5">${formData.title_section.title}</span>
                  <br/>
                  <span class="instructor-desc small-header">${formData.title_section.descp}</span>
                </div>
                <div class="offerings border-bottom">
                  <div class="font-size-lg-bold mb-1">Our offerings</div>
                  ${offeringsHTML}
                </div>
                <div class="feedback border-bottom">
                  <p class="font-size-lg-bold mb-1">Student feedback</p>
                  ${feedbackHTML}
                </div>
                <div class="summary">
                  <p class="font-size-lg-bold mb-1">About Us</p>
                  ${aboutHTML}
                </div>
              </div>
              <div class="sticky-footer">
                <button class="btn" style="background-color: ${formData.login_colour.color};">Login</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Display the generated code
    console.log(generatedHTML);
    setGeneratedCode(generatedHTML);

    // alert("Generated Code:\n\n" + generatedHTML);
  };

  return (
    <div className="w-full">
      <div className=" mt-[30px]  mx-[40px] border-2 shadow-lg shadow-gray-300 rounded-lg m-auto border-gray-200">
        <div className="main-pages overflow-scroll p-[20px]">
          {/* Header Section */}
          <div className="header" id="header">
            <img className="header-logo bdr-rad-8" src={Pic} loading="lazy" alt="LearnVell" />
            <input 
              type="text" 
              className="font-size-lg-bold header-name border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
              placeholder="Enter Header Title" 
              onChange={(e) => handleInputChange('header', null, 'title', e.target.value)} 
            />
          </div>
          {/* Main Section */}
          <div className="main-section">
            <div className="instructor mb-1 border-bottom">
              <img className="instructor-img bdr-rad-12 mb-5" src={Pic} loading="lazy" alt={formData.title_section.img_name} />
              <input 
                type="text" 
                className="font-size-lg-bold mb-5 border-2 shadow-sm p-[10px] rounded-lg shadow-gray-300" 
                placeholder="Enter Title" 
                onChange={(e) => handleInputChange('title_section', null, 'title', e.target.value)} 
              />
              <br/>
              <input 
                type="text" 
                className="instructor-desc small-header border-2 shadow-sm p-[8px] rounded-lg shadow-gray-300" 
                placeholder="Enter Description" 
                onChange={(e) => handleInputChange('title_section', null, 'descp', e.target.value)} 
              />
              <br />
            </div>
            {/* Offerings */}
            <div className="offerings border-bottom mb-[20px] pb-[20px]">
              <div className="font-size-lg-bold mb-1">Our offerings</div>
              {formData.offerings.map((offering, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] w-full rounded-lg shadow-gray-300" 
                    placeholder="Enter Offering" 
                    value={offering.offering} 
                    onChange={(e) => handleInputChange('offerings', index, 'offering', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addOffering} className="p-[8px] hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white rounded-lg text-[10px]">Add Offering</button>
            </div>
            {/* Feedback */}
            <div className="feedback border-bottom mb-[20px] pb-[20px]">
              <p className="font-size-lg-bold mb-1">Student feedback</p>
              {formData.feedback.map((item, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] w-1/5 rounded-lg shadow-gray-300" 
                    placeholder="Enter Name" 
                    value={item.name} 
                    onChange={(e) => handleInputChange('feedback', index, 'name', e.target.value)} 
                  />
                  <br/>
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] rounded-lg w-full shadow-gray-300" 
                    placeholder="Enter Feedback" 
                    value={item.feedback} 
                    onChange={(e) => handleInputChange('feedback', index, 'feedback', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addFeedback} className="p-[8px] hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white rounded-lg text-[10px]">Add Feedback</button>
            </div>
            {/* About Us */}
            <div className="about border-bottom mb-[20px] pb-[20px]">
              <p className="font-size-lg-bold mb-1">About Us</p>
              {formData.about.map((item, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter About" 
                    value={item.about} 
                    onChange={(e) => handleInputChange('about', index, 'about', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addAbout} className="p-[8px] hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white rounded-lg text-[10px]">Add About</button>
            </div>
          </div>
          {/* Footer Section */}
          <div className="sticky-footer relative">
            <input 
              type="text" 
              className='content-box border-2 shadow-sm text-gray-400 p-[5px] rounded-lg shadow-gray-300'
              placeholder="Enter Colour" 
              value={formData.login_colour.color}
              onChange={(e) => handleInputChange('login_colour', null, "color", e.target.value)} 
            />
            <button
                onMouseEnter={() => setShowInfo(true)} 
                onMouseLeave={() => setShowInfo(false)} 
                className="px-[8px] ml-[20px] border-2 italic relative border-gray-400 text-gray-400 rounded-full"
            >
                i
            </button>

            {showInfo && (
                <div
                    style={{
                        position: 'absolute',
                        bottom:"10px",
                        left:"250px",
                        backgroundColor: '#fff',
                        border: '1px solid lightblue',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '5px',
                        zIndex: 10, 
                        whiteSpace: 'nowrap' 
                    }}
                >
                    <p>--white: #ffffff;</p>
                    <p>--purple: #595BD4;</p>
                    <p>--default: #009ae0;</p>
                    <p>--grey : #e5e5e5;</p>
                    <p>--dark-grey : #7a8b94;</p>
                    <p>--light-pink : #fd325933;</p>
                    <p>--light-brown: #fe952633;</p>
                    <p>--sky-blue :#009ae033;</p>
                    <p>--rust: #E6632F;</p>
                    <p>--black : #000000;</p>
                    <p>--darkgreen : #006666;</p>
                    <p>--green : #53D86A;</p>
                    <p>--orange : #FE9526;</p>
                    <p>--pink : #FD3259;</p>
                    <p>--red : #FD3D39;</p>
                    <p>--yellow : #ffd000;</p>
                </div>
            )}
            <br/>
            <button className="p-[12px] mt-[10px] bg-red-500 text-white hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white rounded-lg text-[18px]" onClick={generateCode}>Generate Code</button>
          </div>
        </div>
      </div>
      <div className="generated-code-container" style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
            <div className='flex justify-between items-center'>
                <h3>Generated Code:</h3>
                <button
                    onClick={handleCopy}
                    className={`w-40 h-12 text-white font-semibold rounded-lg transition duration-300 
                    ${isCopied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isCopied ? 'Copied!' : 'Copy Text'}
                </button>
                </div>
                <pre>{generatedCode}</pre>
        </div>
    </div>
  );
}

export default Basic;
