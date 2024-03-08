import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
// import bgImg from "../assets/images/bg.png";
import BestOfNfl from "../components/best/BestOfNfl";
import Micd from "../components/micd/Micd";
import Recommendation1 from "../components/recommendation/Recommendation1";
import Recommendation3 from "../components/recommendation/Recommendation3";
import Recommendation2 from "../components/recommendation/Recommendation2";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Recommendation1 />
      <Recommendation2 />
      <Recommendation3 />
      <BestOfNfl />
      <Micd />
      <Footer />
      <Chatbot />
    </>
  );
};

export default Home;
