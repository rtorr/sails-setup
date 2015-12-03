import React from 'react';
import {WelpComponent} from 'welp';
import {update_number} from './Actions'
import Store from './Store';

class Container extends WelpComponent {
  constructor(props) {
    super(props, [Store]);
    this.handleUpdateNumberChange = this.handleUpdateNumberChange.bind(this);
  }
  handleUpdateNumberChange() {
    return update_number(this.state.hello.count + 1);
  }
  render() {
    return (
      <div>
        <p>Hello world! {this.state.hello.count}</p>
        <button onClick={this.handleUpdateNumberChange}>Add + 1</button>
      </div>
    );
  }
}

export default Container;
