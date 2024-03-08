import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
// import bgImg from "../assets/images/bg.png";
import BestOfNfl from "../components/best/BestOfNfl";
import Micd from "../components/micd/Micd";
import Recommendation1 from "../components/recommendation/Recommendation1";
import Recommendation3 from "../components/recommendation/Recommendation3";
import Recommendation2 from "../components/recommendation/Recommendation2";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    console.log(data);
    setUser(data);
  }, []);
  return (
    <>
      <Header />
      {user === "chiefs" ? (
        <Recommendation1 />
      ) : user === "49ers" ? (
        <Recommendation2 />
      ) : user === "packers" ? (
        <Recommendation3 />
      ) : null}

      <BestOfNfl />
      <Micd />
      <Footer />
      <Chatbot />
    </>
  );
};

export default Home;
