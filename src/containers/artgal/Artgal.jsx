import React, { Component } from "react"
import "./artgal.css"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {useNavigate} from 'react-router-dom';

import Art1 from '../../assets/ArtGalPhotos/baterry.png';
import Art2 from '../../assets/ArtGalPhotos/bee.png';
import Art3 from '../../assets/ArtGalPhotos/car.png';
import Art4 from '../../assets/ArtGalPhotos/chains.png';
import Art5 from '../../assets/ArtGalPhotos/coffee.png';
import Art6 from '../../assets/ArtGalPhotos/crystals.png';
import Art7 from '../../assets/ArtGalPhotos/dinobones.png';
import Art8 from '../../assets/ArtGalPhotos/earth.png';
import Art9 from '../../assets/ArtGalPhotos/earth2.png';
import Art10 from '../../assets/ArtGalPhotos/jellyrender.png';
import Art11 from '../../assets/ArtGalPhotos/john.jpeg';
import Art12 from '../../assets/ArtGalPhotos/kitchen.png';
import Art13 from '../../assets/ArtGalPhotos/micro.png';
import Art14 from '../../assets/ArtGalPhotos/MovementMouse.png';
import Art15 from '../../assets/ArtGalPhotos/movienight.png';
import Art16 from '../../assets/ArtGalPhotos/ramen.png';
import Art17 from '../../assets/ArtGalPhotos/ShangriLa.png';
import Art18 from '../../assets/ArtGalPhotos/terminator.png';
import Art19 from '../../assets/ArtGalPhotos/towel.png';
import Art20 from '../../assets/ArtGalPhotos/wine.png';

class Artgal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imageUrl:"",
            imageUrlArray: [
                Art1, Art2, Art3, Art4, Art5, Art6,Art7,Art8,Art9,Art10,Art11,Art12,Art13,Art14,Art15, Art16, Art17, Art18, Art19, Art20
            ],
            showModal: false,
            popImageUrl: ""
        }
    }

    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url) => {
            return(
                <img className="singleImage" src={url}/>
            )
        })
        return(
            <div>
                <div className="back">
                    <a href="/"> back </a> 
                </div>     
                <div className="Images">      
                    {images}
                </div>
            </div>
        )
    }
}

export default Artgal