import '../App.tsx'

function Hobby2(props){
    return (
        <>
        <h2>{props.othername}'s Hobby</h2>
            <div id="Hobby2">
                <img src="public/TRX200.jpg" width = "640"  alt="Honda TRX200" />
            </div>
            <p>
                One of {props.othername}'s favorite hobbies is working on his 1984 Honda TRX 4-Wheeler, and ripping it through the woods.
                Being such an old vehicle that was neglected for many years, {props.othername} is constantly working on it to keep it in operating condition.
                It is not running as of right now, because it is having a fuel delivery issue and needs a carburetor clean, and a new battery.
                When it is running, {props.othername} likes to ride around in the woods on his property, and drive it around the local backroads of his camp.
            </p>
        </>
    )
}
export default Hobby2;