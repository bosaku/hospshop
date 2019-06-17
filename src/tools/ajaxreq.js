import React from "react";

const FetchAndWait = (url) =>{
    fetch(url)
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log(data)
  });
}
 

