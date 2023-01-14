import CoursesBox from '../../Components/CoursesBox/CoursesBox'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Bread from './../../Images/bread.png'
import Frying from './../../Images/frying.png'
import SlowCooking from './../../Images/crockPot.png'
import Grilling from './../../Images/grill.png'
import Wok from './../../Images/wok.png'
import StoveTop from './../../Images/stoveTop.png'


export default function Courses() {
    const navigate = useNavigate();
    return (
        <div class="back-flex">
            <h1 class="course-select">Select a Course</h1>
            <div class="coursesRow">
                <div class="boxFrame">
                    <CoursesBox 
                        name="Grilling" 
                        description="Enhance your cooking game and impress your friends & family with grilling, creating delicious and juicy meals. Perfect for entertaining, summer cookouts and cooking for a crowd."
                        img={Grilling}
                        link= {() => navigate('/grilling')}
                    />
                </div>
                <div class="boxFrame">
                    <CoursesBox 
                        name="Baking" 
                        description="Unleash your creative side and bake delicious bread, pastries, cakes, casseroles, and more. Perfect for precision, control, and experimenting with flavors and ingredients."
                        img={Bread}
                        link= {() => navigate('/baking')}
                    />
                </div>
                <div class="boxFrame">
                    <CoursesBox 
                        name="Slow Cooking" 
                        description="Enjoy tender, flavorful dishes with the convenience of slow cooking. Perfect for busy days, entertaining and making large batches of food. Try it today and experience the delicious and comforting meals it can create."
                        img={SlowCooking}
                        link= {() => navigate('/slowcooking')}
                    />
                </div>
                <div class="boxFrame">
                    <CoursesBox 
                        name="Frying" 
                        description="Experience the delicious crispy golden-brown exterior and moist and flavorful inside with Fry cooking method. Perfect for quick and versatile cooking, from light and crispy coating to thick and crunchy crust."
                        img={Frying}
                        link= {() => navigate('/frying')}
                    />
                </div>
                <div class="boxFrame">
                    <CoursesBox 
                        name="Stove Top" 
                        description="Cook quickly and efficiently with stove top cooking method, create a wide variety of dishes with precision and control. Perfect for busy weekdays, entertaining and cooking for a family."
                        img={StoveTop}
                        link= {() => navigate('/stovetop')}
                    />
                </div>
                <div class="boxFrame">
                    <CoursesBox 
                        name="Wok Cooking" 
                        description="Experience the traditional Chinese cooking method with wok cooking, high-heat and fast cooking technique that preserves the natural flavors and nutrients of the ingredients. Perfect for stir-fry, soups, stews and deep-fries"
                        img={Wok}
                        link= {() => navigate('/wok')}
                    />
                </div>
            </div>
        </div>
    )
}