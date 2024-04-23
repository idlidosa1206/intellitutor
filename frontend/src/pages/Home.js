import React from "react";
import "./Home.css";
import Card from "./Card.js";

// Import the images
import Direction from "../img/directions.gif"
import Graduate from "../img/graduate.gif"
import Translator from "../img/translator.gif"
import Stats from "../img/strategic-consulting.gif";
import Books from "../img/books.gif"


const Home = () => {
  return (
    <>
      <div className="start">
        <div className="container">
          <div className="img-wrapper">
            {/* Use the imported image */}
            <img src={Graduate} alt="h" className="back-img" />
          </div>
          <div className="back-text">
            <a href="https://git.io/typing-svg">
              <img
                id="svg"
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&pause=1000&color=36BCF7FF&center=true&vCenter=true&random=false&width=435&lines=IntelliTutor%3A+Let's+Learn+More!!"
                alt="Typing SVG"
              />
            </a>
            <h3>
              Venture on a journey of learning and exploring!!{" "}
            </h3>
            <a href="/register">
              <button id="signup-btn">Create/ Visit your profile</button>
            </a>
          </div>
        </div>

        <div className="flex-container1">
          <Card
            image={Direction}
            text1="Choose Your Learning"
            text2="Choose and explore the various leaning paths curated for you!"
            type="donate" // Specify the type for the donate card
          />
          <Card
            image={Translator}
            text1="Interact with Intelli"
            text2="Intelli - Your Virtual Tutor is here to help you Learn and Grow!!"
            type="chat" // Specify the type for the chat card
          />
        </div>
        <div className="flex-container1">
          <Card
            image={Stats}
            text1="Track Your Progress"
            text2="Keep track on your stats and progress on the learning paths!"
            type="health" // Specify the type for the health card
          />

          <Card
            image={Books}
            text1="Find Resources"
            text2="Seek multiple resources recommended by our tutor Intelli!"
            type="position" // Specify the type for the job card
          />
        </div>
      </div>
    </>
  );
};

export default Home;
