import React, { useState } from 'react';

const colorsArray = [
    "rgba(232, 232, 232, 0.6)",
    "rgba(232, 236, 241, 0.6)",
    "rgba(243, 241, 239, 0.6)",
    "rgba(210, 215, 211, 1)"
]


function PageWrapper(){
    //set up state of background colors array, plan to rotate through these when quote button clicked
    const [color, setColor] = useState(colorsArray);

    return(
        <div className="page-wrapper">
        </div>
    )
}

export default PageWrapper;