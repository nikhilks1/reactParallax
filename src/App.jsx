// App.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

function App() {
  return (
    <div className='app'>
      <h1 className='heading'>Parallax Demo</h1>
      {/* demo 1 */}
      <Parallax className='img1' strength={600} bgImage={img3}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      {/* demo 2 */}
      <Parallax className='img1' strength={300} blur={{ min: -5, max: 15 }} bgImage={img2}>
        <div className="content">
          <div className="text-content">Blurry Parallax</div>
        </div>
      </Parallax>
      {/* demo 3 */}
      <Parallax className='img1' strength={-600} bgImage={img1}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <h1 className='heading'>Image Slider Effect</h1>
      <ImageSlider /> {/* Add the ImageSlider component here */}
    </div>
  );
}

export default App;
