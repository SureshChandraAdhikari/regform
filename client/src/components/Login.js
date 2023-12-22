import React,{useEffect,useState} from "react";
import axios from "axios"
import { useNavigate,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Login ()  {

    const history=useNavigate();
     
       const[email,setEmail]=useState('')
       const[password,setPassword]=useState('')
       const [fullName, setFullName] = useState("");
       const [year, setYear] = useState("");
       const [rollNumber, setRollNumber] = useState("");
       const [whatsappNumber, setWhasappNumber] = useState("");


       async function submit(e){
         e.preventDefault();

         try{
           await axios.post("http://localhost:8000/login",{email,password})

           .then(res=>{
            if(res.data=="exist"){
             history("/home", { state: { id: fullName } });
            }
            else if(res.data=="notexist"){
                alert("User have not sign up")
            }
           })
           .catch(e=>{
            alert("wrong details")
            console.log(e);
           })

         }
         catch(e){
                   console.log(e);
         }
       }




    return (
        // <div className="login">
        //     <h1>Login</h1>

        //         <form action="POST">
        //         <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
        //         <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

        //         <input type="submit"  onClick={submit}/>
        //     </form>
        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <input type="submit"  onClick={submit}/>

        // </div>
   
   <section>
    <div className="container mt-7 pt-5">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
                <div className="card border-0 shadow">
                    <div className="card-body">
                    {/* <i className="bi bi-person-circle mx-auto"></i> */}
                   <div className="text-center"> <svg  className="mx-auto my-3 " xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></div>
                   
                    <form action="POST">
                 <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""  className="form-control my-3 py-2"/>
                 <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" className="form-control my-3 py-2" />
                  <div className="text-center"> 
                  <button className="btn btn-primary" onClick={submit}> Login </button>
                  <Link to="/signup" className="nav-link"> Signup </Link>
                  </div>
                
             </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



   </section>
   
   
   
        )
}
export default Login