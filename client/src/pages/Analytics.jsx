import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SpiderwebChart from "../components/chart/SpiderwebChart";
import logo from "../assets/images/chat-logo.jpeg";
import footballer1 from "../assets/images/footballer1.jpeg";
import footballer2 from "../assets/images/footballer2.jpeg";
import footballer3 from "../assets/images/footballer3.jpeg";
import footballer4 from "../assets/images/footballer4.jpeg";
import footballer5 from "../assets/images/footballer5.jpeg";
import footballer6 from "../assets/images/footballer6.jpeg";
import footballer7 from "../assets/images/footballer7.jpeg";
import footballer8 from "../assets/images/footballer8.jpeg";
import footballer9 from "../assets/images/footballer9.jpeg";
import footballer10 from "../assets/images/footballer10.jpeg";
import footballer11 from "../assets/images/footballer11.jpeg";
import footballer12 from "../assets/images/footballer12.jpeg";

const Analytics = () => {
  const players = [
    [
      {
        name: "Tom Brady",
        img: footballer1,
        passingYards: 5000,
        rushingYards: 1500,
        touchdowns: 4000,
        interceptions: 1000,
      },
    ],
    [
      {
        name: "Aaron Rodgers",
        img: footballer2,
        passingYards: 400,
        rushingYards: 300,
        touchdowns: 305,
        interceptions: 100,
      },
    ],
    [
      {
        name: "Randy Moss",
        passingYards: 5000,
        rushingYards: 1000,
        touchdowns: 4000,
        interceptions: 2000,
        img: footballer3,
      },
    ],
    [
      {
        name: "Trent Williams",
        passingYards: 1000,
        rushingYards: 1000,
        touchdowns: 1000,
        interceptions: 1000,
        img: footballer4,
      },
    ],
    [
      {
        name: "Kurt Mill",
        passingYards: 2500,
        rushingYards: 1300,
        touchdowns: 4330,
        interceptions: 3630,
        img: footballer5,
      },
    ],
    [
      {
        name: "Tyreek Hill",
        passingYards: 2000,
        rushingYards: 2760,
        touchdowns: 3638,
        interceptions: 1323,
        img: footballer6,
      },
    ],
    [
      {
        name: "Myles Garrett",
        passingYards: 3700,
        rushingYards: 1003,
        touchdowns: 4330,
        interceptions: 3343,
        img: footballer7,
      },
    ],
    [
      {
        name: "Tristan Wirfs",
        passingYards: 3420,
        rushingYards: 1030,
        touchdowns: 4022,
        interceptions: 1210,
        img: footballer8,
      },
    ],
    [
      {
        name: "John Snow",
        passingYards: 500,
        rushingYards: 3230,
        touchdowns: 2232,
        interceptions: 1000,
        img: footballer9,
      },
    ],
    [
      {
        name: "Patrick Queen",
        passingYards: 5000,
        rushingYards: 4430,
        touchdowns: 2220,
        interceptions: 2440,
        img: footballer10,
      },
    ],
    [
      {
        name: "Xavier Hawkins",
        passingYards: 1312,
        rushingYards: 4221,
        touchdowns: 522,
        interceptions: 1897,
        img: footballer11,
      },
    ],
    [
      {
        name: "Tim Turner",
        passingYards: 2000,
        rushingYards: 1300,
        touchdowns: 60,
        interceptions: 900,
        img: footballer12,
      },
    ],

    // Add more players as needed
  ];

  return (
    <>
      <Header />
      <div className="pb-20 bg-black">
        <Hero />
      </div>
      <div className="bg-black">
        <h1 className="pt-10 text-center text-3xl font-bold text-white bg flex items-center justify-center gap-5">
          <span className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
            <img src={logo} alt="" className="w-full" />
          </span>{" "}
          TouchDownAI
        </h1>
        <p className="text-center text-white mt-5 text-lg">
          Here are the statistics for the top players in 2023
        </p>
        <div className="container p-5 py-20 grid grid-cols-4 gap-10">
          {players.map((player, index) => {
            return <SpiderwebChart players={player} key={index} />;
          })}
        </div>
      </div>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Analytics;
