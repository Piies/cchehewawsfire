import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const  [email, setEmail] = useState<string>('');
  const  [password, setPassword] = useState<string>('');
  const  [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    }catch(error){
      setError(error.message)
    }
  };

    return <form onSubmit={handleSubmit}>
      {error && error}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Signup</button>
                </div>
                <div className="text-center mt-4">
                  Already have an account? <Link to="/Login" className="text-blue-500 hover:underline">Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>;
};

export default Signup;