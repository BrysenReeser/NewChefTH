import './styles.css'
import Bread from './../../Images/bread.png'

export default function CoursesBox(props) {
    return(
        <div class="background" onClick={props.link}>
            <h1 class="boxTitle">{props.name}</h1>
            <p class="descriptive-text">{props.description}</p>
            <p class="descriptive-text">{props.description2}</p>

            <div className='imageBox'>
                <img style={{width: '3rem', height: '3rem'}} src={props.img}></img>
            </div>
        </div>
    )
}