import React from "react";
import {Card} from "../component/card";

export const Planetas = () =>{
    return(
        <div className="container-fluid">
        <div className="banner">
            <img src= ""/>
            <h1>Planetas</h1>

            <div className="row mt-4">
                <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
            </div>
        </div>
        </div> 
    )
}