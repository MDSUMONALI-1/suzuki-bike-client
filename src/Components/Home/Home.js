import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <h2>Suzuki News</h2>
           <News></News>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;