import React  from "react"
import '../styles/result.css'
import { Link } from "react-router-dom"
import ResultTable from "./resultTable"
export default function Result(){
    function onRestart(){
        console.log("on restart")
    }

    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application </h1>
            <div className="result flex-center">
                <div className="flex ">
                    <span>Username</span>
                    <span className="bold">Shubham</span>
                </div>
                <div className="flex ">
                    <span>Total Quiz points:</span>
                    <span className="bold">50</span>
                </div>
                <div className="flex ">
                    <span>Total Question:</span>
                    <span className="bold">05</span>
                </div>
                <div className="flex ">
                    <span>Total Attempts:</span>
                    <span className="bold">03</span>
                </div>
                <div className="flex ">
                    <span>Total Earn points:</span>
                    <span className="bold">30</span>
                </div>
                <div className="flex ">
                    <span>Quiz Result:</span>
                    <span className="bold">Pass</span>
                </div>
            </div>
            <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart} >Restart</Link>
            </div>

            <div>
                <ResultTable />
            </div>
        </div>
    )
}