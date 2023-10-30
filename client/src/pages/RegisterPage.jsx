import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

'use client';

import { Button, Label, TextInput } from 'flowbite-react';


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword,setRepeatPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
      try {
        await axios.post('/register', {
          name,
          email,
          password
        });
        alert('Registration successful. Now you can log in');
      } catch (e) {
        alert('Registration failed. Please try again later');
      }
  }

    return (
    // <div className="mt-4 grow flex items-center justify-around">
    //   <div className="mb-64">
    //     <h1 className="text-4xl text-center mb-4">Register</h1>
    //     <form className="max-w-md mx-auto" onSubmit={registerUser}>
    //       <input type="text" placeholder="John Doe"
    //               value={name} 
    //               onChange={ev => setName(ev.target.value)}/>
    //       <input type="email" placeholder="your@email.com" 
    //               value={email} 
    //               onChange={ev => setEmail(ev.target.value)} />
    //       <input type="password" placeholder="password" 
    //               value={password} 
    //               onChange={ev => setPassword(ev.target.value)}/>
    //       <input type="password" placeholder="password confirm" 
    //               value={password} 
    //               onChange={ev => setPassword(ev.target.value)}/>
    //       <button className="primary">Register</button>
    //       <div className="text-center py-2 text-gray-500">
    //         Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>


      <div className="mx-auto my-10 w-96">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="flex max-w-md flex-col gap-4" onSubmit={registerUser}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name2"
              value="Your name"
            />
          </div>
          <TextInput
            id="name2"
            placeholder="John Doe"
            required
            shadow
            type="name"
            value={name} 
            onChange={ev => setName(ev.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email2"
              value="Your email"
            />
          </div>
          <TextInput
            id="email2"
            placeholder="name@flowbite.com"
            required
            shadow
            type="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)} 
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password2"
              value="Your password"
            />
          </div>
          <TextInput
            id="password2"
            required
            shadow
            type="password"
            value={password} 
            onChange={ev => setPassword(ev.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="repeat-password"
              value="Repeat password"
            />
          </div>
          <TextInput
            id="repeat-password"
            required
            shadow
            type="password"
            value={repeatPassword} 
            onChange={ev => setRepeatPassword(ev.target.value)}
          />
        </div>
        <Button color="gray" type="submit" size="xl" className="mt-5 text-white bg-red-500 border border-white shadow-md shadow-gray-300">
          Register new account
        </Button>
        <div className="text-center py-2 text-gray-500">
        Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
        </div>
      </form>
    </div>
  );
}