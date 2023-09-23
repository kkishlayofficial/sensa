import NextArrow from "../../../images/RightBtn.svg";
import PrevArrow from "../../../images/PrevBtn.svg";
import "./index.scss";
export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className='nextImg'>
        <img src={NextArrow} alt='Next Item' />
      </div>
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className='prevImg'>
        <img src={PrevArrow} alt='Previous Item' />
      </div>
    </div>
  );
};
