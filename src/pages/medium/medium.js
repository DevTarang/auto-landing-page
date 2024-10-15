import React, { useEffect, useState } from "react";
import "./medium.css"; 

function Medium () {

  const [formData, setFormData] = useState({
    header: { title1: '', title2: '', logo: '' },
    title_section: { descp: '', img : '' },
    offerings: [{ offering: '', icon: ''}],
    feedbacks: [{ name: '', feedback: '' , pic: ''}],
    achievements: [{ achievement: '' }],
    login_colour: { color: "#009ae0"},
  });

  const addOffering = () => {
    setFormData(prevData => ({
      ...prevData, 
      offerings: [...prevData.offerings, {offering: '', icon: ''}]
    }));
  };

  const addAchievement = () => {
    setFormData(prevData => ({
      ...prevData,
      achievements: [...prevData.achievements, {achievement: ""}]
    }))
  }

  const addFeedbacks = () => {
    setFormData(prevData => ({
      ...prevData,
      feedbacks: [...prevData.feedbacks, {name: '', feedback: '', pic: ''}]
    }))
  }

  const handleInputChange = (section, index, field, value) => {
    const updatedData = { ...formData };
    if (index !== null) {
      if (!updatedData[section][index]) updatedData[section][index] = {};
      updatedData[section][index][field] = value;
    } else {
      updatedData[section][field] = value;
    }
    setFormData(updatedData);
  };

  const generateCode = () => {
    const offeringsHTML = formData.offerings
      .map(item => `<div class="content-box">${item.offering}</div>`)
      .join("");
  
    const feedbackHTML = formData.feedbacks
      .map(item => `
        <div class="testimonal-content">
          <p style="margin-top: 0px; height:150px; font-size: 8px">${item.feedback}</p>
          <div class="testimonal-content-user" valign="bottom">
            <img style="margin-right: 10px; width:45px;" src="${item.pic}" alt="">
            <p>${item.name}</p>
          </div>
        </div>
      `)
      .join("");
  
    const achievementsHTML = formData.achievements
      .map(item => `<div class="achievement">${item.achievement}</div>`)
      .join("");
  
    const generatedHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Page</title>
        <style>
          html,
          body {
              position: relative;
              margin: 0;
              padding: 0;
              overflow: auto;
              margin-bottom: 30%;
          }

          footer {
              position: relative;
              bottom: 0;
              height: 100px;
          }

          header {
              position: relative;
              width: 100%;
              
          }
          #header-scroll{
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              box-shadow: 0px 4px 20px rgb(153 153 153 / 20%);
          }

          header.clone {
              position: fixed;
              display: none;
              top: -65px;
              left: 0;
              right: 0;
              z-index: 999;
              transition: 0.2s top cubic-bezier(0.3, 0.73, 0.3, 0.74);
          }

          body.down header.clone {
              top: 0;
          }

          .testDiv {
              height: 295px;
              width: 300px;
              background-color: #fff7e4;
              gap: 10px;
              margin-right: 5%;
              flex: 0 0 auto;
              border-radius: 10px;
          }

          .testimonal-content {
              font-size: 0.8rem;
              line-height: 20px;
              margin: 5%;
              margin-top: 0px;
          }

          .testimonal-content-user {
              display: flex;
              align-self: flex-end;
          }

          .offer_class {
              background-color: #000000;
              min-height: 10px;
              overflow: hidden;
              margin: 8% 3% 0%;
              color: white;
              padding: 3%;
              border-radius: 8px;
              line-height: 25px;
              font-size: 14px;
          }

          .acheivement_class {
              background-color: #f7f7f7;
              min-height: 10px;
              overflow: hidden;
              margin: 8% 3% 0%;
              padding: 3%;
              border-radius: 8px;
              line-height: 25px;
              font-size: 14px;
          }

          .loginButton {
              background-color: #000000;
              width: 93%;
              margin: auto;
              color: white;
              font-size: large;
              height: 50px;
              display: block;
              border-radius: 5px;
              border: none;
          }

          #header-scroll {
              /* position: fixed; */
              width: 100%;
              background-color: white;
              display: flex;
              padding: 5%;
              padding-top: 5%;
              top: 0;
          }

          p {
              font-size: 12px;
          }
        </style>
      </head>
      <body>
        <header>
          <img src="${formData.header.logo}" alt="Logo" />
          <h1>${formData.header.title1} <span style="color: #efb80c">${formData.header.title2}</span></h1>
        </header>
        <section>
          <img src="${formData.title_section.img}" alt="Title Image" />
          <p>${formData.title_section.descp}</p>
        </section>
        <section>
          <h2>Offerings</h2>
          ${offeringsHTML}
        </section>
        <section>
          <h2>Feedbacks</h2>
          ${feedbackHTML}
        </section>
        <section>
          <h2>Achievements</h2>
          ${achievementsHTML}
        </section>
      </body>
      </html>
    `;
  
    console.log(generatedHTML);
  };

  const handleLogin = () => {
    if (window?.webkit?.messageHandlers?.onDeeplinkExecuted) {
      window.webkit.messageHandlers.onDeeplinkExecuted.postMessage(
        `NAVIGATE_TO_LOGIN`
      );
    }
  };

  return (
    <div className="mt-[30px] h-full mx-[140px] border-2 shadow-xl shadow-gray-300 rounded-lg m-auto border-gray-200 bg-blue-100">
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className="w-[575px] h-full rounded-xl m-auto my-[20px] border-2 border-gray-300 shadow-xl shadow-gray-300 bg-white">
        <div className="flex flex-col gap-[10px] p-[20px] shadow-md shadow-gray-300">
          <input 
            type="text" 
            className="font-size-lg-bold header-name border-2 w-2/3 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
            placeholder="Image Url" 
            onChange={(e) => handleInputChange('header', null, 'logo', e.target.value)} 
          />
          <input 
            type="text" 
            className="font-size-lg-bold header-name border-2 w-2/3 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
            placeholder="Black text" 
            onChange={(e) => handleInputChange('header', null, 'title1', e.target.value)} 
          />
          <input 
            type="text" 
            className="font-size-lg-bold header-name border-2 w-2/3 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
            placeholder="Yellow Text" 
            onChange={(e) => handleInputChange('header', null, 'title2', e.target.value)} 
          />
        </div>
        <div id="header-full" className="p-[20px] pb-0">
          <input 
            type="text" 
            className="font-size-lg-bold header-name border-2 w-2/3 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
            placeholder="Image Url" 
            onChange={(e) => handleInputChange('title_section', null, 'img', e.target.value)} 
          />
        </div>
        <div style={{ marginBottom: "5%" }} className="p-[20px] pt-0">
          <div className="">
            <h3 style={{ marginLeft: "3%", fontWeight: 800 }}>
              {formData.header.title1}<span style={{ color: "#efb80c" }}> {formData.header.title2}</span>
            </h3>
            <input 
              type="text" 
              className="font-size-lg-bold header-name border-2 w-2/3 shadow-sm p-[5px] rounded-lg shadow-gray-300" 
              placeholder="Description" 
              onChange={(e) => handleInputChange('title_section', null, 'descp', e.target.value)} 
            />
          </div>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }} className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 16.5V15.5C14.5 14.9696 14.2893 14.4609 13.9142 14.0858C13.5391 13.7107 13.0304 13.5 12.5 13.5H8.5C7.96957 13.5 7.46086 13.7107 7.08579 14.0858C6.71071 14.4609 6.5 14.9696 6.5 15.5V16.5" stroke="#F0BA1A" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 11.5C11.6046 11.5 12.5 10.6046 12.5 9.5C12.5 8.39543 11.6046 7.5 10.5 7.5C9.39543 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 9.39543 11.5 10.5 11.5Z" stroke="#F0BA1A" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 16.5V15.5C17.4997 15.0569 17.3522 14.6264 17.0807 14.2762C16.8092 13.9259 16.4291 13.6758 16 13.565" stroke="#F0BA1A" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 7.565C14.4302 7.67515 14.8115 7.92535 15.0838 8.27616C15.3561 8.62696 15.5039 9.05842 15.5039 9.5025C15.5039 9.94659 15.3561 10.378 15.0838 10.7288C14.8115 11.0797 14.4302 11.3299 14 11.44" stroke="#F0BA1A" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="black"/>
            </svg>
            <h3 style={{ marginLeft: "8px" }} className="pb-[10px] text-[23px] font-extrabold">What my students says</h3>
          </div>
          <div className="flex overflow-x-scroll p-[10px] items-center">
            {formData.feedbacks.map((item, index) => (
              <div className="carasoul flex flex-col gap-[20px] rounded-xl flex-shrink-0 bg-[#fff7e4] mr-[20px] p-[10px] w-2/5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.31791 8.75175C6.6532 6.07059 9.86984 4.50575 13.2634 4.39999C13.7015 4.39999 14.1217 4.58937 14.4314 4.92646C14.7413 5.26354 14.9153 5.72073 14.9153 6.19744C14.9153 6.67415 14.7413 7.13134 14.4314 7.46843C14.1217 7.80551 13.7015 7.99489 13.2634 7.99489C11.6732 8.01975 10.1172 8.50111 8.75296 9.39047C7.38867 10.2798 6.26447 11.5454 5.49413 13.0594C5.46152 13.1205 5.44619 13.1907 5.45007 13.2613C5.45395 13.3318 5.47684 13.3996 5.51591 13.456C5.55496 13.5125 5.60846 13.5552 5.66969 13.5787C5.73093 13.6023 5.79719 13.6058 5.86019 13.5886C6.34198 13.4563 6.83682 13.3887 7.3337 13.3872C8.62552 13.387 9.8884 13.8035 10.9626 14.5842C12.0368 15.365 12.8742 16.4749 13.3686 17.7734C13.8631 19.072 13.9926 20.501 13.7406 21.8797C13.4886 23.2583 12.8666 24.5246 11.9531 25.5186C11.0397 26.5125 9.87584 27.1894 8.6088 27.4635C7.34182 27.7377 6.02855 27.5968 4.83511 27.0588C3.64167 26.5207 2.62168 25.6097 1.90415 24.4408C1.18661 23.2719 0.803763 21.8978 0.804027 20.4922V18.7048C0.719064 15.0119 1.98261 11.433 4.31791 8.75175Z" fill="#F0BA1A"/>
                  <path d="M30.7161 7.46843C30.4064 7.80551 29.9862 7.99489 29.5481 7.99489C27.9579 8.01975 26.4019 8.50111 25.0376 9.39047C23.6734 10.2798 22.5492 11.5454 21.7788 13.0594C21.7466 13.1207 21.7316 13.191 21.7356 13.2614C21.7395 13.332 21.7624 13.3997 21.8013 13.4562C21.8402 13.5127 21.8936 13.5554 21.9547 13.5789C22.0158 13.6024 22.082 13.6058 22.1449 13.5886C22.6271 13.4562 23.1224 13.3886 23.6197 13.3872C24.9114 13.3872 26.1742 13.8041 27.2482 14.585C28.3223 15.3659 29.1594 16.4758 29.6537 17.7745C30.148 19.073 30.2772 20.502 30.0251 21.8806C29.773 23.259 29.1509 24.5253 28.2373 25.5191C27.3238 26.5129 26.16 27.1896 24.893 27.4636C23.6261 27.7377 22.3129 27.5967 21.1195 27.0586C19.9262 26.5206 18.9062 25.6095 18.1887 24.4406C17.4713 23.2718 17.0885 21.8978 17.0887 20.4922V18.7048C17.0041 15.0121 18.2678 11.4333 20.6029 8.75215C22.9382 6.07109 26.1547 4.50612 29.5481 4.39999C29.9862 4.39999 30.4064 4.58937 30.7161 4.92646C31.026 5.26354 31.2 5.72073 31.2 6.19744C31.2 6.67415 31.026 7.13134 30.7161 7.46843Z" fill="#F0BA1A"/>
                  <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M6.55435 6.70938C5.74622 7.29073 4.99501 7.97428 4.31791 8.75169C1.98261 11.4329 0.719064 15.0118 0.804027 18.7046V20.4921C0.803995 20.6797 0.810778 20.8667 0.824282 21.0528L5.85667 16.1098C6.66189 15.3189 7.2404 14.3866 7.59181 13.3926C7.50593 13.389 7.41988 13.3871 7.3337 13.3871C6.83682 13.3886 6.34198 13.4562 5.86019 13.5884C5.79719 13.6056 5.73093 13.6022 5.66969 13.5786C5.60846 13.555 5.55496 13.5124 5.51591 13.4559C5.47684 13.3994 5.45395 13.3317 5.45007 13.2611C5.44619 13.1906 5.46152 13.1204 5.49413 13.0593C6.10288 11.8629 6.9326 10.8216 7.92715 9.99849C7.75994 8.83121 7.30253 7.6966 6.55435 6.70938ZM24.2772 27.5638C24.4832 27.5411 24.6887 27.5077 24.893 27.4635C26.16 27.1894 27.3238 26.5127 28.2374 25.519C29.1509 24.5252 29.773 23.259 30.0251 21.8804C30.2772 20.5018 30.148 19.073 29.6537 17.7743C29.1594 16.4757 28.3223 15.3658 27.2482 14.5849C27.1228 14.4936 26.9948 14.4074 26.8644 14.3262L24.024 17.1162C21.1871 19.9026 21.1642 24.4435 23.9727 27.2586L24.2772 27.5638Z" fill="#E07309"/>
                </svg>
                <div class="testimonal-content">
                  <input 
                    type="text" 
                    className="content-box border-2 text-sm shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
                    placeholder="Enter feedback" 
                    value={item.feedback} 
                    onChange={(e) => handleInputChange('feedbacks', index, 'feedback', e.target.value)} 
                  />
                  <div class="testimonal-content-user flex-col" valign="bottom">
                    <input 
                      type="text" 
                      className="content-box border-2 text-sm shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
                      placeholder="Enter person's image" 
                      value={item.pic} 
                      onChange={(e) => handleInputChange('feedbacks', index, 'pic', e.target.value)} 
                    />
                    <input 
                      type="text" 
                      className="content-box border-2 shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
                      placeholder="Enter person's name" 
                      value={item.name} 
                      onChange={(e) => handleInputChange('feedbacks', index, 'name', e.target.value)} 
                    />
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addFeedbacks} className="p-[4px] hover:bg-blue-200 border-2 h-fit  shadow-md shadow-gray-300 hover:text-white flex-shrink-0 w-[30px] font-extrabold rounded-full text-[12px]">+</button>
          </div>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }} className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_11_238)">
              <path d="M12 15.4999L15.5 11.9999L17 13.4999L13.5 16.9999L12 15.4999Z" stroke="#F0BA1A" stroke-width="0.833344" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 12.4999L14.25 8.74994L7 6.99994L8.75 14.2499L12.5 14.9999L15 12.4999Z" stroke="#F0BA1A" stroke-width="0.833344" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 6.99994L10.793 10.7929" stroke="#F0BA1A" stroke-width="0.833344" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.5 12.4999C12.0523 12.4999 12.5 12.0522 12.5 11.4999C12.5 10.9477 12.0523 10.4999 11.5 10.4999C10.9477 10.4999 10.5 10.9477 10.5 11.4999C10.5 12.0522 10.9477 12.4999 11.5 12.4999Z" stroke="#F0BA1A" stroke-width="0.833344" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="black"/>
              <defs>
              <clipPath id="clip0_11_238">
              <rect width="12" height="12" fill="white" transform="translate(6 5.99994)"/>
              </clipPath>
              </defs>
            </svg>
            <h3 className="ml-[8px] font-extrabold text-[23px] pb-[10px]">Our offerings</h3>
          </div>
          <div style={{ display: "flex", marginLeft: "3%" }} className="text-gray-400">
          {formData.title_section.descp}
          </div>
          {formData.offerings.map((item,index) => (
            <div className="flex flex-col bg-black my-[5px] rounded-xl p-[15px]">
              <input 
                type="text" 
                className="my-[3px] bg-yellow-50 border-2 text-sm shadow-sm w-1/3 p-[5px] rounded-lg shadow-gray-300" 
                placeholder="Enter icon" 
                value={item.icon} 
                onChange={(e) => handleInputChange('offerings', index, 'icon', e.target.value)} 
              />
              <input 
                type="text" 
                className="my-[3px] bg-yellow-50 border-2 text-sm shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
                placeholder="Enter offering" 
                value={item.offering} 
                onChange={(e) => handleInputChange('offerings', index, 'offering', e.target.value)} 
              />
            </div>
          ))}
          <button onClick={addOffering} className="p-[4px] mx-auto mt-[5px] hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white flex-shrink-0 w-[30px] font-extrabold rounded-full text-[12px]">+</button>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }} className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7L13.545 10.13L17 10.635L14.5 13.07L15.09 16.51L12 14.885L8.91 16.51L9.5 13.07L7 10.635L10.455 10.13L12 7Z" stroke="#F0BA1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="black"/>
            </svg>
            <h3 className="font-extrabold ml-[8px] pb-[10px]">Our achievements</h3>
          </div>
          {formData.achievements.map((item, index) => (
            <input 
            type="text" 
            className="content-box border-2 text-sm shadow-sm w-full p-[5px] rounded-lg shadow-gray-300" 
            placeholder="Enter achievement" 
            value={item.achievement} 
            onChange={(e) => handleInputChange('achievements', index, 'achievement', e.target.value)} 
          />
          ))}
          <button onClick={addAchievement} className="p-[4px] mx-auto mt-[5px] hover:bg-blue-200 border-2 shadow-md shadow-gray-300 hover:text-white flex-shrink-0 w-[30px] font-extrabold rounded-full text-[12px]">+</button>
        </div>
        <footer style={{ borderTop: "1px solid #e5e5e5", backgroundColor: "#ffffff", bottom: 0, left: 0, right: 0 }}>
          <div style={{ position: "absolute", top: "50%", transform: "translate(0, -50%)", width: "100%" }}>
            <button className="loginButton" onClick={handleLogin}>Login</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Medium;
