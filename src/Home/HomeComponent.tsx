import React, { Component } from 'react';
import { Header, Icon, Dropdown, Input } from 'semantic-ui-react';

const options = [
  { key: 'page', text: 'Products', value: 'page' },
  { key: 'org', text: 'Services', value: 'org' },
  { key: 'site', text: 'Contracts', value: 'site' },
];

class Home extends Component<any, any> {
  render() {
    return (
      <div className="ui container">
        <Header textAlign="center">
          <h1>Markeetz</h1>
        </Header>
        <Input
          icon={<Icon name="search" link />}
          action={<Dropdown button basic floating options={options} defaultValue="page" />}
          actionPosition="left"
          placeholder="Search..."
          fluid
        />
      </div>
    );
  }
}

export default Home;
