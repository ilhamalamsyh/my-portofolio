import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
	render(){
		return(
			<Grid>  
				<Cell col={4}>
					<div style={{textAlign: 'center'}}>
						<img
							src="https://res.cloudinary.com/dtxq9wbbg/avatars/avatars-v4/v4_avatar-64.png"
							alt="myAvatarImage"
							style={{height:'200px'}}
						/>
					</div>
					<div>
						<h2 style={{paddingTop: '2em'}}>Ilham Alamsyah</h2>
						<h4 style={{color: 'grey'}}>Programmer</h4>
						<hr style={{borderTop: '3px solid #833fb2', width: '70%'}}/>
						<p style={{width: '50%'}}>Lorem Ipsum is simply dummy text of the printing and 
						typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
						printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
						<hr style={{borderTop: '3px solid #833fb2', width: '70%'}}/>
						<h5>Address</h5>
						<p>Jl.KH Maulana Hasanudin, Gg.Warung</p>
						<h5>Phone</h5>
						<p>(+62) 858-8948-7721</p>
						<h5>Linked In</h5>
						<p><a href="https://www.linkedin.com/in/ilham-alamsyah-94936717a/">Ilham Alamsyah</a></p>
						<h5>Github</h5>
						<p><a target='_blank' href="https://www.linkedin.com/in/ilham-alamsyah-94936717a/">ilhamGranger</a></p>
						<hr style={{borderTop: '3px solid #833fb2', width: '70%'}}/>
					</div>	
				</Cell>
				<Cell className="resume-right-col" col={8}>
					<h2 style={{paddingLeft: '25px'}}>Education</h2>
					<Education
						startYear={2015}
						endYear={2018}
						schoolName={"SMKN 5 KOTA TANGERANG"}
						schoolDescription={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
					/>
					
					<Education
						startYear={2019}
						endYear={2023}
						schoolName={"Budi Luhur University"}
						schoolDescription={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
					/>
					<hr style={{borderTop:'3px solid #e22947'}}/>

					<h2 style={{paddingLeft: '25px'}}>Experience</h2>
					<Experience
						startYear={2018}
						endYear={2019}
						jobName={'Quality Assurance Engineer'}
						companyName={'Alamat.com'}
					/>

					<Experience
						startYear={2019}
						endYear={"Present"}
						jobName={'Quality Assurance Engineer'}
						companyName={'Wahyoo.com'}
					/>
					<hr style={{borderTop:'3px solid #e22947'}}/>

					<h2 style={{paddingLeft: '25px'}}>Skills</h2>
					<Skills
						skill="HTML/CSS"
						progress={75}
					/>

					<Skills
						skill="NodeJS"
						progress={75}
					/>

					<Skills
						skill="JavaScript"
						progress={75}
					/>

					<Skills
						skill="React"
						progress={75}
					/>

					<Skills
						skill="Java"
						progress={75}
					/>
				</Cell>
			</Grid>
		)
	}
}

export default Resume;