import React from 'react';
import './ContentSection.scss';

function ContentSection({redBackground=false}) {
  return (
	<section className={`content-section ${redBackground ? 'redBackground':'whiteBackground'}`}>
		<div className="container">
			<div className="content">
				<h2>We are Biffa</h2>
				<p>We've been at the forefront of the UK waste management industry for over 100 years. We take pride in leading by example, and see ourselves as pioneers both in sustainable waste management and in supporting communities. And by changing the way people think about waste, we are inspiring businesses and households to change their behaviour too</p>
				<div className="actions">
					<a href="#ReadMore" >Read more about us</a>
				</div>
			</div>
		</div>	
	</section>
  )
}

export default ContentSection