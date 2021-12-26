import react from "react";
import "../review/review.scss";

export default function Review(props) {
  return (
    <div className="b-review review">
      <div className="review__image">
        <img src="people.png" alt="" />
        <p>
          {props.email}
          <br /> 05.12.2021
        </p>
      </div>
      <p className="review__description">{props.description}</p>
    </div>
  );
}
