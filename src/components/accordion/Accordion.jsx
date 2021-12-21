import React from "react";

export default function Accordion() {
    const [click, setClick] = React.useState('description');
    
    return (
        <div className="faq__accordion">
            <div className="faq__title" >
                <h2 onClick={() => click === 'description' ? setClick('description-on'): setClick('description')}>Название</h2>
            </div>
            <div className={"faq__" + click}>
                <p>Ответ</p>
            </div>
        </div>
    )
}