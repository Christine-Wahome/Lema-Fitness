import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };

    }
    
    
    render() {
      if (this.state.hasError ) {
        // Simulate a JS error
        //throw new Error('I crashed!');
      
      return <h1>Something went wrong </h1>;
    }
    return this.props.children
  }}
  

export default ErrorBoundary









