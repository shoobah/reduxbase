import React from 'react'
import {MdAssessment, MdSort} from 'react-icons/lib/md'

export default class PushButton extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			active:false
		}
	}
	
	handleMouseEnter(e){
		this.setState(
			Object.assign(this.state, {
				active: !this.state.active
			})
		)
	}

	render(){
		let s = { fill:'#333' }
		if(this.state.active){
			s={fill:'#CCC'}
		}
		switch (this.props.type){
			case 'random':
				return <MdAssessment onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseEnter.bind(this)} onClick={this.props.onClick} width={40} height={40} style={s} />
			break
			case 'sort':
				return <MdSort onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseEnter.bind(this)} onClick={this.props.onClick} width={40} height={40} style={s} />
			break
			default:
				return null
		}
	}
}
