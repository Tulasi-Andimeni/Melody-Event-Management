import React from "react";
import HomeData from "./components/homedata";
import Wedding from "./wedding";
import Bday from "./Bday";
import Stagedecoration from "./weddingspage/stagedecoration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Haldi from "./weddingspage/haldi";
import Party from "./party";
import BabyShower from "./babyshower";
import Destination from "./destination";
import Decoration from "./bdaypages/decoration";
import Entertainment from "./bdaypages/entertainment";
import Music from "./bdaypages/music";
import Photo from "./photo";
import Gallery from "./gallery";



function App(){
    return(
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Homepage/>}>
            <Route index element={< HomeData/>}></Route>
            <Route path="/wedding" element={< Wedding/>}></Route>
            <Route path="/Bday" element={< Bday/>}></Route>
            <Route path="/Destination" element={< Destination/>}></Route>
            <Route path="/Party" element={< Party/>}></Route>
            <Route path="/Babyshower" element={< BabyShower/>}></Route>
            <Route path="/stagedecoration" element={< Stagedecoration/>}></Route>
            <Route path="/Decoration" element={< Decoration/>}></Route>
            <Route path="/Photo" element={< Photo/>}></Route>
            <Route path="/Music" element={< Music/>}></Route>
            <Route path="/gallery" element={< Gallery/>}></Route>
            <Route path="/Entertainment" element={< Entertainment/>}></Route>
            <Route path="/Haldi" element={< Haldi/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    
      </>
    )
}
export default App;