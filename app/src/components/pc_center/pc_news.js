import React from 'react';
import Carousel from '../tools/carousel.js'

export default class PCNews extends React.Component{
    constructor(){
        super();

    }
     render(){
         return(
             <div>
            <h1>最新消息</h1>
                 <Carousel/>
             </div>

         )


     }



}
