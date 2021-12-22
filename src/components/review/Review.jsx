import react from "react";
import "../review/review.scss";

export default function Review(props) {
  switch (props.state) {
    case false:
      return null;
  }
  return (
    <div className="b-review review">
      <div className="review__image">
        <img src={props.src} alt="" />
        <p>
          {props.name}
          <br /> 05.12.2021
        </p>
      </div>
      <p className="review__description">{props.description}</p>
    </div>
  );
}
