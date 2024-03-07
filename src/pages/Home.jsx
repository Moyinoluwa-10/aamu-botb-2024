import React from "react";
import Chatbot from "../components/Chatbot";
import bgImg from "../assets/images/bg.png";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-blue-100 bg-cover bg-norepeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        Home
      </div>
      <Chatbot />
    </>
  );
};

export default Home;
