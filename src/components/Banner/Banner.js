import React from 'react'
import bannerImg from '../../images/banner.png'
import "./Banner.scss"

const Banner = () => {
  return (
	<section className="banner">
		<img src={bannerImg} alt="Biffa Banner" /> 
	</section>
  )
}

export default Banner
