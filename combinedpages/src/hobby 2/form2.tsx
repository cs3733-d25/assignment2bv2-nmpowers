import '../App.tsx'

function Form2(){
    return (
        <>
            <br/>
            <hr/>
            <br/>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"/>
                <br/>
                <label htmlFor="hobby">Your Favorite hobby:</label>
                <input type="text" id="hobby"/>
                <br/><br/>
                <label htmlFor="question1">Do you own a quad?</label>
                <input type="checkbox" id="question1"/>
                <br/>
                <label htmlFor="question2">Have you ever ridden on a quad?</label>
                <input type="checkbox" id="question2"/>
                <br/>
                <label htmlFor="question3">Would you have any interest of riding on a quad?</label>
                <input type="checkbox" id="question3"/>
                <br/>
                <p>Do you think my hobby is cool?</p>
                <input type="radio" name="hobby" id="yes" value="yes"/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="hobby" id="no" value="no"/>
                <label htmlFor="no">No</label>
                <input type="radio" name="hobby" id="maybe" value="maybe"/>
                <label htmlFor="maybe">Maybe So</label>
                <br/><br/>
                <label htmlFor="comments">Any comments?</label><br/>
                <textarea name="comments" id="comments" cols="40" rows="3"></textarea>
                <br/><br/>
                <label htmlFor="favorite">Pick your favorite 4-Wheeler manufacturer</label>
                <br/>
                <select name="favorite" id="favorite">
                    <option value="honda">Honda</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Polaris">Polaris</option>
                    <option value="Kawasaki">Kawasaki</option>
                    <option value="Yamaha">Yamaha</option>
                    <option value="Can-Am">Can-Am</option>
                    <option value="Other">Other</option>
                </select>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            <br/><br/><br/><br/></>
    )
}

export default Form2;