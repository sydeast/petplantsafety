import React from "react";
import { useEffect } from "react";
import SearchBar from "../SearchBar/search";
import { Link } from "react-router-dom";
import Error from "../Error/error";
import { fetchPlants } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {

  // const errorfup = () =>{
  //   fetch(`http://127.0.0.1:3000/api/plants/1`)
  //   // fetch(`https://reqres.in/api/users/34`)
  //   .then((res) => {
  //     if (res.ok) return res.json();
  //     else throw new Error("Status code error :" + res.status);
  //   })
  //   .then((data) => console.log(data))
  //   .catch((err) => 
  //   {
  //     return <Error error={err}/>
  //   });
  // }
  // const {showBoundary } = useErrorBoundary;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const loadPlants = async () => {
  //     try {
  //     await dispatch(fetchPlants());
  //     } catch (err) {
  //       showBoundary(err)
  //     }
  //   };
  //   loadPlants();
  // }, [dispatch]);

    return (
      <div className="homepage">
        <header>
          <h1>My Simple Home Page</h1>
        </header>
        <main>
          <p>Welcome to my simple React home page.</p>
          <div className='search-component'>
            <ul>
                 <Link to='/search'>Click here to Search for a specific plant</Link>
                 <br></br>
                 <Link to='/plants'>Click here to View All Plants</Link>
                 <br></br>
                 <Link to='/not-found'>Click here to nav to an error</Link>
            </ul>
            {/* <a onClick={errorfup()}> what happens </a> */}
          <ul>
            {/* <li><Link to='/search'>search</Link></li> */}
          </ul>
        </div>
        </main>
      </div>
    );
  }
  
  export default HomePage;