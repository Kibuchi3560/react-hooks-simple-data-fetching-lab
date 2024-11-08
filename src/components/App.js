// create your App component here

import React, { useEffect, useState } from "react";

export default function App (){
let [dogImage , setDogImage] = useState("");
let [isLoaded , setisLoaded] = useState(false);

useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then((data) => {
        setDogImage(data.message);
        setisLoaded(true);
    })
} , [])


    return <div>{isLoaded ? <img src={dogImage} alt="A Random Dog"/> : <p>Loading...</p>}</div>
}