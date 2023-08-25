import React, { useRef }  from "react"
import { Link } from "react-router-dom"
import '../styles/main.css'
export default function Main(){

    const inputRef = useRef(null)
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <ol>
                <li>You will be asked 10 question one after another.</li>
                <li>10 points is awarded for the correct answer</li>
                <li>Each question has three options. you can choose one options.</li>
                <li>You can review or change answers before the quiz finish</li>
                <li>the result will be declared at end of the Quiz</li>

            </ol>
            <form id="form">
                <input 
                    type="text"
                    placeholder="userName"
                    ref={inputRef}
                    className="userid"
                />
            </form>
            <div className="start">
                <Link className="btn" to={'quiz'}>Start</Link>

            </div>

        </div>
    )
}