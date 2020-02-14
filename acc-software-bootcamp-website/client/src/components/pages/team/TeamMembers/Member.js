import React from 'react';

const Member = props => (
	<div className='member'>
		<div className='member__img-box'>
			<div className='member__img-box--description'>
				<p className='paragraph'>
					{/* some logic to keep the lorem until everyone turns in their description */}
					{ props.description ? props.description : 
					`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
					qui. Officia nesciunt fuga doloremque, cupiditate asperiores beatae
					suscipit numquam odit.`}
				</p>
			</div>
			<img
				src={props.image}
				alt='instructors'
				className='member__img-box--img'
			/>
		</div>
		<div className='member__name-box'>
			<h3 className='heading-primary'>{props.name}</h3>
		</div>
	</div>
);

export default Member;
