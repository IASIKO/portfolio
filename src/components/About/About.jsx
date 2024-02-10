import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/boy-svgrepo-com.svg"
            alt="boy-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Giorgi Iaseshvili</strong>. I am a Front-end Web Developer passionate about creating dynamic and interactive user interfaces. I have hands-on experience in React, which I have utilized to develop web applications that are user-friendly and responsive. I am dedicated to staying up-to-date with the latest advancements in web development and constantly seeking new challenges to expand my skill set. I have strong attention to detail, ensuring that my projects are executed with the highest quality. My ultimate goal is to become a leader in the Full-Stack development industry and positively impact the user experience.
            </ScrollAnimation>

            <br /><br />

            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
