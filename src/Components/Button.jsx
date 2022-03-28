import React from 'react';


const Button = ({children} , {handleclick}) => (
    <>button rendered from components 
        <button>
            {children}
        </button>
    </>
)

export  {Button};