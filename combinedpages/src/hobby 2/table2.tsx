import '../App.tsx'

function Table2(){
    return (
        <>
            <h3>Things I need to work on/want to fix</h3>
            <ul>
                <li>Replace the Battery</li>
                <li>Clean the Carburetor</li>
                <li>Plastic weld the cracked body</li>
                <li>Rewire the tail lights</li>
                <li>Adjust the transmission</li>
            </ul>

            <table className="collapse">
                <caption>Interesting specs</caption>
                <tr>
                    <td>Engine</td>
                    <td>Transmission</td>
                    <td>Chassis</td>
                </tr>
                <tr>
                    <td>192cc single cylinder</td>
                    <td>5 speed + reverse</td>
                    <td>452lb dry weight</td>
                </tr>
                <tr>
                    <td>13 hp</td>
                    <td>Low/High gear transfer case</td>
                    <td>Electric and Ripcord starters</td>
                </tr>
                <tr>
                    <td>Overhead camshaft</td>
                    <td>Rear Wheel Drive only</td>
                    <td>2 Hand breaks + 1 foot break</td>
                </tr>
            </table>
        </>
    )
}

export default Table2;