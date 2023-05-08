import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentFeedback = useSelector(storeInstance => storeInstance.currentFeedback);

    const submitFeedback = () => {
        axios({
            method: 'POST',
            data: currentFeedback,
            url: '/feedback'
        }).then(response => {
            dispatch({
                type: 'ADD_FEEDBACK',
                payload: currentFeedback
            })
            console.log('Added to Feedback List and Database')
            navigate('../Success');
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <>
            <h1>Review your Feedback</h1>
            <p>Feelings: {currentFeedback.feelings}</p>
            <p>Understanding: {currentFeedback.understanding}</p>
            <p>Support: {currentFeedback.support}</p>
            <p>Comments: {currentFeedback.comments}</p>
            <button onClick={submitFeedback}>SUBMIT</button>
        </>
    )
}

export default ReviewPage;