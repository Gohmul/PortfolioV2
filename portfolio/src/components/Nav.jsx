    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import { elastic as Menu } from 'react-burger-menu'

    export default function Nav () {
        let navigate = useNavigate()
        return(
        <div className="nav">
      <Menu>
      <Link to="/">
                <h2 className="nav-item1">Home</h2>
            </Link>
            <Link to="/projects">
                <h2 className="nav-item2">Projects</h2>
            </Link>
            <Link to="/about">
                <h2 className="nav-item3">About</h2>
            </Link>
            <h2>
                <a className="nav-item5" href="https://www.linkedin.com/in/ryan-saucier/" target="_blank">Linkedin</a>
            </h2>
            <h2>
            <a className="nav-item5" href="https://github.com/Gohmul/PortfolioV2" target="_blank">Repository</a>
            </h2>
            {/* <h2  className="nav-item4" onClick={((e) => navigate(-1))}>Back</h2> */}
      </Menu>
        </div>
        )
    }