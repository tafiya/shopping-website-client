// import PauseOnHover from "../components/Banner";

import Banner from "../components/Banner";
import Items from "./item/Items";





const Home = () => {
    console.log('from home');
    return (
        <div>
            <Banner></Banner>
        
              {/* <Banner></Banner> */}
            <Items></Items>
        </div>
    );
};

export default Home;