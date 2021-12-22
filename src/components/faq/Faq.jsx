import Accordion from "../accordion/Accordion";
import "../faq/faq.scss";
import React from "react";

export default function Faq() {
  const [question, setQuestion] = React.useState([
    {
      title:
        "Do you offer roles with flexible work locations such as work-from-home remote and hybrid options?",
      description:
        "Yes, you will see additional details on an individual job posting if the open role is eligible for remote/hybrid work. Remote eligible means that there are no restrictions on where you have to work. Hybrid eligible means that the role could be done at home or in a company location. If you are selected to start the interview process you can ask the recruiter for additional details on our remote/hybrid options.",
    },
    {
        title:
          "How do I search and apply for a position?",
        description:
          "The best way to search jobs and apply is on our Careers website. Once you’ve created a profile you’ll be able to quickly apply for additional openings and set up job alerts.",
      },
  ]);
  return (
    <div className="l-faq faq">
      <h2>Faq</h2>
      <div className="faq__items">
        {question.map((question) => (
          <Accordion
            title={question.title}
            description={question.description}
          ></Accordion>
        ))}
      </div>
    </div>
  );
}
