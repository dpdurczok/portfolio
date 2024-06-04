import React from 'react';
import './Jobgal.css';
import { Article } from '../../components';

import images from '../../assets/JobGalPhotos'; // Import the images array 
import videos from '../../assets/JobGalVideos'; // Import the videos array

const Jobgal = () => {
  return (
    <div className="prt__artgal section__margin">
      <div className="modal">
        <div className="overlay"></div>
      </div>
      <div className="prt__artgal-container">



        <Article
          imgUrl={images[44]}
          title="Threaded Book Mockup" paragraph="2024"
        />
        <Article
          imgUrl={images[41]} vidUrl={videos[34]} 
          title="Creative Paint MockUp" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[46]} vidUrl={videos[37]} 
          title="Clock MockUp" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[27]} vidUrl={videos[25]} 
          title="Valentine logo" paragraph="2024 - Social Media post for Easter" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[31]} vidUrl={videos[27]} 
          title="Lab Teddy" paragraph="2024 - Social Media post for Easter" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[22]} vidUrl={videos[15]} 
          title="Pomellato egg Visualization" paragraph="2024 - Tray for a company party" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[28]} vidUrl={videos[26]} 
          title="Flower Feild Mockup" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[40]} vidUrl={videos[35]} 
          title="Gummy Bear Mockup" paragraph="2024" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[24]} vidUrl={videos[22]} 
          title="Dress Light Show Visualization" paragraph="2024 - A light show on a stage for a wedding" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[32]} vidUrl={videos[28]} 
          title="Paris Flower Visualization" paragraph="2024 - Light show on stage at intercontinental paris le grand" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[33]} vidUrl={videos[29]} 
          title="La Ciprano Pool Attraction" paragraph="2024 - Wedding Attraction at la ciprani pool" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[36]}
          title="Gondola Visualization" paragraph="2024 - A photo opportunity during a wedding at la ciprani pool"
        />


        <Article
          imgUrl={images[26]} vidUrl={videos[24]} 
          title="Love Candles Visualization" paragraph="2024 - Product Visualization for clients" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[38]} vidUrl={videos[32]} 
          title="Hanging Flowers" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[34]} vidUrl={videos[30]} 
          title="Hypno Chocolate" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[23]} vidUrl={videos[21]} 
          title="Vinyl Mockup" paragraph="2024" linktext="Watch Animation"
        />



                <Article
          imgUrl={images[35]} vidUrl={videos[31]} 
          title="Yin Yang" paragraph="2024" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[37]}
          title="Dice Visualization" paragraph="2024 - wedding at la ciprani pool in venice "
        />
        <Article
          imgUrl={images[42]}
          title="Pen Mockup" paragraph="2024"
        />
        <Article
          imgUrl={images[43]}
          title="Pencil Mockup" paragraph="2024" 
        />


        <Article
          imgUrl={images[17]} vidUrl={videos[19]} 
          title="ClownDress" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[21]} vidUrl={videos[16]} 
          title="MetroLED" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[19]} vidUrl={videos[17]} 
          title="Alchemical Artist" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[18]} vidUrl={videos[20]} 
          title="NewsyLegs" paragraph="2023" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[16]} vidUrl={videos[14]} 
          title="SailingLED's'" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[1]}
          title="Doors" paragraph="2023"
        />
        <Article
          imgUrl={images[2]} 
          title="DeepOcean" paragraph="2023" 
        />
        <Article
          imgUrl={images[39]} vidUrl={videos[33]} 
          title="Fashion pool" paragraph="2024" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[0]} vidUrl={videos[0]} 
          title="PianoLamps" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[3]} vidUrl={videos[1]} 
          title="ButterFly" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[4]} vidUrl={videos[2]} 
          title="GrowingEyes" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[5]} vidUrl={videos[3]} 
          title="MeltingIris" paragraph="2023" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[6]} vidUrl={videos[4]} 
          title="BloodMoon" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[7]} vidUrl={videos[5]} 
          title="Vines" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[14]} vidUrl={videos[12]} 
          title="CubeSim" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[15]} vidUrl={videos[13]} 
          title="Bound" paragraph="2023" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[13]} vidUrl={videos[11]} 
          title="Starway to Heaven" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[10]} vidUrl={videos[8]} 
          title="Growth" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[11]} vidUrl={videos[9]} 
          title="JellyDance" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[12]} vidUrl={videos[10]} 
          title="FishDance" paragraph="2023" linktext="Watch Animation"
        />



        <Article
          imgUrl={images[9]} vidUrl={videos[7]} 
          title="ButterFlySwing" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[8]} vidUrl={videos[6]} 
          title="SingingLily" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[20]} vidUrl={videos[18]} 
          title="SnowGlobeDress" paragraph="2023" linktext="Watch Animation"
        />

        {/* Add more articles with corresponding video URLs */}
      </div>
    </div>
  );
};

export default Jobgal;
