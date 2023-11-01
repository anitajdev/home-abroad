import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from "../components/UserContext";

'use client';
import { Button, Label, TextInput } from 'flowbite-react';

const LoginPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('/login', {email, password});
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }

  }

  if(redirect) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="mx-auto my-10 w-96">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleLoginSubmit}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="name@gmail.com"
            required
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button color="gray" type="submit" className="mt-5 text-white bg-red-500 border border-white shadow-md shadow-gray-300">
          Login
        </Button>
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet? <Link className="underline text-black" to={"/register"}>Register now</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage