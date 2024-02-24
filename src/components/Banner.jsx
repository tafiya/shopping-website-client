
import banner from '../../public/banner-1.jpg'
const Banner = () => {
  
    return (
    
        <div className="  min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className=" "></div>
        <div className=" pl-28 pt-80 text-left text-black">
          <div className="max-w-md text-center">
            <p className='text-accent text-[24px] lg:text-[28px]'>Trending Item</p>
            <h1 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">WOMEN'S LATEST FASHION SALE</h1>
            <p className="text-[24px] text-gray-500">Starting at $20.00</p>
            <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
          </div>
        </div>
      </div>
        
    );
};

export default Banner;
