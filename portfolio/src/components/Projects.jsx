import Tictactoe from "../components/photos/tictactoe.png"
import Blackjack from "../components/photos/blackjack.png"
import Yugiohapi from "../components/photos/yugiohapi.png"
import DLS from "../components/photos/DLS.png"
import instrumentstore from "../components/photos/instrumentstore.png"
import venuetracker from "../components/photos/venuetracker.png"
import { useNavigate } from "react-router-dom"

export default function Projects()  {
    
    return(
        <div className="project-container">
            <div className="project">
                <h1>Tic-Tac-Toe</h1>
                <p className="project-desc">
                My first coding project.
                </p>
                <img className="project-image" src={Tictactoe}/>
                <div className="buttons">
                <button className="button">
                <a href="">REPO</a>
                </button>
                <button className="button">
                    <a href="https://tictactoers.surge.sh/" target="_blank">
                        Deployed Link
                    </a>
                </button>
                </div>


            </div>
            <div className="project">
                <h1>Blackjack</h1>
                <p className="project-desc">
                A Blackjack game developed in a week.
                </p> 
                <img className="project-image"  src={Blackjack}/>
                <div className="buttons">     
                <button className="button">
                    <a href="https://github.com/Gohmul/Black-Jack-Game" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">
                    <a href="https://rsblackjack.surge.sh/" target="_blank">
                        Deployed Link
                    </a>
                </button>
                </div> 
         


            </div>
            <div className="project">
                <h1>Yugioh Card Api Site</h1>
                <p className="project-desc">
                    A website using a Yu-gi-oh card API that lists all of the cards and there market values.
                </p>  
                <img className="project-image"  src={Yugiohapi}/>
                <div className="buttons">          
                <button className="button">
                    <a href="https://github.com/Gohmul/Yugioh-API" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">
                    <a href="http://yugiohcardsrs.surge.sh/" target="_blank">
                        Deployed Link
                    </a>
                </button>
                </div>
 
   

            </div>
            <div className="project">
                <h1>DLS Games MOCK Website </h1>
                <p className="project-desc">
                A Fullstack website that lists all owned arcade machines and there location using React, Firebase, and Django.
                </p> 
                <img className="project-image" src={DLS}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Gohmul/Capstone_project" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
                </div>
               

            </div>
            <div className="project">
                <h1>Mock Instrument Store </h1>
                <p className="project-desc">
                A Fullstack Instrument Store website using React and Sequelize
                </p> 
                <img className="project-image" src={instrumentstore}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Jwolter23/Instrument_Store" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
            </div>
               

            </div>
            <div className="project">
                <h1>Mock Venue Tracker </h1>
                <p className="project-desc">
                A Fullstack Venue Tracking website using React and Django
                </p>   
                <img className="project-image" src={venuetracker}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Gohmul/venue_stackathon" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
                </div>             

            </div>
        </div>
    )
}