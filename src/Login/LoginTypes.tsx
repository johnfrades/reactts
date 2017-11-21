import React from 'react';
export interface ILogin {
  email: string,
  password: string
}

export interface Props {
  login: Function,
  handleSubmit: React.FormEvent<HTMLElement>
}
