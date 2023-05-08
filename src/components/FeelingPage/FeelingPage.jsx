import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector, useState } from "react";
import { useNavigate } from "react-router-dom";

function FeelingPage() {

    const [feelingsInput, setFeelingsInput] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitFeelings = (event) => {
        event.preventDefault();

        // console.log(parseInt(feelingsInput));
        if (!isNaN(feelingsInput)) {
            dispatch({
                type: 'ADD_FEELINGS',
                payload: feelingsInput
            })
    
            setFeelingsInput('');
    
            navigate('../understanding');
        } else {
            alert('The input must be a number');
        }
    }

    return(
        <>
            <h1>How are you feeling today?</h1>
            <form  onSubmit={submitFeelings}>
                <input
                 placeholder="Feelings"
                 value={feelingsInput}
                 onChange={(event) => {setFeelingsInput(event.target.value)}}></input>
                <button type="Submit">NEXT</button>

            </form>
        </>
    )
}

export default FeelingPage;