import '../App.tsx'

function Table1(){
    return(
        <>
            Favorite poems:
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Written Year/Century</th>
                </tr>
                <tr>
                    <td>"I Shall Not Pass This Way Again"</td>
                    <td>Anonymous</td>
                    <td>~18th century</td>
                </tr>
                <tr>
                    <td>"I Wandered Lonely as a Cloud"</td>
                    <td>William Wordsworth</td>
                    <td>1802</td>
                </tr>
                <tr>
                    <td>"Because I could not stop for Death"</td>
                    <td>Emily Dickinson</td>
                    <td>~1863</td>
                </tr>
            </table>
        </>
    )
}

export default Table1;