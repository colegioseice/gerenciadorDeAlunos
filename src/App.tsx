import logo_seice from "./assets/logo_seice.png"
import { Menu } from "lucide-react"

import currentAlumnPhoto from "./assets/foto_aluno.jpg"
import trequinhoPhoto from "./assets/trequinho.svg"

export default function App() {

  function saveAlumn() {
    alert("Salvo!")
  }

  return (
    <>
      <header className="flex flex-col justify-center items-start w-full min-h-[13rem] relative">
        <div className="flex justify-between items-center w-full mt-6 m-2">
          <img src={currentAlumnPhoto} alt="Foto do aluno atual" className="w-24 absolute top-8 right-12" />
          <img src={logo_seice} alt="Logo seice" className="w-48 absolute top-8 left-12" />
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <h1 className="text-2xl font-bold">SEICE - Sistema de Ensino Integrado de Campos Elíseos</h1>
            <h2 className="text-lg font-bold">Acompanhamento Infantil</h2>
            <h3 className="font-medium">Duque de Caxias, 10 de Outubro de 2023</h3>
          </div>
        </div>
        <div className="flex flex-row w-full px-14 p-4">
          <div className="flex flex-col items-start w-1/2">
            <div className="flex items-center gap-2 p-2 justify-between w-full">
              <label className="text-lg font-bold" htmlFor="nome-aluno">Aluno:</label>
              <input type="text" id="nome-aluno" className="p-1 text-lg text-black placeholder:text-black w-10/12" placeholder="Ana Cecília de Souza da Silva" />
            </div>
            <div className="flex items-center gap-2 p-2 justify-between w-full">
              <label className="text-lg font-bold" htmlFor="turma-aluno">Turma:</label>
              <input type="text" id="turma-aluno" className="p-1 text-lg text-black placeholder:text-black w-10/12" placeholder="- (2023) - PRÉ II - MANHÃ 301" />
            </div>
          </div>
          <div className="flex flex-col items-start w-1/2">
            <div className="flex items-end gap-2 p-2 justify-between w-full">
              <label className="text-lg font-bold" htmlFor="matricula-aluno">N° Matrícula:</label>
              <input type="number" min={0} id="matricula-aluno" className="p-1 text-lg text-black w-2/4 placeholder:text-black" placeholder="141386950" />
            </div>
            <div className="flex items-end gap-2 p-2 justify-between w-full">
              <label className="text-lg font-bold" htmlFor="professora-aluno">Professora:</label>
              <input type="text" id="professora-aluno" className="p-1 text-lg text-black w-2/4 placeholder:text-black" placeholder="141386950" />
            </div>

          </div>
        </div>
      </header>
      <main className="w-full my-16 space-y-16">
        <section>
          <SectionTitle>AVALIAÇÃO DOS ASPECTOS PSICOMOTORES, SOCIAIS E COMPORTAMENTAIS</SectionTitle>
          <table className="mx-auto w-1/2 border-collapse border-black border mt-10">
            <thead>
              <Th>ASPECTOS A SEREM AVALIADOS</Th>
              <Th>1B</Th>
              <Th>2B</Th>
              <Th>3B</Th>
              <Th>4B</Th>
            </thead>
            <tbody>
              <tr>
                <Th2>1- APRENDE COM FACILIDADE</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>2- DEMONSTRA INTERESSE PELAS ATIVIDADES.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>3- REALIZA AS ATIVIDADES DE AULA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>4- REALIZA AS ATIVIDADES DE CASA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>5- APRESENTA ALGUMA DIFICULDADE PARA CÓPIAS OU COORDENAÇÕES.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>6- MANEJA BEM O MATERIAL DE ARTES.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>7- PRONUNCIA PALAVRAS COM DIFICULDADES.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>8- APRESENTA ALGUM TIPO DE DIFICULDADE PARA ENXERGAR.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>9- APRESENTA ALGUMA DIFICULDADE DE AUDIÇÃO.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>10- MANIFESTA TIMIDEZ.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>11- PARTICIPA DAS BRINCADEIRAS.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>12- PARTILHA SEUS OBJETOS DE BOA VONTADE.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>13- PEDE SEMPRE AJUDA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>14- CHORA COM FREQUÊNCIA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>15- RESPEITA OS PROFESSORES.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>16- DEMONSTRA AGRESSIVIDADE.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>17- TEM COSTUME DE FALAR OU FAZER GESTOS OBSCENOS.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>18- CUIDA BEM DE SEUS MATERIAIS.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>19- MANTÉM A HIGIENE NA ESCOLA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>20- FREQUENTA ASSIDUAMENTE AS AULAS.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>21- USA O UNIFORME.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
              <tr>
                <Th2>22- CUMPRE OS HORÁRIOS DA ESCOLA.</Th2>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </tr>
            </tbody>
          </table>
          <div className="w-1/2 mx-auto font-medium text-right">Legenda: S = SIM / N = NÃO / AV = AS VEZES / NO= NÃO OBSERVADO</div>
        </section>
        <section>
          <SectionTitle>RENDIMENTO DAS AVALIAÇÕES</SectionTitle>
          <table className="mx-auto w-1/2 border-collapse border-black border mt-10">
            <thead>
              <Th>DISCIPLINAS</Th>
              <Th>1º Bimestre</Th>
              <Th>2º Bimestre</Th>
              <Th>3º Bimestre</Th>
              <Th>4º Bimestre</Th>
              <Th>Média</Th>
            </thead>
            <tbody>
              <tr>
                <Th2>Português</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Matemática</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Ciências</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Sociedade</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Ed. Artística</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Leitura</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Inglês</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Recreação</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Comportamento</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>
              <tr>
                <Th2>Faltas</Th2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
                <Td2></Td2>
              </tr>

            </tbody>
          </table>
          <div className="w-1/2 mx-auto font-medium text-right">Legenda: PM = PRECISA MELHORAR</div>
        </section>
        <section>
          <SectionTitle>RELATÓRIO DESCRITIVO</SectionTitle>
          <div className="w-9/12 mt-10 mx-auto">
            <textarea className="w-full border-black border bg-slate-100" name="relatorio-descritivo" id="relatorio-descritivo" cols={30} rows={20} 
            placeholder="Descreva aqui o seu relatório..."/>
          </div>
          <div className="flex items-center justify-between w-8/12 mx-auto">
            <div className="flex flex-col items-center justify-between w-1/3">
              <input type="text" id="assinatura-professora" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black" />
              <hr className="w-full my-2 border-black" />
              <label htmlFor="assinatura-professora">Professor</label>
            </div>
            <div className="flex flex-col items-center justify-between w-1/3">
              <input type="text" id="assinatura-coordenador" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black" />
              <hr className="w-full my-2 border-black" />
              <label htmlFor="assinatura-coordenador">Coordenador</label>
            </div>

          </div>

        </section>

      </main >
      {/* menuzinho */}
      <div className="bg-emerald-500 w-20 h-20 rounded-full fixed bottom-4 right-4 flex items-center justify-center group transition-all">
        <Menu size={40} fill="#ffffff" />
        <div className="hidden fixed bottom-4 right-4 flex-col gap-2 items-center justify-center bg-white border border-slate-500 rounded-lg w-32 h-40 group-hover:flex transition-all">
          <button className="text-white bg-emerald-500 w-10/12 p-1" onClick={saveAlumn}>Salvar</button>
          <button className="text-white bg-red-500 w-10/12 p-1" onClick={saveAlumn}>Descartar</button>
        </div>
      </div>
    </>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <img width="20" height="40" src={trequinhoPhoto} />
      <h1 className="text-xl font-medium">
        {children}
      </h1>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border px-4 py-2">{children}</th>
  )
}

function Th2({ children }: { children: React.ReactNode }) {
  return (
    <td className="border p-2">
      {children}
    </td>
  )
}

function Td({ children }: { children?: React.ReactNode }) {
  return (
    <td className="border p-2">
      <select name="" id="">
        <option value="S">S</option>
        <option value="N">N</option>
        <option value="AV">AV</option>
        <option value="NO">NO</option>
      </select>
      {children}
    </td>
  )
}

function Td2({ children }: { children?: React.ReactNode }) {
  return (
    <td className="border p-2">
      <select name="" id="">
        <option value="otimo">Ótimo</option>
        <option value="bom">Bom</option>
        <option value="regular">Regular</option>
        <option value="precisamelhorar">PM</option>
      </select>
      {children}
    </td>
  )

}