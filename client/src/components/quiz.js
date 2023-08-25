import React  from "react"
import Question from "./question"
export default function Quiz(){

    function onNext(){
        console.log("on next click")
    }

    function onPrev(){
        console.log("on prev click")
    }
    return (
        <div className="container">
            <h1 className="title text-light"> Quiz Application</h1>
            <Question />
            <div className="grid">
                <button className="btn prev" onClick={onPrev}>Prev</button>
                <button className="btn next" onClick={onNext}>Next </button>
            </div>

        </div>
    )
}