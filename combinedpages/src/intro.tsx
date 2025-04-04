import './App.tsx'

function Intro (props){
    return(
        <>
        <p>
            Hello! We are group 30, which includes {props.firstName} and {props.secondName}, and our favorite hobbies are poetry and offroading!

            <br /><br />

            {props.firstName} is a third-year double major in Architectural Engineering and Computer Science, and he is involved in many organizations all around campus. Currently, {props.firstName} is the President of the Student Government Association, and the Internal Governance Chair of Phi Kappa Theta Fraternity. Due to many other commitments, {props.firstName} does not always have time for poetry, but he does try to
            find reflection time whenever he can.

            <br /><br />

            {props.secondName} is a second-year Robotics Engineering Major at WPI, hailing from the great city of Pittsburgh, Pennsylvania. On campus, {props.secondName} is a proud member of the WPI Motorsports club, and off campus, enjoys taking long drives around New England and enjoying the local scenery. Being on campus limits the ability to get off the roads, but at home, {props.secondName} loves to let it all loose in the woods.
        </p>
        </>
    )
}

export default Intro;
