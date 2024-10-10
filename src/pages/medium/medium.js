import React, { useState } from 'react';
import "./medium.css"; // Ensure this file includes your global CSS
import Pic from "./../../assets/pic.avif";

function Medium() {
    const [formData, setFormData] = useState({
        header: { title: '' },
        title_section: { title: '', descp: '', img: '' },
        offerings: [{ offering: '' }],
        feedback: [{ name: '', feedback: '' }],
        about: [{ about: '' }],
        login_colour: '#009ae0',
    });

    const [generatedCode, setGeneratedCode] = useState('');

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
    // Ensure the section exists in formData
    if (!formData[section]) {
      formData[section] = Array.isArray(formData[section]) ? [] : {};
    }
  
    // Handle nested sections and ensure they exist
    if (index !== null) {
      if (!formData[section][index]) {
        formData[section][index] = {};
      }
      formData[section][index][field] = value;
    } else {
      formData[section][field] = value;
    }
  
    setFormData({ ...formData }); // Update state
  };
  

  const generateCode = () => {
    // Convert formData to HTML template
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
                  <img class="instructor-img bdr-rad-12 mb-5" src="${formData.title_section.img}" loading="lazy" alt="${formData.title_section.title}" />
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
                <button class="btn" style="background-color: ${formData.login_colour};">Login</button>
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
    <div className="w-full h-screen">
      <div className=" mt-[30px]  mx-[40px] border-2 shadow-lg shadow-gray-300 rounded-lg m-auto border-gray-200">
        <div className="main-pages overflow-scroll">
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
              <img className="instructor-img bdr-rad-12 mb-5" src={formData.title_section.img} loading="lazy" alt={formData.title_section.img_name} />
              <input 
                type="text" 
                className="font-size-lg-bold mb-5 border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                placeholder="Enter Title" 
                onChange={(e) => handleInputChange('title_section', null, 'title', e.target.value)} 
              />
              <input 
                type="text" 
                className="instructor-desc small-header border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                placeholder="Enter Description" 
                onChange={(e) => handleInputChange('title_section', null, 'descp', e.target.value)} 
              />
              <br />
            </div>
            {/* Offerings */}
            <div className="offerings border-bottom">
              <div className="font-size-lg-bold mb-1">Our offerings</div>
              {formData.offerings.map((offering, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter Offering" 
                    value={offering.offering} 
                    onChange={(e) => handleInputChange('offerings', index, 'offering', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addOffering} className="btn">Add Offering</button>
            </div>
            {/* Feedback */}
            <div className="feedback border-bottom">
              <p className="font-size-lg-bold mb-1">Student feedback</p>
              {formData.feedback.map((item, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter Name" 
                    value={item.name} 
                    onChange={(e) => handleInputChange('feedback', index, 'name', e.target.value)} 
                  />
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter Feedback" 
                    value={item.feedback} 
                    onChange={(e) => handleInputChange('feedback', index, 'feedback', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addFeedback} className="btn">Add Feedback</button>
            </div>
            {/* About Us */}
            <div className="about border-bottom">
              <p className="font-size-lg-bold mb-1">About Us</p>
              {formData.about.map((item, index) => (
                <div key={index} className="mb-1-2">
                  <input 
                    type="text" 
                    className="content-box border-2 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter About" 
                    value={item.about} 
                    onChange={(e) => handleInputChange('about', index, 'about', e.target.value)} 
                  />
                </div>
              ))}
              <button onClick={addAbout} className="btn">Add About</button>
            </div>
          </div>
          {/* Footer Section */}
          <div className="sticky-footer">
            <input 
              type="color" 
              value={formData.login_colour} 
              onChange={(e) => handleInputChange('login_colour', null, null, e.target.value)} 
            />
            <button className="btn" onClick={generateCode}>Generate Code</button>
          </div>
        </div>
      </div>
      <div className="generated-code-container" style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
            <h3>Generated Code:</h3>
            <pre>{generatedCode}</pre>
        </div>
    </div>
  );
}

export default Medium;
