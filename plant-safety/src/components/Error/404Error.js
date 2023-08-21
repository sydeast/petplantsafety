import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
} from "react-error-boundary";

export default function NotFound(props) {
  console.log(props)
  const { error, resetErrorBoundary } = props;
  return (
      <div className={"error-page"}>
          <div className={"oops"}>Oops!</div>
          <div className={"message"}>This Page does not exist.</div>
          {props.resetErrorBoundary && (
              <div>
                  <button className={"retry-button"} onClick={resetErrorBoundary}>
                      🔄 Try Again!
                  </button>
              </div>
          )}
      </div>
  );
}