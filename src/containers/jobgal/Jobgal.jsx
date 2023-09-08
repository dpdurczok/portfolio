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
          imgUrl={images[0]} vidUrl={videos[0]} 
          title="PianoLamps" paragraph="2023" linktext="Watch Animation"
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
          imgUrl={images[8]} vidUrl={videos[6]} 
          title="SingingLily" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[9]} vidUrl={videos[7]} 
          title="ButterFlySwing" paragraph="2023" linktext="Watch Animation"
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
          imgUrl={images[13]} vidUrl={videos[11]} 
          title="Starway to Heaven" paragraph="2023" linktext="Watch Animation"
        />
        <Article
          imgUrl={images[15]} vidUrl={videos[13]} 
          title="Bound" paragraph="2023" linktext="Watch Animation"
        />

        {/* Add more articles with corresponding video URLs */}
      </div>
    </div>
  );
};

export default Jobgal;
