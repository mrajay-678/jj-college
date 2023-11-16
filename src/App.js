import './App.scss';
import Banner from './component/Banner';
import Header from './component/Header';
import Contact from './component/Contact';
import Slider from './component/Slider';
import Course from './component/Course'; 
import Footer from './component/Footer'; 
import VideoModal from './component/VideoModal';
import WhyChooseUs from './component/WhyChooseUs';
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import CollagePic from './assest/clg.jpeg'
import FineArt from './assest/FineArt.jpeg'
import { useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/Ca8-NAVs6w4?si=8Ssb58-5X9myakOm'; // Replace with your actual video URL

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false)

  return (
    <div className="App">
        <Header/>
        <Banner/>
        <section className='section-padding px-5 gap-5 d-flex justify-content-around'>
          <div className=''>
            <FaHeadphonesAlt className='mb-3 h1'/>
            <h4>Fast support</h4>
            <span>In case you have any questions, our team will gladly help.</span>
          </div>
          <div className=''>
            <FaHeadphonesAlt className='mb-3 h1'/>
            <h4>Fast support</h4>
            <span>In case you have any questions, our team will gladly help.</span>
          </div>
          <div className=''>
            <FaHeadphonesAlt className='mb-3 h1'/>
            <h4>Fast support</h4>
            <span>In case you have any questions, our team will gladly help.</span>
          </div>
          <div className=''>
            <FaHeadphonesAlt className='mb-3 h1'/>
            <h4>Fast support</h4>
            <span>In case you have any questions, our team will gladly help.</span>
          </div>
        </section>
        <section className='section-padding row'>
          <div className='col-md-6 p-0'>
              <img src={FineArt} height="100%" width="100%"/>
          </div>
          <div className='col-md-6 tour-section '>
              <h2 className='mb-3'>Take a tour</h2>
              <span className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incidi.</span>
              <div onClick={() => setModalOpen(!isModalOpen)} ><IoPlaySharp className='play-btn' /></div>
          </div>
        </section>
        <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
        {/* <Course/> */}
        <section className='section-padding text-white row align-items-center'>
          <div className='col-md-4 h-100 p-5' style={{backgroundColor: "#440969"}}>
              <h1>AJAY</h1>
              <p className='my-3'>Lorem ipsum dolor sit amet, co nsectem tur adipiscing elit, sed do eiusmod temy por abore et dolore magna aliqua enima</p>
              <a href="#">Lear More</a>
          </div>
          <div className='col-md-4 h-100 p-5' style={{backgroundColor: "#cf1184"}}>
              <h1>AJAY</h1>
              <p className='my-3'>Lorem ipsum dolor sit amet, co nsectem tur adipiscing elit, sed do eiusmod temy por abore et dolore magna aliqua enima</p>
              <a href="#">Lear More</a>
          </div>
          <div className='col-md-4 p-0'>
              <img src={CollagePic} alt='JJ' width="100%" height="260" />
          </div>
        </section>
        <WhyChooseUs/>
        <Slider/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
