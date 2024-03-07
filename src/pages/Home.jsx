import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
// import bgImg from "../assets/images/bg.png";
import Recommendation from "../components/Recommendation";

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat">Home</div>
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Footer />
      <Chatbot />
    </>
  );
};

export default Home;
