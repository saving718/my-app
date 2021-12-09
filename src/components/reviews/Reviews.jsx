import react, { useState } from "react";
import Review from "../review/Review";
import '../reviews/reviews.scss';


export default function Reviews() {
    const [peoples, setPeoples] = useState([
        {
        name: "John Smith",
        description: "Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..",
        img: "people-1.png",
        state: true
        },
        {
        name: "Brett Lee",
        description: "Education WP is a special build for effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which all the strength of eLearning WP..",
        img: "people-2.png",
        state: true
        },
])
    return (
        <div className="l-reviews reviews">
            <h1>Says our customers</h1>
            <div className="reviews__content">
                 {peoples.map(peoples => <Review src= {peoples.img} state={peoples.state} name={peoples.name} description={peoples.description} ></Review>) }
            </div>
        </div>
    )
}