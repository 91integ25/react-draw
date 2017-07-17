import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { SketchField, Tools } from "react-sketch";
const style = {
  card:{
  	textAlign:"center",
  	marginBottom:100

  }
  cardText:{
	overflow:"hidden",
	paddingLeft:100,
	paddingRight:100
}
};

export default class WelcomePage extends React.component{
	render(){
		return (
			<Card>
			
			</Card>
			<CardTitle title="Welcome!" subtitle="Draw anything"></CardTitle>
			<CardText>
				<div>text</div>
			</CardText>
			<CardActions>
				<RaisedButton label="Save" style={style} />
    			<RaisedButton label="Go to Second Page" primary={true} style={style} />
			</CardActions>


		);
		
	}
}

import React from 'react';


const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;