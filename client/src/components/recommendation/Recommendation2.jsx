import RecommendationBox from "../RecommendationBox";
import RecommendationList2 from "./RecommendationList2";

const Recommendation2 = () => {
  return (
    <div className="p-5 py-10 bg-black text-white">
      <div className="container">
        <p className="text-2xl font-bold mb-5">For you</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {RecommendationList2.map((item, index) => {
            return <RecommendationBox key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation2;
