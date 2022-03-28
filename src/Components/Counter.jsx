import React, { useState } from 'react';


const Counter = ({value}) => {
    const [count , setcount] = React.useState(value);

    // const handlechange = () =>{
    //     setcount(count + 1)
    // } 

  return (
    <>
    <h2>Count : {count}</h2>
     <br />
    <button onClick = {() => setcount(count + 1)}>INC</button>
    <button onClick = {() => setcount(count - 1)}>DEC</button>
    <button onClick = {() => setcount(count * 2)}>DOUBLE</button>
    </>
  )
}

export  {Counter}