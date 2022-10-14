import React, { Suspense, lazy } from 'react';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import Jobs from '../components/Jobs/Jobs';
import Marque from '../components/Marque/Marque';

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <Categories/>
            <Jobs/>
            <Marque/>
            <Footer/>
        </>
    );
};

export default HomePage;