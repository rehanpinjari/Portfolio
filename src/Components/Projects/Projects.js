import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Components/Projects/Projects.css";

import SOSDoc from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/SOSDoc.png";
import Buildo from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/Buildo.png";
import GiftBazar from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/GiftBazar.png";
import Taskio from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/Taskio.png";
import WellWords from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/WellWords.png";
import CountyZone from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/Project/CountyZone.png";

const Projects = () => {
  return (
    <>
      {/* Project-1 */}
      <div id="project" className="project">
        <div>
          <h1 className="project_title">SOS Docs</h1>
        </div>
        <div>
          <p className="project_info">
            SOS Doc - Streamline Documentation Effortlessly. Create project
            papers in a snap with SOS Doc's smart document generation. Focus on
            what matters most – let your projects shine with hassle-free
            paperwork.
          </p>
          <div className="btn-container">
            <a href="https://sos-docs.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img className="project_showcase" src={SOSDoc} alt="" width={900} />
        </div>
        <hr />
      </div>
      {/* Project-2 */}
      <div id="project" className="project">
        <div>
          <h1 className="project_title">Buildo</h1>
        </div>
        <div>
          <p className="project_info">
            Buildo: Your Path to Digital Excellence. Create breathtaking
            websites effortlessly. Unleash creativity, design flawlessly
            responsive pages. Elevate your brand, captivate your audience. Join
            the future of web design.
          </p>
          <div className="btn-container">
            <a href="https://buildoo.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img className="project_showcase" src={Buildo} alt="" width={900} />
        </div>
        <hr />
      </div>
      {/* Project-3 */}
      <div id="project" className="project">
        <div>
          <h1 className="project_title">GiftBazar</h1>
        </div>
        <div>
          <p className="project_info">
            GiftBazar: Your go-to gift store online. Find delightful surprises
            for every celebration. Explore a world of creative presents, making
            thoughtful gestures easier than ever.
          </p>
          <div className="btn-container">
            <a href="https://e-giftbazar.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img
            className="project_showcase"
            src={GiftBazar}
            alt=""
            width={900}
          />
        </div>
        <hr />
      </div>
      {/* Project-4 */}
      <div className="project">
        <div>
          <h1 className="project_title">Taskio</h1>
        </div>
        <div>
          <p className="project_info">
            Efficiently manage tasks with Taskio, a sleek task manager website.
            Stay organized, prioritize activities, and boost productivity
            effortlessly. Simplify your workflow and achieve more with Taskio's
            user-friendly interface.
          </p>
          <div className="btn-container">
            <a href="https://tskio.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img className="project_showcase" src={Taskio} alt="" width={900} />
        </div>
        <hr />
      </div>
      {/* Project-5 */}
      <div className="project">
        <div>
          <h1 className="project_title">Well Words</h1>
        </div>
        <div>
          <p className="project_info">
            Unveil wisdom effortlessly through WellWords - your go-to advice
            generator online. Elevate your decision-making with a tap.
            Experience clarity and empowerment with WellWords!
          </p>
          <div className="btn-container">
            <a href="https://well-words.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img
            className="project_showcase"
            src={WellWords}
            alt=""
            width={900}
          />
        </div>
        <hr />
      </div>
      {/* Project-6 (Pending Projects) */}
      <div className="project">
        <div>
          <h1 className="project_title">County Zone</h1>
        </div>
        <div>
          <p className="project_info">
            Countdown to 2024 with County Zone! Our innovative timer. Stay
            connected globally as we celebrate together across different time
            zones. Share the excitement and welcome 2024 with friends worldwide.
          </p>
          <div className="btn-container">
            <a href="https://county-zone.netlify.app/">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">View Project</span>
              </button>
            </a>
          </div>
        </div>
        <div className="project_img">
          <img
            className="project_showcase"
            src={CountyZone}
            alt=""
            width={900}
          />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Projects;
