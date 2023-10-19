import {Link} from  'react-router-dom'

function Navbar() {
    return (
        <>
            <div id="navbar">
                <Link to='/'>Home</Link>
                <Link to='/blue'>Here is Blue!</Link>
                <Link to='/red'>Here is Red!</Link>
                <Link to='/green'>Here is Green!</Link>
            </div>
        </>
    )
}

export default Navbar;