import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";

function ErrorBoundaryCmp() {
  const errorHandler = (error, errorInfo) => {
    console.log("logging eerror", error, errorInfo);
  };
  return (
    <Fallback />
    // <ErrorBoundary
    //   FallbackComponent={Fallback}
    //   onError={errorHandler}
    // ></ErrorBoundary>
  );
}

export default ErrorBoundaryCmp;