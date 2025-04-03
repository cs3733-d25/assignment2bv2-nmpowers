import '../App.tsx'

function Form1 (){
    return(
        <>
        <h2>Poetry Input Form</h2>
            <form>
                <label htmlFor="poem-read"> Which piece did you read?</label>
                <input type="text" id="poem-read"/>

                <label htmlFor="emotion"> What emotion did it invoke, if any?</label>
                <input type="text" id="emotion"/>
                <br/><br/>

                Which medium(s) do you read from (if any)?
                <br/>
                <input type="checkbox" id="Poetry"/>
                <label htmlFor="poetry">Poetry</label>
                <br/>
                <input type="checkbox" id="Novels"/>
                <label htmlFor="Novels">Novels</label>
                <br/>
                <input type="checkbox" id="Magazines"/>
                <label htmlFor="Magazines">Magazines</label>
                <br/><br/>

                How would you rate your interest for poetry in particular?
                <br/>
                <input type="radio" id="notInterested" name="interest" value="Not Interested"/>
                <label htmlFor="notInterested">Not Interested</label><br/>
                <input type="radio" id="neutral" name="interest" value="Neutral"/>
                <label htmlFor="neutral">Neutral</label><br/>
                <input type="radio" id="interested" name="interest" value="Interested"/>
                <label htmlFor="interested">Interested</label>
                <br/><br/>

                <label htmlFor="comments">Comments:</label>
                <br/>

                <textarea rows="2" cols="40" id="comments"></textarea>
                <br/>

                <button type="Submission">
                Submit
                </button>
            </form>
        </>
    )
}

export default Form1;