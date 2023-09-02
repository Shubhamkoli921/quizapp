import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import data from '../database/data'

import * as Action from '../redux/questionReducer'
export const useFetchQuestion = () => {

    const dispatch = useDispatch();

    const [getdata, setgetdata] = useState({isLoading: false, apiData: [], serverErro: null })
    useEffect(() => {
        setgetdata(prev =>({...prev,isLoading:true}));
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setgetdata(prev =>({...prev,isLoading:false}));
                    setgetdata(prev => ({ ...prev, apiData: question }));

                    // dispatch an action 
                    dispatch(Action.startExamAction(question));
                }
                else {
                    throw new Error("no Question Available");
                }
            }
            catch (err) {
                setgetdata(prev => ({ ...prev, isLoading: false })) 
                setgetdata(prev => ({ ...prev, serverErro : err }))
            }
        })(); 
        
    }, [dispatch]);
    return [getdata, setgetdata];

}

export const moveNextQuestion = ()=>async (dispatch)=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}
export const movePrevQuestion = ()=>async (dispatch)=>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}