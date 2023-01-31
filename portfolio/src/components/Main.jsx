import { Route, Routes } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Home from "./Home"

export default function Main() {
    return(
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
            </Routes>
        </div>
    )
}