import React, { Component } from "react";
import { Button, Checkbox, Form, Header } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import login from '../redux/actions/login_action';



class Hello extends Component<any, any>{

    handleSignIn = (values) => {
        this.props.login(values);
      }


    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="ui container">
                <div style={{marginTop: "3%", width: "100%"}}>
                <Header textAlign="center">
                    <h1>Login</h1>
                </Header>
                <Form onSubmit={handleSubmit(this.handleSignIn)}>
                    <Form.Field>
                    <label>Email address</label>
                    <Field
                        name='email'
                        component='input'
                        type='text'
                        placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <Field 
                        name='password'
                        component='input'
                        type="password" 
                        placeholder='Password' />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='Keep me sign-in' />
                    </Form.Field>
                    <Button type='submit' primary>Submit</Button>
                </Form>
                </div>
            </div>
        );
    }
}



const newLocal: React.ComponentType<any> = connect(null, { login })(Hello);

export default reduxForm({
    form: 'loginForm'
})(newLocal)


