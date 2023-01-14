import { Fragment } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Courses from "./Pages/Courses/Courses";
import Grilling from "./Pages/Grilling/Grilling";
import Home from "./Pages/Home/Home";
import {Route, Routes } from 'react-router-dom'
import Baking from "./Pages/Baking/Baking";
import Frying from "./Pages/Frying/Frying";
import SlowCooking from "./Pages/SlowCooking/SlowCooking";
import StoveTop from "./Pages/StoveTop/StoveTop";
import Wok from "./Pages/Wok/Wok";

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/grilling' element={<Grilling/>} />
        <Route path='/baking' element={<Baking/>} />
        <Route path='/frying' element={<Frying/>} />
        <Route path='/slowcooking' element={<SlowCooking/>} />
        <Route path='/stovetop' element={<StoveTop/>} />
        <Route path='/wok' element={<Wok/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
