import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false,error:'' };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true,error:JSON.stringify(error) });
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{this.state.error}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
