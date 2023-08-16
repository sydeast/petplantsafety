import React from 'react';
import {  Link } from "react-router-dom";

const footer= () =>{
  return (
  <div className='footer'>
    <li>
      <Link to="/">Home</Link>
    </li>
  </div>
  );
}
export default footer;