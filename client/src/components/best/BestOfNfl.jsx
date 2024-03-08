import RecommendationBox from "../RecommendationBox";
import BestOfNflList from "./BestOfNflList";

const BestOfNfl = () => {
  return (
    <div className="p-5 py-10 bg-black text-white">
      <div className="container">
        <p className="text-2xl font-bold mb-5">Best of NFL+</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {BestOfNflList.map((item, index) => {
            return <RecommendationBox key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestOfNfl;
