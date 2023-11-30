import { useState } from "react"
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login({ setIsLoggedIn, setEmailProfessor }: { setIsLoggedIn: any, setEmailProfessor: any }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(e: any) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert("Login efetuado com sucesso!")
            setEmailProfessor(email)
            setIsLoggedIn(true)
            document.cookie = `login=${email}`
        }).catch((error: any) => {
            console.log(error)
            alert("Login ou senha inválidos!")
        })
    }

    return (
        <main className="flex w-screen h-screen items-center justify-center p-24 bg-blue-300">
            <div className="bg-white rounded-lg flex flex-col">
                <form className="flex flex-col min-w-[400px] p-10">
                    <h1 className="text-3xl text-center font-bold mb-8">Autenticação</h1>
                    <label className="text-lg" htmlFor="professor">Nome do Professor(a)</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="professor" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
                    <hr className="w-full my-2 border-black" />
                    <label className="text-lg" htmlFor="senha">Senha</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="senha" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
                    <button onClick={login} onSubmit={login} className="text-white bg-blue-500 w-10/12 p-2 rounded flex text-lg font-bold items-center justify-center mx-auto mt-8">Entrar</button>

                </form>

            </div>
        </main>
    )
}