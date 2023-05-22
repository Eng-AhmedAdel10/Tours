import React from "react";
import Tour from "./Tour";

const Tours=({tours,deleteTour})=>{
    return(
        <section>
            <h2 className="title">Tours</h2>
            {
                tours.map(tour=>{
                    return <Tour {...tour} deleteTour={deleteTour} key={tour.id} />
                })
            }
        </section>
    )
} 

export default Tours;