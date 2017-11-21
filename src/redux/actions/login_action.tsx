import { USER_LOGIN } from './actionTypes';

// interface ILoginValues {
//   email: string,
//   password: string
// };

export default function(values: any){
  console.log('from action', values)
  return {
    type: USER_LOGIN,
    payload: values
  }
}

