"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import  "bootstrap/dist/css/bootstrap.min.css"

export  default function LoginPage(){

    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin = async () =>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Login</h1>
            <hr />
            <div className="mb-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email:e.target.value})} />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                value={user.password} 
                onChange={(e) => setUser({...user, password:e.target.value})} />
            </div>
            <button onClick={onLogin} className="btn btn-primary">Login</button>
            <Link href="/signup">Visit Sign Up Page</Link>
        </div>
    )
}