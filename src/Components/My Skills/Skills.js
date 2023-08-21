import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Components/My Skills/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="skl">I Specialize In...</h3>
      <p className="skl sklLine">_________</p>
      <div className="htmlProg ProgWidth">
        <div className="p">
          <p>ReactJS</p>
          <p>100%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar htmlBar" />
          </div>
        </div>
      </div>
      <div className="cssProg ProgWidth">
        <div className="p">
          <p>Node.js</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar cssBar" />
          </div>
        </div>
      </div>
      <div className="jsProg ProgWidth">
        <div className="p">
          <p>CSS</p>
          <p>80%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar jsBar" />
          </div>
        </div>
      </div>
      <div className="uiProg ProgWidth">
        <div className="p">
          <p>JavaScript</p>
          <p>95%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar uiBar" />
          </div>
        </div>
      </div>
      <div className="writingProg ProgWidth">
        <div className="p">
          <p>Content Writing</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar writingBar" />
          </div>
        </div>
      </div>
      <div className="reactProg ProgWidth">
        <div className="p">
          <p>UI/UX Design</p>
          <p>100%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar reactBar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
