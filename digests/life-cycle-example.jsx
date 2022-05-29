import React from 'react';

class LifecycleExample extends React.Component {
 
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  componentDidMount() {
    console.log('component Did Mount')
  }
  
  componentWillUpdate() {
    console.log('component will update!')
  }
  
  componentWillUnmount() {
    console.log('component will unmount');
  }
  
  getSnapshopBeforeUpdate() {
    console.log('get snapshot before update!');
  }
  
  shouldComponentUpdate() {
    console.log('should component update');
  }
  
  render() {
    return (
      <></>
    )
  }
  
  
}

export default LifecycleExample
