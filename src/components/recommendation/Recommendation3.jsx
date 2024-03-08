import RecommendationBox from "../RecommendationBox";
import RecommendationList3 from "./RecommendationList3";

const Recommendation3 = () => {
  return (
    <div className="p-5 bg-black text-white">
      <div className="container">
        <p className="text-2xl font-bold mb-5">For you</p>
        <div className="grid grid-cols-4 gap-10">
          {RecommendationList3.map((item, index) => {
            return <RecommendationBox key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation3;
