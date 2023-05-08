import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UnderstandingPage() {

    const currentFeedback = useSelector(store => store.currentFeedback);
    const [understandingInput, setUnderstandingInput] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitUnderstanding = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })

        setUnderstandingInput('');

        navigate('../support');
    }
    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <form  onSubmit={submitUnderstanding}>
                <input
                 placeholder="Understanding:"
                 value={understandingInput}
                 onChange={(event) => {setUnderstandingInput(event.target.value)}}></input>
                <button type="Submit">NEXT</button>
            </form>
        </>
    )
}

export default UnderstandingPage;