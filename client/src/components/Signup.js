import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css"

function Signup() {
  const history = useNavigate();
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");
  const [email4, setEmail4] = useState("");
  const [teamName, setTeamName] = useState("");
  const [fullName1, setFullName1] = useState("");
  const [fullName2, setFullName2] = useState("");
  const [fullName3, setFullName3] = useState("");
  const [fullName4, setFullName4] = useState("");
 
  const [Img, setImg] = useState("");
 
  const [whatsappNumber1, setWhasappNumber1] = useState("");
  const [whatsappNumber2, setWhasappNumber2] = useState("");
  const [whatsappNumber3, setWhasappNumber3] = useState("");
  const [whatsappNumber4, setWhasappNumber4] = useState("");
  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
          email1,
          email2,
          email3,
          email4,
          teamName,
          fullName1,
          fullName2,
          fullName3,
          fullName4,
         whatsappNumber1,
          whatsappNumber2,
          whatsappNumber3,
          whatsappNumber4
        })

        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history.push("/home", { state: { id: teamName } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      next(e);
      console.log(e);
    }
  }

  return (
    // <div className="signup">
    //     <h1>Signup</h1>

    //     <form action="POST">
    //         <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
    //         <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

    //         <input type="submit"  onClick={submit}/>
    //     </form>
    //     <br />
   //     <p>OR</p>
    //     <br />

    //     <Link to="/login"> Login </Link>

    // </div>

    <section>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <h2 className="text-center" id="head_text">SDV</h2>
            <h4 className="text-center" id="head_text">Registration Form</h4>
            <div className="card border-0 shadow " id="reg_card">
              <div className="card-body" id="card_body">
                {/* <i className="bi bi-person-circle mx-auto"></i> */}
                <div className="text-center">
                  {" "}
                  <svg
                    className="mx-auto my-3 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </div>
                <form action="/" method="POST" encType="multipart/form-data">
                  <h4 id="text">Team Name</h4>
                  <input
                    type="text"
                    onChange={(e) => {
                      setTeamName(e.target.value);
                    }}
                    placeholder="Enter your Team Name"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  <h5 id="text">Details of Member 1</h5>
                    <input
                    type="text"
                    onChange={(e) => {
                      setFullName1(e.target.value);
                    }}
                    placeholder="Full Name of Member 1"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                   <input
                    type="email"
                    onChange={(e) => {
                      setEmail1(e.target.value);
                    }}
                    placeholder="Email of Member 1"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  <input
                    type="number"
                    onChange={(e) => {
                      setWhasappNumber1(e.target.value);
                    }}
                    placeholder="Whatsapp Number of Member 1"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  
                  <h5 id="text">Details of Member 2</h5>
                   <input
                    type="text"
                    onChange={(e) => {
                      setFullName2(e.target.value);
                    }}
                    placeholder="Full Name of Member 2"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                   <input
                    type="email"
                    onChange={(e) => {
                      setEmail2(e.target.value);
                    }}
                    placeholder="Email of Member 2"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  <input
                    type="number"
                    onChange={(e) => {
                      setWhasappNumber2(e.target.value);
                    }}
                    placeholder="Whatsapp Number of Member 2"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                 
                  <h5 id="text">Details of Member 3</h5>
                   <input
                    type="text"
                    onChange={(e) => {
                      setFullName3(e.target.value);
                    }}
                    placeholder="Full Name of Member 3"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                   <input
                    type="email"
                    onChange={(e) => {
                      setEmail3(e.target.value);
                    }}
                    placeholder="Email of Member 3"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  <input
                    type="number"
                    onChange={(e) => {
                      setWhasappNumber3(e.target.value);
                    }}
                    placeholder="Whatsapp Number of Member 3"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />

                  <h5 id="text">Details of Member 4</h5>
                   <input
                    type="text"
                    onChange={(e) => {
                      setFullName4(e.target.value);
                    }}
                    placeholder="Full Name of Member 4"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                   <input
                    type="email"
                    onChange={(e) => {
                      setEmail4(e.target.value);
                    }}
                    placeholder="Email of Member 4"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  />
                  <input
                    type="number"
                    onChange={(e) => {
                      setWhasappNumber4(e.target.value);
                    }}
                    placeholder="Whatsapp Number of Member 4"
                    name=""
                    id=""
                    className="form-control my-3 py-2"
                  /> 
                  <input
                    type="file"
                    onChange={(e) => {
                      setImg(e.target.value);
                    }}
                    placeholder="Put Your Payment ScreeenShot"
                    name="Img"
                    id=""
                    className="form-control my-3 py-2"
                  />
                   

                  
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={submit}>
                      {" "}
                      Register{" "}
                    </button>
                    <br></br>
                    {/* <Link to="/" className="nav-link">
                      {" "}
                      Login{" "}
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Signup;
