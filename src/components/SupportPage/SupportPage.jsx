import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SupportPage() {

    const [supportInput, setSupportInput] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitSupport = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })

        setSupportInput('');

        navigate('../comments');
    }

    return(
        <>
            <h1>How well are you being supported?</h1>
            <form  onSubmit={submitSupport}>
                <input
                 placeholder="Support"
                 value={supportInput}
                 onChange={(event) => {setSupportInput(event.target.value)}}></input>
                <button type="Submit">NEXT</button>

            </form>
        </>
    )
}

export default SupportPage;