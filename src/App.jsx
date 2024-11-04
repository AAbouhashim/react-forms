import { useState } from 'react'
import './App.css'
import Authenticate from "./components/authenticate.jsx";
import SignUpForm from "./components/signUpForm.jsx";


export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}
