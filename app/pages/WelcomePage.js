import React from "react";
import { Link } from "react-router";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from "material-ui/RaisedButton";
import { SketchField, Tools } from "react-sketch";
import Gallery from "./components/Gallery";
const style = {
  card:{
  	textAlign:"center",
  	marginBottom:100

  },
  cardText:{
	overflow:"hidden",
	paddingLeft:100,
	paddingRight:100
}
};

export default class WelcomePage extends React.Component{
	constructor(){
		super();

		this.state = {
			drawings:[]
		}
	}
	renderSketchField(){
		return (
			<SketchField
				name="sketch"
				className="canvas-area"
				ref={(c)=> this._sketch = c}
				width="100%"
				height="400px"
				tool={Tools.pencil}
				color="black"
				lineWidth={3}
			/>

		)
	}

	save = () => {
		let drawings = this.state.drawings;
		drawings.push(this._sketch.toDataURL());
		this.setState({drawings:drawings});
	}

	clear = () => {
		this._sketch.clear();
		this._sketch.setBackgroundFromDataUrl('');
	}
	render(){
		return (
			<div>
				<Card style={style.card}>
					<CardTitle title="Welcome!" subtitle="Draw anything"></CardTitle>
					<CardText style={style.cardText}>
						<div style={{borderStyle:"dotted"}}>
							{this.renderSketchField()}
						</div>
					</CardText>
					<CardActions>
						<RaisedButton label="Save" onClick={this.save} />
		    			<RaisedButton label="Clear" onClick={this.clear} />
		    			<Link to="SecondPage">
		    				<RaisedButton label="Go to Second Page" primary={true}  />
						</Link>
					</CardActions>
				</Card>
				<Gallery drawings={this.state.drawings} />
			</div>


		);
		
	}
}

