import { useEffect, useState } from 'react';
import myBannerImg from '../../Assets/groceryBanner.jpg';

const MealBanner = () => {

  const [animateImage, setAnimateImage] = useState(true);

  useEffect(() => {
    // After a short delay (e.g., 500ms), remove the animation class
    const imageAnimationTimeout = setTimeout(() => {
      setAnimateImage(false);
    }, 500);

    return () => clearTimeout(imageAnimationTimeout);
  }, []);

  return (
    <div className="col-md-10 mx-auto col-lg-5 meal_banner">
      <div className='transform-border'>
        <img 
          className={`img-fluid ${animateImage ? "tilt-in-bottom-1" : ""}`} 
          src={ myBannerImg } 
          alt="grocery on the table" 
        />
      </div>
    </div>
  )
}

export default MealBanner;