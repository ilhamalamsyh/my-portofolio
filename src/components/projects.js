import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories(){

		if (this.state.activeTab === 0) {
			return(
				<div className="projects-grid">
					{/*React Prokect*/}
					{/* Project1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'white', height:'176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'}}>React Project #1</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project2 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'white', height:'176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'}}>React Project #2</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project3 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'white', height:'176px', background: 'url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center / cover'}}>React Project #3</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				</div>	
			)
		}else if (this.state.activeTab === 1) {
			return(
				<div className="projects-grid">
					{/*Angular Project*/}
					{/* Project1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png) center / cover'}}>Angular Project #1</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project2 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png) center / cover'}}>Angular Project #2</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project3 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://frontendlabepam.github.io/FL5/angular/assets/img/angular-js-logo.png) center / cover'}}>Angular Project #3</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				</div>	
			)
		}else if(this.state.activeTab === 2){
			return(
				<div className="projects-grid">
					{/* VueJS Projects */}
					{/* Project1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://miro.medium.com/max/1024/1*8GkPnDgp3LhsYN1Yfy60RQ.png) center / cover'}}>VueJS Project #1</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project2 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://miro.medium.com/max/1024/1*8GkPnDgp3LhsYN1Yfy60RQ.png) center / cover'}}>VueJS Project #2</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project3 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://miro.medium.com/max/1024/1*8GkPnDgp3LhsYN1Yfy60RQ.png) center / cover'}}>VueJS Project #3</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: 'black'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				</div>	
			)
		}else if(this.state.activeTab === 3){
			return(
				<div className="projects-grid">
					{/* MongoDB Projects */}
					{/* Project1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png) center / cover'}}>MongoDB Project #1</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project2 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png) center / cover'}}>MongoDB Project #2</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/* Project3 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
					<CardTitle style={{color: 'black', height:'176px', background: 'url(https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png) center / cover'}}>MongoDB Project #3</CardTitle>
					<CardText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. 
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				</div>	
			)
		}
	}

	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>VueJS</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
				</Grid>
			</div>
		)
	}
}

export default Projects;