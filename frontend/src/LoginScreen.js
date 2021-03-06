import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true,
      imageURL:''
    };
  }

  componentWillMount(){
    var loginscreen = [];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Please login or Register for new user";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
    })
  }

  handleClick(event){

      var loginmessage = [];
      if(event.target.innerText == "Logout"){


        //return;
      }

      if(this.state.isLogin){
        var loginscreen = [];
        loginscreen.push(<Register parentContext = {this}/>);
        loginmessage = "Please fill the registration details";
        this.setState({
          loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Login",
          isLogin:false
        })
      }
      else{
        var loginscreen = [];
        loginscreen.push(<Login parentContext = {this}/>);
        loginmessage = "Not registered yet. Go to registration";
        this.setState({
          loginscreen:loginscreen,
          loginmessage:loginmessage,
          buttonLabel:"Register",
          isLogin:true
        })
      }
  }

  render(){
    return(
      <div className ="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton label = {this.state.buttonLabel} primary = {true} style = {style} onClick = {(event) => this.handleClick(event)}/>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default LoginScreen;
