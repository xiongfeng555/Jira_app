import React, { Component } from "react";
type FallbackRender = (props: { error: Error | null }) => React.ReactElement;
export default class ErrorBoudary extends Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }
  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;
    if (error) {
      return fallbackRender({ error });
    } else {
      return children;
    }
  }
}
