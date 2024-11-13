import React, { ErrorInfo } from 'react';

import PageTitle from '@components/PageTitle/PageTitle';
import SectionTitle from '@components/SectionTitle/SectionTitle';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <PageTitle
            text="Sorry, something went wrong."
            highlightedText="Sorry,"
          ></PageTitle>
          <SectionTitle note="Try to reload the page" align="center" title="" />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
