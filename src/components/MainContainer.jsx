import {Routes, Route} from  'react-router-dom'
import Blue from "./Blue"
import Red from "./Red"
import Home from "./Home"
import Green from "./Green"


function MainContainer() {
    return (
        <>
            <div id="main-section">
                <Routes>
                    <Route path='/blue' element={<Blue />} />
                    <Route path='/red' element={<Red />} />
                    <Route path='/green' element={<Green />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default MainContainer;