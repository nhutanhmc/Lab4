import  React,{ Component, useState } from "react"



export default function Demo() {

    const[count, setCount] = useState(1);

    function handleClick() {
    setCount(count+1);
}
      return(
        <button onClick={handleClick}>
        You pressed me {count} times
      </button>

      
      );
   
  }