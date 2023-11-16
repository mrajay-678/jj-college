import React from 'react'
import BannerVideo from "../assest/Left-menu-home-video.mp4"
import BannerImg from "../assest/artboard.png"

const Banner = () => {
  return (
    <>
      <div className="heading-sec">
        <video autoPlay playsInline loop src={BannerVideo}> </video>
        <img src={BannerImg} alt="Banner"/>
        <div className='position-absolute fw-bold'>Three Schools <br /> One World</div>
    </div>
    </>
  )
}

export default Banner
