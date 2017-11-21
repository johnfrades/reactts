import * as React from 'react';
import { Button, Checkbox, Form, Header } from 'semantic-ui-react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

interface test {
  baby: string
}

const LoginField: React.StatelessComponent<InjectedFormProps & test> = props => {
  const { handleSubmit, baby } = props;
    return (
      <div className="ui container">
        <div style={{marginTop: "3%", width: "100%"}}>
          <Header textAlign="center">
            <h1>Login {baby}</h1>
          </Header>
          <Form onSubmit={handleSubmit}>
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
};



export default reduxForm({
  form: 'loginForm'
})(LoginField)
