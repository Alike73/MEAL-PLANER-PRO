import myBannerImg from '../../Assets/groceryBanner.jpg';

const MealBanner = () => {

  return (
    <div className="col-md-10 mx-auto col-lg-5 meal_banner">
      <div className='transform-border'>
        <img 
          className='img-fluid' 
          src={ myBannerImg } 
          alt="grocery on the table" 
        />
      </div>
    </div>
  )
}

export default MealBanner;