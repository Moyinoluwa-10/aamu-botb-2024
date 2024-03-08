import PropTypes from "prop-types";

const RecommendationBox = ({ img, event, title, date }) => {
  return (
    <div>
      <img src={img} alt="" className="aspect-video rounded w-full" />
      <p className="text-[10px] text-[#c6cbd7] m-1">{event}</p>
      <h4 className="text-sm font-bold m-1">{title}</h4>
      <p className="text-[10px]">
        <span className="font-bold">Season 2024 </span> - {date}
      </p>
    </div>
  );
};

RecommendationBox.propTypes = {
  img: PropTypes.string,
  event: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default RecommendationBox;
