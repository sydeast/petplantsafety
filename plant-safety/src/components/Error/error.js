import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import {
  ErrorBoundary,
  FallbackProps,
  useErrorBoundary,
} from "react-error-boundary";


// function Error({ error }){
//   // const error = useRouteError();
//   console.error(error);
 
// //Generic Error
//     return <div className='errorpage'>
//         <p style={{textAlign:"center"}}>
//             Oops sorry we cannot do that at this time.
//             <br></br>
//           <Link to="/">Go to Home </Link>
//         </p>
//       </div>;

// }
// export default Error;

export default function Error(props) {
  console.log(props)
  const { error, resetErrorBoundary } = props;
  console.log(props.error)
  return (
      <div className={"error-page"}>
          <div className={"oops"}>Oops!</div>
          <div className={"message"}>Something went wrong...</div>
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