import React from "react";
import {useLocation, useNavigate} from "react-router-dom" 
 


function Home () {
    const location=useLocation()


    return (
        <>
       
         <div className="jumbotron text-center">
  <h1 className="display-3">Thank You Team {location.state.id} </h1>
  <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
  <hr />
  <p>
    Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
  </p>
  <p className="lead">
    <a className="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to SDV website For more info</a>
  </p>
</div>
        </>
    )
}

export default Home;