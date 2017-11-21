import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../redux/actions/login_action';

import { ILogin } from './LoginTypes';
import LoginField from './LoginComponent';

class Login extends Component<any, any> {

  handleSignIn = (values: ILogin) => {
    this.props.login(values);
  }


  render() {
    return <LoginField baby='yaw' />
  }

}

// const connectLogin: React.ComponentType<any> = connect(null, { login })(Login);

// export default reduxForm({
//   form: 'loginForms'
// })(connectLogin)


export default connect(null, { login })(Login)