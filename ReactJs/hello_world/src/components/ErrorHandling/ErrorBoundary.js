import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();            
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("logging error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong...!</h1>
          <button class="btn btn-danger">Go back </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;