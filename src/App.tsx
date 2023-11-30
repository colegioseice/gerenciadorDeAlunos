import { useEffect, useState } from "react"
import Login from "./Login"
import Application from "./Application"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (document.cookie.includes("login")) {
      setIsLoggedIn(true)
    }
  }, [])
  const [emailProfessor, setEmailProfessor] = useState("")

  return isLoggedIn ? <Application emailProfessor={emailProfessor} /> : <Login setIsLoggedIn={setIsLoggedIn} setEmailProfessor={setEmailProfessor} />

}