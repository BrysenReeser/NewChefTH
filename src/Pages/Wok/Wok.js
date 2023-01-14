import './styles.css'
import CarouselObject from '../../Components/Carousel/CarouselObject';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function Wok() {
    const [title, setTitle] = useState([]);
    const [image, setImage] = useState([]);
    const [instructions, setinstructions] = useState([""]);
    const [prepTimeMinutes, setPrepTimeMinutes] = useState([])


    const [index, setIndex] = useState(0); 
    const length = 6;

    const handlePrevious = () => {
        if (index != 0){
            const newIndex = index - 1;
            setIndex(newIndex < 0 ? length - 1 : newIndex);
        }
    };

    const handleNext = () => {
        if (title[index+1] != null){
            const newIndex = index + 1;
            setIndex(newIndex >= length ? 0 : newIndex);
        } else {
            alert("Oops! Someone has hidden the other recipes. Try again later.")
        }
    };

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '7', tags: 'wok'},
        headers: {
          'X-RapidAPI-Key': '309b8ce8femsh595d00288b10215p1b8a0fjsn873518ae11e3',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };

    var tempTitle = [];
    var tempImage = [];
    var tempInstructions = [];
    var tempPrepTime = [];

      useEffect(() => {
        axios.request(options).then(function (response) {
            let records = response.data.results
            console.log(records)
            records.map((record) => {
                tempTitle.push(record.name)
                tempImage.push(record.thumbnail_url);
                tempInstructions.push(record.instructions);
                tempPrepTime.push(record.total_time_minutes);
            })
            return records
        }).then(function (response) {
            setTitle(tempTitle)
            setImage(tempImage);
            setinstructions(tempInstructions);
            setPrepTimeMinutes(tempPrepTime)
            return response
        }).catch(function (error) {
            console.error(error);
            setTitle(title.concat("An Error has Occured Retrieving More Recipes"))
            setImage(image.concat('https://s37564.pcdn.co/wp-content/uploads/2018/07/AdobeStock_60915757-e1531904047252.jpeg.optimal.jpeg'));
            setinstructions(instructions.concat([""]));
            setPrepTimeMinutes(prepTimeMinutes.concat(""))
            return [""]
        });
      }, []);

      return (
        <div class="back-flex">
            <div class="subBox">
                <div class="recipeTopBar">
                    <h1 class="carouselTitle">Wok</h1>
                    <h1 class="carouselTitle">{index + 1}/7</h1>
                </div>
            
                <CarouselObject
                    title = {title[index]}
                    image = {image[index]}
                    instructions = {instructions[index]}
                    prepTime = {prepTimeMinutes[index]}
                />
                <div class="bottomButtons">
                    <Button variant="text" color="inherit" className="btn" onClick={handlePrevious}>Previous Day</Button>
                    <Button variant="text" color="inherit" disabled>|</Button>
                    <Button variant="text" color="inherit" className="btn" onClick={handleNext}>Next Day</Button>
                </div>
                
            </div>
        </div>
    )
}

