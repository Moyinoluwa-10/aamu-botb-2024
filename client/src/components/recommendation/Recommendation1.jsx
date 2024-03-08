import RecommendationBox from "../RecommendationBox";
import RecommendationList1 from "./RecommendationList1";

const Recommendation1 = () => {
  return (
    <div className="p-5 py-10 bg-black text-white">
      <div className="container">
        <p className="text-2xl font-bold mb-5">For you</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {RecommendationList1.map((item, index) => {
            return <RecommendationBox key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation1;
