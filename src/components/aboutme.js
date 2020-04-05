import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Personal from './personal';

class About extends Component{
	render(){
		return(
			<Grid>
				<Cell col={5}>
					<img
						src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						alt="Avatar"
						style={{borderRadius: '50px', marginTop: '70px'}}
					/>
				</Cell>
				<Cell col={7}>
					<h3 style={{marginTop: '80px', textAlign:'center', color: '#c92042', fontWeight: 'bold'}}>About Me</h3>
					
					<Personal 
						name="Ilham Alamsyah"
						myJob="Junior Programmer"
						describe="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						 It has survived not only five centuries, but also the leap into electronic typesetting, 
						 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
						 like Aldus PageMaker including versions of Lorem Ipsum."
					/>

					<div className="my-soc-med">
						<a href="https://www.instagram.com/ilham_alamsyh/?hl=id" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-instagram" aria-hidden="true" />
						</a>
						<a href="https://www.linkedin.com/in/ilham-alamsyah-94936717a/" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
						</a>
						<a href="https://twitter.com/ilham_alamsyah9" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-twitter" aria-hidden="true" />
						</a>
					</div>
				</Cell>
			</Grid>
		)
	}
}

export default About;