import { useEffect, useState } from "react"
import data from "../database/data"
export default function Question() {
    const [checked, setChecked] = useState(undefined)
    const question = data[0]

    useEffect(() => {
        console.log(question)
    })

    function onSelect() {
        // setChecked(true)
        console.log("radio button changed")
    }
    return (
        <div className="questions">
            <h2 className="text-light">{question.question} </h2>
            <ul key={question.id}>
                {
                    question.options.map((quest, index) => (
                        <li key={quest}>
                            <input
                                type="radio"
                                value={true}
                                name="options"
                                id={`q${index}-option`}
                                onChange={onSelect()}
                            />
                            <label htmlFor={`q${index}-option`} className="text-primary">{quest}</label>
                            <div className="check"></div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}