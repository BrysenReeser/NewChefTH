import "./styles.css"
import cooking from './../../Images/cooking.png'
import stepsImage from './../../Images/bottomText.png'


export default function Home() {
    return (
        <div class="home-wrapper">
            <div class="title">
                <h1>Learn Cooking</h1>
            </div>
            <div class="subtitle">
                <h1>Fun, Fast, Free.</h1>
            </div>
            <div class="course-button">
                {/* Doesnt work because of SVG */}
            </div>
            {/* Below this is the required divs for generating the wave */}
            <div class="custom-shape-divider-bottom-1673665034">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-subbottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    <text x="70" y="45" className="bottom-title">How it Works</text>
                    <image href={cooking} height="140" width="140" x="300" y="-20"></image>
                    <image href={stepsImage} height="120" width="125" x="35" y="15"></image>
                </svg>
            </div>
            {/* Above this is required dives for generating the wave */}
            
        </div>
    )
}