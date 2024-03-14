import clsx from "clsx";
import { useRef, useState } from "react";
import leftArrow from "../assets/slider/arrowLeft.svg";
import rightArrow from "../assets/slider/arrowRight.svg";
import SliderImg1 from "../assets/slider/sliderImg1.jpg";
import SliderImg2 from "../assets/slider/sliderImg2.jpg";
import SliderImg3 from "../assets/slider/sliderImg3.jpg";
import SliderImg4 from "../assets/slider/sliderImg4.jpg";
import SliderImg5 from "../assets/slider/sliderImg5.jpg";
import * as classes from "./Slider.module.css";

export function Slider() {
  const [indexMainImg, setIndexMainImg] = useState(0);
  const myRef = useRef(null);
  const sliderImgs = [
    { src: SliderImg1, alt: "Woman-search-the-book" },
    { src: SliderImg2, alt: "Busts-of-writers" },
    { src: SliderImg3, alt: "Many-books-on-the-shelves" },
    { src: SliderImg4, alt: "Stairs-and-many-books-on-the-shelves" },
    { src: SliderImg5, alt: "Beautiful-library-facade" },
  ];

  const removeActiveClass = (value) =>
    document.getElementById(value).classList.remove("active");
  const addActiveClass = (value) =>
    document.getElementById(value).classList.add("active");

  function handleArrowClick(event) {
    const direction = event.target.getAttribute("data-direction");
    removeActiveClass(indexMainImg);

    if (direction === "left" && indexMainImg > 0) {
      setIndexMainImg((prev) => prev - 1);
      addActiveClass(indexMainImg - 1);
    } else if (direction === "left") {
      setIndexMainImg(sliderImgs.length - 1);
      addActiveClass(sliderImgs.length - 1);
    } else if (direction === "right" && indexMainImg < sliderImgs.length - 1) {
      setIndexMainImg((prev) => prev + 1);
      addActiveClass(indexMainImg + 1);
    } else {
      setIndexMainImg(0);
      addActiveClass(0);
    }
  }

  function handlePaginationClick(event) {
    removeActiveClass(indexMainImg);
    const elem = event.target?.firstElementChild || event.target;
    const paginationId = elem.getAttribute("id");
    setIndexMainImg(Number(paginationId));
    elem.classList.add("active");
  }

  return (
    <div className={classes.slider}>
      <div className={classes.sliderContainer}>
        <div
          className={classes.wrap}
          onClick={(event) => {
            handleArrowClick(event);
          }}>
          <img
            src={leftArrow}
            alt='leftArrow'
            data-direction='left'
            className={classes.arrow}
          />
        </div>
        <img
          src={sliderImgs[indexMainImg].src}
          alt={sliderImgs[indexMainImg].alt}
        />
        <div
          className={classes.wrap}
          onClick={(event) => {
            handleArrowClick(event);
          }}>
          <img
            src={rightArrow}
            alt='rightArrow'
            data-direction='right'
            className={classes.arrow}
          />
        </div>
      </div>
      <div
        className={classes.pagination}
        ref={myRef}
        onClick={(event) => {
          handlePaginationClick(event);
        }}>
        <div className={classes.paginationContiner}>
          <div id='0' className={clsx(classes.pagCircle, "active")}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div id='1' className={clsx(classes.pagCircle)}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div id='2' className={classes.pagCircle}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div id='3' className={classes.pagCircle}></div>
        </div>
        <div className={classes.paginationContiner}>
          <div id='4' className={classes.pagCircle}></div>
        </div>
      </div>
    </div>
  );
}
