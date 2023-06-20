import React from 'react'
import { useStateValue } from '../context/stateProvider';

function Saved() {

  const [{ cart }] = useStateValue();
  return (
    <main>
      <h1>Under theprocess</h1>
      {
      
      }
      <h1>Saved</h1>
    </main>
  )
}

export default Saved