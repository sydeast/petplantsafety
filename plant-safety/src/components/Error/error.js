import React from 'react';
import { Link } from 'react-router-dom';


class Error extends React.Component{
    render(){
        return <div className='errorpage'>
            <p style={{textAlign:"center"}}>
                Oops sorry we cannot do that at this time.
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default Error;