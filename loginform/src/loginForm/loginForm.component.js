import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        username:"",
        password:"",
        loginSuccess: false,
        emailValid: true,
        passValid: true
        }
    }

    validate(val, type, regex){
        switch(type)
        {
            case ('email'):
                let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return val.match(emailRegex)?true:false
                break;
            case ('pass'):
                let passRegex = /^([A-Z]+)(?=.*\d)(?=.*[a-z]).{6,20}$/
                return val.match(passRegex)?true:false
                break;
        }
    }

    changeInp(e, type, regex){
    let isValid = this.validate(e.target.value, type, regex)
    // console.log(isValid)
    if(!isValid){
        if(type==='email')
        this.setState({emailValid: false})
        if(type==='pass')
        this.setState({passValid: false})
    }
    else{
        if(type==='email')
        this.setState({emailValid: true})
        if(type==='pass')
        this.setState({passValid: true})
    }
    if(type === 'email')
        this.setState({username: e.target.value})
    if(type === 'pass')
        this.setState({password: e.target.value})
    }

    submitForm(e){
        e.preventDefault();
        console.log(this.state.username, this.state.password)
        this.props.history.push('home')
    }

    Toggle(){
        var x = document.getElementById("idPass")
        if(x.type === 'password'){
            x.type = 'text'
        }
        else{
            x.type = 'password'
        }
    }

    render(){
        let {username,password} = this.state;
        return (
        <div className="App flex-container">
            <h1>Welcome! Sign in</h1>
            <form onSubmit={(e)=>this.submitForm(e)}>
            <div>
                <label>Username </label>
                <input type="text" value={username} placeholder="abc@xyz.com" required onChange = {(e)=>this.changeInp(e, 'email')}/>
            </div>
            {!this.state.emailValid && <div style={{color:"red", padding:"5px", display:"inline-block"}}>Email not valid </div>}
            <div>
                <label>Password </label>
                <input type="password" id="idPass" value={password} required placeholder="password" onChange = {(e)=>this.changeInp(e, 'pass')} /> 
                <input type="checkbox" onClick={this.Toggle}/><b>Show Password</b> 
    
                {!this.state.passValid && <div style={{color:"red", padding:"5px"}}>Password not valid </div>}
            </div>
            <div>
                <button id="submitbtn" type="submit">Login</button>
            </div>
            </form>
        </div>
        );
    }
}

export default LoginForm;
