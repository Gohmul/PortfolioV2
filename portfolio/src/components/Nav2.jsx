import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function Nav () {
    let navigate = useNavigate()
    return(
       <div className="nav2">
           <Link to="/">
               <h2 className="nav2-item1">Home</h2>
           </Link>
           <Link to="/projects">
               <h2 className="nav2-item2">Projects</h2>
           </Link>
           <Link to="/about">
               <h2 className="nav2-item3">About</h2>
           </Link>
           <h2  onClick={(e)=> navigate(-1)} className="nav2-item4">Back</h2>

       </div>
    )
}