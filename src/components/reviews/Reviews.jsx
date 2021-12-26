import React from "react";
import Review from "../review/Review";
import axios from "axios";
import "../reviews/reviews.scss";

export default function Reviews() {
  const [peoples, setPeoples] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then((res) => {
      setPeoples(res.data)
    })
  }, [])
  return (
    <div className="l-reviews reviews">
      <h2>Says our customers</h2>
      <div className="reviews__content">
        {peoples.map((item) => ( item.id > 4 ? null :
          <Review key={item.id}
            email={item.email}
            description={item.body}
          ></Review>
        ))}
      </div>
    </div>
  );
}
