import "./accordion.scss";
import React from "react";

export default function Accordion(props) {
  const [click, setClick] = React.useState("description");

  return (
    <div className="faq__accordion">
      <div
        className="faq__title"
        onClick={() =>
          click === "description"
            ? setClick("description--on")
            : setClick("description")
        }
      >
        { props.title }
      </div>
      <div className={"faq__" + click}>
        <p>
            { props.description }
        </p>
      </div>
    </div>
  );
}
