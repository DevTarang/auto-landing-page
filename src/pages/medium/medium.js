import React, { useEffect } from "react";
import "./medium.css"; 

const testimonialData = [
  {
    content:
      "I am a student, I used and loved 145 strategy because it's really profitable...",
    name: "Soumik Sen",
    picture: "./resources/testimonial/Picture.png",
  },
  {
    content:
      "It is the most useful app with lots of strategies inside it...",
    name: "Dhaval Bhoot",
    picture: "./resources/testimonial/Picture (1).png",
  },
];

const offerings = [
  {
    content:
      "Our training involves no complex charts and numbers...",
    icon: "./resources/rupee.svg",
  },
];

const achievements = [
  "In 2019, he formed Baap of Chart with the goal of making trading simple...",
];

const Medium = () => {
  useEffect(() => {
    const carasoul = document.querySelector(".carasoul");
    testimonialData.forEach((ele) => {
      const testDiv = document.createElement("div");
      testDiv.classList.add("testDiv");
      testDiv.innerHTML = `
        <img style="margin: 5%;" src="./resources/testimonial/Icon.svg" alt="" />
        <div class="testimonal-content">
          <p style="margin-top: 0px; height:150px;">${ele.content}</p>
          <div class="testimonal-content-user">
            <img style="margin-right: 10px; width:45px;" src="${ele.picture}" alt="" />
            <p>${ele.name}</p>
          </div>
        </div>
      `;
      carasoul.appendChild(testDiv);
    });

    const offeringsDiv = document.querySelector(".offerings");
    offerings.forEach((ele) => {
      const offerDiv = document.createElement("div");
      offerDiv.classList.add("offer_class");
      offerDiv.innerHTML = `
        <img style="padding-bottom: 2%;" src="${ele.icon}" alt="" />
        <p>${ele.content}</p>
      `;
      offeringsDiv.appendChild(offerDiv);
    });

    const achievementsDiv = document.querySelector(".achievements");
    achievements.forEach((ele) => {
      const achievementDiv = document.createElement("div");
      achievementDiv.classList.add("achievement_class");
      achievementDiv.innerHTML = `<p>${ele}</p>`;
      achievementsDiv.appendChild(achievementDiv);
    });
  }, []);

  const handleLogin = () => {
    if (window?.webkit?.messageHandlers?.onDeeplinkExecuted) {
      window.webkit.messageHandlers.onDeeplinkExecuted.postMessage(
        `NAVIGATE_TO_LOGIN`
      );
    }
  };

  return (
    <div className="mt-[30px]  mx-[40px] border-2 shadow-xl shadow-gray-300 rounded-lg m-auto border-gray-200">
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div id="header-scroll" style={{ display: "flex" }}>
          <img style={{ width: "35px" }} src="./resources/baapofchartsicon.png" alt="header" />
          <h3 style={{ marginLeft: "8px" }}>Baap of <span style={{ color: "#efb80c" }}>Charts</span></h3>
        </div>
        <div id="header-full">
          <img style={{ width: "100%" }} src="./resources/Rectangle 70.png" alt="Header" />
          <img style={{ marginTop: "-18%", width: "157px" }} src="./resources/Group 3.png" />
        </div>
        <div style={{ marginBottom: "5%" }}>
          <div>
            <h3 style={{ marginLeft: "3%", fontWeight: 800 }}>
              Baap of <span style={{ color: "#efb80c" }}>Charts</span>
            </h3>
            <p style={{ color: "#7a8b94", width: "93%", margin: "auto" }}>
              Baap of Chart has a mission to eradicate poverty and financial shortfalls...
            </p>
          </div>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }}>
            <img height="24px" width="24px" src="./resources/Frame 13.svg" alt="" />
            <h3 style={{ marginLeft: "8px" }}>What my students say</h3>
          </div>
          <div className="carasoul" style={{ display: "flex", padding: "3%", overflowX: "auto" }}></div>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }}>
            <img height="24px" width="24px" src="./resources/Pen.svg" alt="pen" />
            <h3 style={{ marginLeft: "8px" }}>Our offerings</h3>
          </div>
          <p style={{ width: "93%", margin: "auto", color: "#7a8b94" }}>
            We offer premium online Stock market training courses...
          </p>
          <div className="offerings"></div>
          <hr style={{ width: "93%", borderTop: "1px dashed black" }} />
          <div style={{ display: "flex", marginLeft: "3%" }}>
            <img height="24px" width="24px" src="./resources/Star.svg" alt="" />
            <h3 style={{ marginLeft: "8px" }}>Our achievements</h3>
          </div>
          <div className="achievements"></div>
        </div>
        <footer style={{ borderTop: "1px solid #e5e5e5", backgroundColor: "#ffffff", position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <div style={{ position: "absolute", top: "50%", transform: "translate(0, -50%)", width: "100%" }}>
            <button className="loginButton" onClick={handleLogin}>Login</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Medium;
