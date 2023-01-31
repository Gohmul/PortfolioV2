import Nav from "./Nav"
import Nav2 from "./Nav2"
import matrix from "./photos/matrix.jpeg"
import coding from "./photos/coding.gif"

export default function Header() {
    return(
        <div className="header">
            <Nav/>
            <h1 className="header-text">Ryan Saucier</h1>
            <img src={coding} className="header-image"/>
            <Nav2/>

        </div>
    )
}