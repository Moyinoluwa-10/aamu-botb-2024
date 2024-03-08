import bgImg from "../assets/images/footer.png";
import bgImg2 from "../assets/images/footer-1.png";
import bgImg3 from "../assets/images/footer-2.png";

const Footer = () => {
  return (
    <div className="w-full">
      <img src={bgImg} alt="" className="w-full hidden lg:block" />
      <img src={bgImg2} alt="" className="w-full lg:hidden" />
      <img src={bgImg3} alt="" className="w-full lg:hidden" />
    </div>
  );
};

export default Footer;
