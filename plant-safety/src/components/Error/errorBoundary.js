import React from "react";
import Error from "./error";
  
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error: error };
    }
  
    componentDidCatch(error, info) {
      console.error("Error caught by ErrorBoundary:", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <Error error={this.state.error} />;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary