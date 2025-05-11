import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [meg, setMeg] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      console.log(res.data.data);

      setMeg(res.data.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <span>My server message : {meg}</span>
  )
}

export default App
