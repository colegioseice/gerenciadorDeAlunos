import { useEffect, useState } from "react"
import Login from "./Login"
import Application from "./Application"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [emailProfessor, setEmailProfessor] = useState("")

  useEffect(() => {
    if (document.cookie.includes("login")) {
      setIsLoggedIn(true)
    }
    if(document.cookie.includes("emailProfessor")) {
      console.log(document.cookie.split("=")[1].split(";")[0])
      setEmailProfessor(document.cookie.split("=")[1].split(";")[0])
    }
  }, [])

  return isLoggedIn ? <Application emailProfessor={emailProfessor} /> : <Login setIsLoggedIn={setIsLoggedIn} setEmailProfessor={setEmailProfessor} />

}