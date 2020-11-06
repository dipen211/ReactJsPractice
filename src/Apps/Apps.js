import React, {Component} from 'react';
import UserInput from './UserInput/Userinput';
import UserOutput from'./UserOutput/Useroutput';

class Apps extends Component{
    state ={
        username:'superDipen'
      }

      userNameChangeHandler = (event) => {
          this.setState({username: event.target.value})
      }

    render(){
        return(
            <div className="App">
            <UserInput 
            changed={this.userNameChangeHandler}
            currentName={this.state.username}/>
            <UserOutput userName={this.state.username}/>
            <UserOutput userName={this.state.username}/>
            <UserOutput userName="Dipen"/>
                        
        </div>
        );
    }
}
export default Apps;