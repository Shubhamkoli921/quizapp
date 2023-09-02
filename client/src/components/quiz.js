import React, { useEffect, useState }  from "react"
import Question from "./question"
import { useSelector,useDispatch } from "react-redux"
import { moveNextQuestion, movePrevQuestion } from "../hooks/fetchquestion"
import { PushAnswer } from "../hooks/setResult"
import {Navigate} from 'react-router-dom'

export default function Quiz(){ 

    const [check , setCheckded] = useState(undefined);
    const result = useSelector(state => state.result.result);
    const {queue,trace} = useSelector(state => state.questions)
    const dispatch = useDispatch()
    useEffect(()=>{ 
        console.log(result) 
    })

    function onNext(){
        console.log("on next click")
        if(trace<queue.length){
            dispatch(moveNextQuestion())
            if(result.length <=trace){
                dispatch(PushAnswer(check)) 
            }
        }
        // if(trace > 4){
        //     console.log("end of question")
        // }
    }   

    function onPrev(){
        console.log("on prev click")
        if(trace > 0){
            dispatch(movePrevQuestion())
        }
    }

    function onChecked(check){
        console.log(check);
        setCheckded(check);
    }

    // finished exam after the last exam 
    if(result.length && result.length >= queue.length ){
          return <Navigate to={'/result'} replace="true"></Navigate>
    }
    return (
        <div className="container">
            <h1 className="title text-light"> Quiz Application</h1>
            <Question onChecked={onChecked} />
            <div className="grid">
            {trace > 0 ?<button className="btn prev" onClick={onPrev}>Prev</button>:<><div></div></>}
                <button className="btn next" onClick={onNext}>Next </button>
            </div>

        </div>
    )
}