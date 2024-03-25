import { useEffect, useState } from "react";
import Login from "./Login";
import Application from "./Application";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailProfessor, setEmailProfessor] = useState("");

  useEffect(() => {
    if (document.cookie.includes("login")) {
      setIsLoggedIn(true);
    }
    if (document.cookie.includes("emailProfessor")) {
      const email = document.cookie
        .split(";")
        .filter((cookie) => cookie.includes("emailProfessor"))[0]
        .split("=")[1];
      setEmailProfessor(email);
    }
  }, []);

  return isLoggedIn ? (
    <Application emailProfessor={emailProfessor} />
  ) : (
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setEmailProfessor={setEmailProfessor}
    />
  );
}
