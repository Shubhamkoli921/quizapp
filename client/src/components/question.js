import { useEffect, useState } from "react"
import data from "../database/data"
import { useFetchQuestion } from "../hooks/fetchquestion"
import { useDispatch, useSelector } from "react-redux"
import { startExamAction } from "../redux/questionReducer"

import { updateResult } from "../hooks/setResult"
// import questionReducer from "../redux/questionReducer"
export default function Question({onChecked}) {
    const [checked, setChecked] = useState(undefined)
    const {trace} =  useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const dispatch = useDispatch()
    const [{isLoading, apiData, serverErro}] =useFetchQuestion()
    // const question = data[0]
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    // const trace = useSelector(state => state.questions.trace)

    useEffect(() => {
        console.log({trace,checked})
        // console.log(apiData)
        // console.log(serverErro)
        dispatch(updateResult({trace,checked}))
    },[checked]) 

    function onSelect(index) {
        // console.log(index)
        onChecked(index);
        setChecked(index)
    }

    if(isLoading) return <h3 className="text-light">isLoading</h3>
    if(serverErro) return <h3>{serverErro || "unknown Error"}</h3>
    return (
        <div className="questions">
            <h2 className="text-light">{questions?.question} </h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((quest, index) => (
                        <li key={quest}>
                            <input
                                type="radio"
                                value={true}
                                name="options"
                                id={`q${index}-option`}
                                onChange={()=>onSelect(index)}
                            />
                            <label htmlFor={`q${index}-option`} className="text-primary">{quest}</label>
                            <div className={`check ${result[trace] == index ? 'checked':''}`}></div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}