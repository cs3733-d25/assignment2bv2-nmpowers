import '../App.tsx'

function Hobby1(props){
    return(
        <>
        <h2>{props.name}'s Hobby</h2>
            <div id="Hobby1">
                <img  src="public/poetry-banner.jpg" width="640" alt="Poetry Banner" />
            </div>
            <p>
                {props.name} has been writing poetry since he was in middle school, but never really took it seriously until about half-way through high school and into college. Since then, {props.name} has been just posting poetry on an instagram page for friends
                and family to see. He has thought about uploading it to poetry contests or looking for free publication options before in small zines and other public publishing websites. However, {props.name} has never considered his writing professional enough or good enough to warrant this kind of activity.

                <br /> <br />
                If you would like to read any of {props.name}'s work, check out his <a href="https://www.instagram.com/powers.poetry/">public poetry Instagram page!</a>
            </p>
        </>
    )
}

export default Hobby1;