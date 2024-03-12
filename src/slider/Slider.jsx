import clsx from "clsx";
import SliderImg from "../assets/slider/1.jpg";
import leftArrow from "../assets/slider/arrowLeft.svg";
import rightArrow from "../assets/slider/arrowRight.svg";
import * as classes from "./Slider.module.css";

export function Slider() {
  return (
    <div className={classes.slider}>
      <div className={classes.wrap}>
        <img src={leftArrow} alt='leftArrow' />
      </div>
      <img src={SliderImg} alt='Woman-search-the-book' />
      <div className={classes.wrap}>
        <img src={rightArrow} alt='rightArrow' />
      </div>
      <div className={classes.pagination}>
        <div className={classes.paginationContiner}>
          <div className={clsx(classes.pagCircle, classes.active)}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div className={classes.pagCircle}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div className={classes.pagCircle}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div className={classes.pagCircle}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div className={classes.pagCircle}></div>
        </div>
        {/* <div className={classes.pagCircle}></div>
        <div className={classes.pagCircle}></div>
        <div className={classes.pagCircle}></div> */}
      </div>
    </div>
  );
}
