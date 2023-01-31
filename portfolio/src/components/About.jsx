import photoOfMe from './photos/me.jpeg'
import IconHtml from "./photos/icons/IconHtml";
import IconReact from "./photos/icons/IconReact";
import IconCSS from "./photos/icons/IconCSS";
import IconJS from "./photos/icons/IconJS";
import IconPython from "./photos/icons/IconPython";
import IconExpress from "./photos/icons/IconExpress";
import IconMySQL from "./photos/icons/IconMySQL";
import IconNodeJS from "./photos/icons/IconNodeJS";
import IconPostgres from "./photos/icons/IconPostgres";
import IconSequelize from "./photos/icons/IconSequelize";
import IconGit from "./photos/icons/IconGit";
import IconDJ from "./photos/icons/IconDJ"

export default function About () {
    return(
<div className="about">
    <div className="photoOfMe-container">
        <img className="photoOfMe"src={photoOfMe}/>
        </div>
        <div className="section1">
            <h1>About Me</h1>
            <p>About xD</p>
        </div>
        <div className='skills'>
            <h1>Languages and Frameworks</h1>
        <div className='skills-grid'>

        <div className='skill'>
            <h2>HTML</h2>
            <IconHtml />
        </div>

        <div className='skill'>
            <h2>CSS</h2>
            <IconCSS />

        </div>
        <div className='skill'>
            <h2>JAVACRIPT</h2>
            <IconJS />

        </div>
        <div className='skill'>
            <h2>REACT</h2>
            <IconReact />

        </div>
        <div className='skill'>
            <h2>GIT</h2>
            <IconGit/>
        </div>
        <div className='skill'>
            <h2>DJANGO</h2>
            <IconDJ/>
        </div>
        <div className='skill'>
            <h2>mySQL</h2>
            <IconMySQL/>
        </div>
        <div className='skill'>
            <h2>NODE JS</h2>
            <IconNodeJS/>
        </div>

        <div className='skill'>
            <h2>PYTHON</h2>
            <IconPython/>
        </div>
        <div className='skill'>
            <h2>EXPRESS</h2>
            <IconExpress/>
        </div>
        <div className='skill'>
            <h2>POSTGRESQL</h2>
            <IconPostgres/>
        </div>
        <div className='skill'>
            <h2>SEQUELIZE</h2>
            <IconSequelize/>
        </div>
        
        </div>
        </div>
</div>
    )
}