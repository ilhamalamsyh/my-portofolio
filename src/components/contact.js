import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
					<h2>Ilham Alamsyah</h2>
					<img
						src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						alt="avatar"
						style={{height: '250px'}}
					/>
					<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
					printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>
						<div className='contact-list'>
						<List>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
									<i style={{color: 'green'}} className="fa fa-phone-square" aria-hidden='true'/>
									(+62) 858-8948-7721
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
									<i style={{color: '#0072b1'}} className="fa fa-linkedin-square" aria-hidden='true'/>
									Ilham Alamsyah
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
									<i style={{color: 'red'}} className="fa fa-envelope" aria-hidden='true'/>
									ilhamalamsyah510@gmail.com
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
									<i style={{color: '#00AFF0'}} className="fa fa-skype" aria-hidden='true'/>
									MySkypeID
								</ListItemContent>
							</ListItem>
						</List>						
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;