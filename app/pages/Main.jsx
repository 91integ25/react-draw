import React from "react";
import MUIThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";


export default class Main extends React.component{
	render(){
		return (
			<MUIThemeProvider>
			{this.props.children}
			</MUIThemeProvider>
		);
		
	}
}