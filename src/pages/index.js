import React, {useState} from 'react';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Store from '../components/Store'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CateringForm from '../components/CateringForm';
import ReviewForm from '../components/ReviewForm';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            <MainSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <ContactForm />
            <InfoSection {...homeObjFive} />
            <CateringForm />
            <ReviewForm />
            <Store />
            <Footer />
        </>
    );
};

export default Home;
