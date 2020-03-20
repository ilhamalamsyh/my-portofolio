import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
	render(){
		return(
			<div style = {{width : '100%', margin : 'auto'}}>
				<Grid className = "landing-grid">
					<Cell col={12}>
						<img 
						src="https://res.cloudinary.com/dtxq9wbbg/avatars/avatars-v4/v4_avatar-64.png"
						alt="Avatar"
						className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Full Stack Developer</h1>

							<hr />

							<p>HTML/CSS | Javascript | React | NodeJS | Express | MongoDB | SQL</p>

							<div className="social-link">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/ilham-alamsyah-94936717a/" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/ilhamGranger" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Twitter */}
								<a href="https://twitter.com/ilham_alamsyah9" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-twitter" aria-hidden="true" />
								</a>

								{/* Instagram */}
								<a href="https://www.instagram.com/ilham_alamsyh/?hl=id" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-instagram" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
				
			</div>
		)
	}
}

export default Landing;