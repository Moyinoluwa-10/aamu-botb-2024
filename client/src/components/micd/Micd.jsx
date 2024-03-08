import RecommendationBox from "../RecommendationBox";
import MicdList from "./MicdList";

const Micd = () => {
  return (
    <div className="p-5 bg-black text-white">
      <div className="container">
        <p className="text-2xl font-bold mb-5">Mic'd Up</p>
        <p className="text-2xl font-bold mb-5"></p>
        <div className="grid grid-cols-4 gap-10">
          {MicdList.map((item, index) => {
            return <RecommendationBox key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Micd;
