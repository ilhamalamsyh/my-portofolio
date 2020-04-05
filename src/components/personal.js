import React, { Component } from 'react';

class Personal extends Component{
	render(){
		return(
			<div>
				<h4 style={{marginTop: '20px', color:'#b82744', fontWeight: 'bold'}}>{this.props.name} - {this.props.myJob}</h4> 
				<p style={{color: 'grey'}}>{this.props.describe}</p>
			</div>
		)
	}
}
export default Personal;