import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Services from '../Services/Services';
import Reviewes from './Review/Reviewes/Reviewes';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <h2>Suzuki News</h2>
           <News></News>
           <Reviewes></Reviewes>
        </div>
    );
};

export default Home;