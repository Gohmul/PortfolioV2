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
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>

            </div>
            <div className="project">
                <h1>Blackjack</h1>
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
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>          


            </div>
            <div className="project">
                <h1>Yugioh Card Api Site</h1>
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
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>   
   

            </div>
            <div className="project">
                <h1>DLS Games MOCK Website </h1>
                <img className="project-image" src={DLS}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Gohmul/Capstone_project" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
                </div>
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>                

            </div>
            <div className="project">
                <h1>Mock Instrument Store </h1>
                <img className="project-image" src={instrumentstore}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Jwolter23/Instrument_Store" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
            </div>
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>                

            </div>
            <div className="project">
                <h1>Mock Venue Tracker </h1>
                <img className="project-image" src={venuetracker}/>
                <div className="buttons">
                <button className="button">
                    <a href="https://github.com/Gohmul/venue_stackathon" target="_blank">
                        REPO
                    </a>
                </button>
                <button className="button">DEPLOYED LINK</button>
                </div>
                <p className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam unde mollitia ipsa error vero consequatur rem iure, blanditiis omnis voluptatem harum esse quidem officiis. Blanditiis voluptates minus aut vitae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolores expedita voluptatibus commodi, eligendi maxime consectetur neque repudiandae impedit fuga est possimus at quam fugiat voluptatum vero necessitatibus quod explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci molestias, omnis cumque doloremque nobis sunt aspernatur impedit aut nemo, animi numquam enim vero rem odio, ipsam architecto! Nostrum, quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequuntur consequatur sed reiciendis aliquid commodi, dolores fugiat iure pariatur debitis odit, odio enim eum incidunt dolorum. Asperiores enim possimus aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam amet tempore eveniet alias quos, illum ea dolorum natus autem, eaque asperiores ut. Obcaecati porro ad impedit minima quasi quam commodi!Loremlore  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto tenetur possimus, quod minima nostrum aut exercitationem in, ab minus obcaecati. Fuga velit obcaecati soluta excepturi incidunt atque ad at?
                </p>                

            </div>
        </div>
    )
}