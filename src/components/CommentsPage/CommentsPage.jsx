import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function CommentsPage() {

    const [commentsInput, setCommentsInput] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitComments = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        })

        setCommentsInput('');

        navigate('../Review');
    }

    return(
        <>
            <h1>Any comments you want to leave?</h1>
            <form  onSubmit={submitComments}>
                <input
                 placeholder="Comments"
                 value={commentsInput}
                 onChange={(event) => {setCommentsInput(event.target.value)}}></input>
                <button type="Submit">NEXT</button>

            </form>
        </>
    )
}

export default CommentsPage;