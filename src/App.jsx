import Landingpage from "./pages/Landingpage"
import Load from "./components/Loader"
import { useEffect, useState } from "react";


function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false)
    }, 9000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
    { load ? <Load /> : ''}
    <Landingpage />
    </>
  )
}

export default App
