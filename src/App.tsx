import logo_seice from "./assets/logo_seice.png"
import { Download, Menu, Save, Search, Trash2 } from "lucide-react"

import currentAlumnPhoto from "./assets/foto_aluno.jpg"
import trequinhoPhoto from "./assets/trequinho.svg"
import { useState } from "react";

interface Aluno {
  nome: string;
  matricula: number;
  turma: string;
  professora: string;

  // Campos das tabelas de avaliação dos aspectos psicomotores, sociais e comportamentais
  aspectosAvaliados: {
    "1B": {
      aprendeComFacilidade: string;
      demonstraInteresseAtividades: string;
      realizaAtividadesAula: string;
      realizaAtividadesCasa: string;
      apresentaDificuldadeCoordenacao: string;
      manejaMaterialArtes: string;
      pronunciaPalavrasDificuldades: string;
      apresentaDificuldadeEnxergar: string;
      apresentaDificuldadeAudição: string;
      manifestaTimidez: string;
      participaBrincadeiras: string;
      partilhaObjetosBoaVontade: string;
      pedeSempreAjuda: string;
      choraComFrequencia: string;
      respeitaProfessores: string;
      demonstraAgressividade: string;
      fazGestosObscenos: string;
      cuidaBemMateriais: string;
      mantemHigieneEscola: string;
      frequentaAssiduamenteAulas: string;
      usaUniforme: string;
      cumpreHorariosEscola: string;
    };
    "2B": {
      aprendeComFacilidade: string;
      demonstraInteresseAtividades: string;
      realizaAtividadesAula: string;
      realizaAtividadesCasa: string;
      apresentaDificuldadeCoordenacao: string;
      manejaMaterialArtes: string;
      pronunciaPalavrasDificuldades: string;
      apresentaDificuldadeEnxergar: string;
      apresentaDificuldadeAudição: string;
      manifestaTimidez: string;
      participaBrincadeiras: string;
      partilhaObjetosBoaVontade: string;
      pedeSempreAjuda: string;
      choraComFrequencia: string;
      respeitaProfessores: string;
      demonstraAgressividade: string;
      fazGestosObscenos: string;
      cuidaBemMateriais: string;
      mantemHigieneEscola: string;
      frequentaAssiduamenteAulas: string;
      usaUniforme: string;
      cumpreHorariosEscola: string;
    };
    "3B": {
      aprendeComFacilidade: string;
      demonstraInteresseAtividades: string;
      realizaAtividadesAula: string;
      realizaAtividadesCasa: string;
      apresentaDificuldadeCoordenacao: string;
      manejaMaterialArtes: string;
      pronunciaPalavrasDificuldades: string;
      apresentaDificuldadeEnxergar: string;
      apresentaDificuldadeAudição: string;
      manifestaTimidez: string;
      participaBrincadeiras: string;
      partilhaObjetosBoaVontade: string;
      pedeSempreAjuda: string;
      choraComFrequencia: string;
      respeitaProfessores: string;
      demonstraAgressividade: string;
      fazGestosObscenos: string;
      cuidaBemMateriais: string;
      mantemHigieneEscola: string;
      frequentaAssiduamenteAulas: string;
      usaUniforme: string;
      cumpreHorariosEscola: string;
    };
    "4B": {
      aprendeComFacilidade: string;
      demonstraInteresseAtividades: string;
      realizaAtividadesAula: string;
      realizaAtividadesCasa: string;
      apresentaDificuldadeCoordenacao: string;
      manejaMaterialArtes: string;
      pronunciaPalavrasDificuldades: string;
      apresentaDificuldadeEnxergar: string;
      apresentaDificuldadeAudição: string;
      manifestaTimidez: string;
      participaBrincadeiras: string;
      partilhaObjetosBoaVontade: string;
      pedeSempreAjuda: string;
      choraComFrequencia: string;
      respeitaProfessores: string;
      demonstraAgressividade: string;
      fazGestosObscenos: string;
      cuidaBemMateriais: string;
      mantemHigieneEscola: string;
      frequentaAssiduamenteAulas: string;
      usaUniforme: string;
      cumpreHorariosEscola: string;
    };
  };

  // Campos da tabela de rendimento das avaliações
  rendimentoAvaliacoes: {
    "1B": {
      portugues: string;
      matematica: string;
      ciencias: string;
      sociedade: string;
      edArtistica: string;
      leitura: string;
      ingles: string;
      recreacao: string;
      comportamento: string;
      faltas: string;
      media: string;
    };
    "2B": {
      portugues: string;
      matematica: string;
      ciencias: string;
      sociedade: string;
      edArtistica: string;
      leitura: string;
      ingles: string;
      recreacao: string;
      comportamento: string;
      faltas: string;
      media: string;
    };
    "3B": {
      portugues: string;
      matematica: string;
      ciencias: string;
      sociedade: string;
      edArtistica: string;
      leitura: string;
      ingles: string;
      recreacao: string;
      comportamento: string;
      faltas: string;
      media: string;
    };
    "4B": {
      portugues: string;
      matematica: string;
      ciencias: string;
      sociedade: string;
      edArtistica: string;
      leitura: string;
      ingles: string;
      recreacao: string;
      comportamento: string;
      faltas: string;
      media: string;
    };
  };

  // Campo do relatório descritivo
  relatorioDescritivo: string;

  // Assinaturas
  assinaturaProfessor: string;
  assinaturaCoordenador: string;
}


export default function App() {

  const [alunoData, setAlunoData] = useState<Aluno>({
    nome: "",
    matricula: 0,
    turma: "",
    professora: "",
    aspectosAvaliados: {
      "1B": {
        aprendeComFacilidade: "",
        demonstraInteresseAtividades: "",
        realizaAtividadesAula: "",
        realizaAtividadesCasa: "",
        apresentaDificuldadeCoordenacao: "",
        manejaMaterialArtes: "",
        pronunciaPalavrasDificuldades: "",
        apresentaDificuldadeEnxergar: "",
        apresentaDificuldadeAudição: "",
        manifestaTimidez: "",
        participaBrincadeiras: "",
        partilhaObjetosBoaVontade: "",
        pedeSempreAjuda: "",
        choraComFrequencia: "",
        respeitaProfessores: "",
        demonstraAgressividade: "",
        fazGestosObscenos: "",
        cuidaBemMateriais: "",
        mantemHigieneEscola: "",
        frequentaAssiduamenteAulas: "",
        usaUniforme: "",
        cumpreHorariosEscola: ""
      },
      "2B": {
        aprendeComFacilidade: "",
        demonstraInteresseAtividades: "",
        realizaAtividadesAula: "",
        realizaAtividadesCasa: "",
        apresentaDificuldadeCoordenacao: "",
        manejaMaterialArtes: "",
        pronunciaPalavrasDificuldades: "",
        apresentaDificuldadeEnxergar: "",
        apresentaDificuldadeAudição: "",
        manifestaTimidez: "",
        participaBrincadeiras: "",
        partilhaObjetosBoaVontade: "",
        pedeSempreAjuda: "",
        choraComFrequencia: "",
        respeitaProfessores: "",
        demonstraAgressividade: "",
        fazGestosObscenos: "",
        cuidaBemMateriais: "",
        mantemHigieneEscola: "",
        frequentaAssiduamenteAulas: "",
        usaUniforme: "",
        cumpreHorariosEscola: ""
      },
      "3B": {
        aprendeComFacilidade: "",
        demonstraInteresseAtividades: "",
        realizaAtividadesAula: "",
        realizaAtividadesCasa: "",
        apresentaDificuldadeCoordenacao: "",
        manejaMaterialArtes: "",
        pronunciaPalavrasDificuldades: "",
        apresentaDificuldadeEnxergar: "",
        apresentaDificuldadeAudição: "",
        manifestaTimidez: "",
        participaBrincadeiras: "",
        partilhaObjetosBoaVontade: "",
        pedeSempreAjuda: "",
        choraComFrequencia: "",
        respeitaProfessores: "",
        demonstraAgressividade: "",
        fazGestosObscenos: "",
        cuidaBemMateriais: "",
        mantemHigieneEscola: "",
        frequentaAssiduamenteAulas: "",
        usaUniforme: "",
        cumpreHorariosEscola: ""
      },
      "4B": {
        aprendeComFacilidade: "",
        demonstraInteresseAtividades: "",
        realizaAtividadesAula: "",
        realizaAtividadesCasa: "",
        apresentaDificuldadeCoordenacao: "",
        manejaMaterialArtes: "",
        pronunciaPalavrasDificuldades: "",
        apresentaDificuldadeEnxergar: "",
        apresentaDificuldadeAudição: "",
        manifestaTimidez: "",
        participaBrincadeiras: "",
        partilhaObjetosBoaVontade: "",
        pedeSempreAjuda: "",
        choraComFrequencia: "",
        respeitaProfessores: "",
        demonstraAgressividade: "",
        fazGestosObscenos: "",
        cuidaBemMateriais: "",
        mantemHigieneEscola: "",
        frequentaAssiduamenteAulas: "",
        usaUniforme: "",
        cumpreHorariosEscola: ""
      }
    },
    rendimentoAvaliacoes: {
      "1B": {
        portugues: "",
        matematica: "",
        ciencias: "",
        sociedade: "",
        edArtistica: "",
        leitura: "",
        ingles: "",
        recreacao: "",
        comportamento: "",
        faltas: "",
        media: ""
      },
      "2B": {
        portugues: "",
        matematica: "",
        ciencias: "",
        sociedade: "",
        edArtistica: "",
        leitura: "",
        ingles: "",
        recreacao: "",
        comportamento: "",
        faltas: "",
        media: ""
      },
      "3B": {
        portugues: "",
        matematica: "",
        ciencias: "",
        sociedade: "",
        edArtistica: "",
        leitura: "",
        ingles: "",
        recreacao: "",
        comportamento: "",
        faltas: "",
        media: ""
      },
      "4B": {
        portugues: "",
        matematica: "",
        ciencias: "",
        sociedade: "",
        edArtistica: "",
        leitura: "",
        ingles: "",
        recreacao: "",
        comportamento: "",
        faltas: "",
        media: ""
      }
    },
    relatorioDescritivo: "",
    assinaturaProfessor: "",
    assinaturaCoordenador: ""
  });

  function handleInputChange(event: any) {
    const { name, value } = event.target

    setAlunoData({
      ...alunoData,
      [name]: value
    })
  }

  function getAlumn(e?: any, nome?: string) {
    //logica para obter o aluno pelo nome
  }

  function saveAlumn(e?: any, nome?: string) {
    //lógica pra salvar ou atualizar o aluno onde o nome for respectivo
    alert("Salvo!")
  }
  function deleteAlumn(e?: any, nome?: string) {
    //logica pra deletar o aluno
    alert("Deletado!")
  }
  function imprimir() {
    // Exiba uma mensagem para o usuário sobre como ajustar a escala de impressão
    alert('Antes de imprimir, verifique as configurações de escala nas opções avançadas de impressão do seu navegador. Use de preferência, a escala 70.');

    // Abra a janela de impressão
    window.print();

  }


  return (
    <>
      <header className="flex flex-col justify-center items-start w-full min-h-[13rem] relative">
        <div className="flex justify-between items-center w-full mt-6 m-2">
          <img src={currentAlumnPhoto} alt="Foto do aluno atual" className="w-24 absolute top-8 right-12 print:w-24 print:top-2 print:right-1" />
          <img src={logo_seice} alt="Logo seice" className="w-48 absolute top-[5%] left-[2%] print:w-36 print:top-2 print:left-1" />
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <h1 className="text-2xl font-bold">SEICE - Sistema de Ensino Integrado de Campos Elíseos</h1>
            <h2 className="text-lg font-bold">Acompanhamento Infantil</h2>
            <h3 className="font-medium">Duque de Caxias, 10 de Outubro de 2023</h3>
          </div>
        </div>
        <div className="flex flex-row w-full px-14 p-4">
          <div className="flex flex-col items-start w-1/2">
            <div className="flex items-center gap-8 p-2 w-full">
              <label className="text-lg font-bold" htmlFor="nome-aluno">Aluno:</label>
              <div className="w-8/12 flex items-center">
                <input type="text" id="nome-aluno" className="bg-slate-100 rounded p-1 text-lg text-black placeholder:text-black/40 w-full" placeholder="Nome do Aluno" />
                <button className="ml-2 p-2 rounded hover:bg-slate-300 transition-colors print:hidden" title="Buscar Aluno"><Search /></button>
              </div>
            </div>
            <div className="flex items-center gap-8 p-2 w-full">
              <label className="text-lg font-bold" htmlFor="turma-aluno">Turma:</label>
              <input type="text" id="turma-aluno" className="bg-slate-100 rounded p-1 text-lg text-black placeholder:text-black/40 w-8/12" placeholder="Turma" />
            </div>
          </div>
          <div className="flex flex-col items-start w-1/2">
            <div className="flex items-end gap-8 p-2 w-full">
              <label className="text-lg font-bold" htmlFor="matricula-aluno">N° Matrícula:</label>
              <input type="number" min={0} id="matricula-aluno" className="bg-slate-100 rounded p-1 text-lg text-black w-2/4 placeholder:text-black/40" placeholder="Número de matricula" />
            </div>
            <div className="flex items-end gap-12 p-2 w-full">
              <label className="text-lg font-bold" htmlFor="professora-aluno">Professora:</label>
              <input type="text" id="professora-aluno" className="bg-slate-100 rounded p-1 text-lg text-black w-2/4 placeholder:text-black/40" placeholder="Nome da professora" />
            </div>

          </div>
        </div>
      </header>
      <main className="w-full my-16 space-y-14">
        <section>
          <SectionTitle>AVALIAÇÃO DOS ASPECTOS PSICOMOTORES, SOCIAIS E COMPORTAMENTAIS</SectionTitle>
          <table className="mx-auto w-3/4 border-collapse border-black border mt-10">
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
                <Td name="aspectosAvaliados.1B.aprendeComFacilidade" id="aspectosAvaliados.1B.aprendeComFacilidade"></Td>
                <Td name="aspectosAvaliados.2B.aprendeComFacilidade" id="aspectosAvaliados.2B.aprendeComFacilidade"></Td>
                <Td name="aspectosAvaliados.3B.aprendeComFacilidade" id="aspectosAvaliados.3B.aprendeComFacilidade"></Td>
                <Td name="aspectosAvaliados.4B.aprendeComFacilidade" id="aspectosAvaliados.4B.aprendeComFacilidade"></Td>
              </tr>
              <tr>
                <Th2>2- DEMONSTRA INTERESSE PELAS ATIVIDADES.</Th2>
                <Td name="aspectosAvaliados.1B.demonstraInteressePelasAtividades" id="aspectosAvaliados.1B.demonstraInteressePelasAtividades"></Td>
                <Td name="aspectosAvaliados.2B.demonstraInteressePelasAtividades" id="aspectosAvaliados.2B.demonstraInteressePelasAtividades"></Td>
                <Td name="aspectosAvaliados.3B.demonstraInteressePelasAtividades" id="aspectosAvaliados.3B.demonstraInteressePelasAtividades"></Td>
                <Td name="aspectosAvaliados.4B.demonstraInteressePelasAtividades" id="aspectosAvaliados.4B.demonstraInteressePelasAtividades"></Td>
              </tr>
              <tr>
                <Th2>3- REALIZA AS ATIVIDADES DE AULA.</Th2>
                <Td name="aspectosAvaliados.1B.realizaAtividadesAula" id="aspectosAvaliados.1B.realizaAtividadesAula"></Td>
                <Td name="aspectosAvaliados.2B.realizaAtividadesAula" id="aspectosAvaliados.2B.realizaAtividadesAula"></Td>
                <Td name="aspectosAvaliados.3B.realizaAtividadesAula" id="aspectosAvaliados.3B.realizaAtividadesAula"></Td>
                <Td name="aspectosAvaliados.4B.realizaAtividadesAula" id="aspectosAvaliados.4B.realizaAtividadesAula"></Td>
              </tr>
              <tr>
                <Th2>4- REALIZA AS ATIVIDADES DE CASA.</Th2>
                <Td name="aspectosAvaliados.1B.realizaAtividadesCasa" id="aspectosAvaliados.1B.realizaAtividadesCasa"></Td>
                <Td name="aspectosAvaliados.2B.realizaAtividadesCasa" id="aspectosAvaliados.2B.realizaAtividadesCasa"></Td>
                <Td name="aspectosAvaliados.3B.realizaAtividadesCasa" id="aspectosAvaliados.3B.realizaAtividadesCasa"></Td>
                <Td name="aspectosAvaliados.4B.realizaAtividadesCasa" id="aspectosAvaliados.4B.realizaAtividadesCasa"></Td>
              </tr>
              <tr>
                <Th2>5- APRESENTA ALGUMA DIFICULDADE PARA CÓPIAS OU COORDENAÇÕES.</Th2>
                <Td name="aspectosAvaliados.1B.apresentaDificuldadeCoordenacao" id="aspectosAvaliados.1B.apresentaDificuldadeCoordenacao"></Td>
                <Td name="aspectosAvaliados.2B.apresentaDificuldadeCoordenacao" id="aspectosAvaliados.2B.apresentaDificuldadeCoordenacao"></Td>
                <Td name="aspectosAvaliados.3B.apresentaDificuldadeCoordenacao" id="aspectosAvaliados.3B.apresentaDificuldadeCoordenacao"></Td>
                <Td name="aspectosAvaliados.4B.apresentaDificuldadeCoordenacao" id="aspectosAvaliados.4B.apresentaDificuldadeCoordenacao"></Td>
              </tr>
              <tr>
                <Th2>6- MANEJA BEM O MATERIAL DE ARTES.</Th2>
                <Td name="aspectosAvaliados.1B.manejaMaterialArtes" id="aspectosAvaliados.1B.manejaMaterialArtes"></Td>
                <Td name="aspectosAvaliados.2B.manejaMaterialArtes" id="aspectosAvaliados.2B.manejaMaterialArtes"></Td>
                <Td name="aspectosAvaliados.3B.manejaMaterialArtes" id="aspectosAvaliados.3B.manejaMaterialArtes"></Td>
                <Td name="aspectosAvaliados.4B.manejaMaterialArtes" id="aspectosAvaliados.4B.manejaMaterialArtes"></Td>
              </tr>
              <tr>
                <Th2>7- PRONUNCIA PALAVRAS COM DIFICULDADES.</Th2>
                <Td name="aspectosAvaliados.1B.pronunciaPalavrasDificuldades" id="aspectosAvaliados.1B.pronunciaPalavrasDificuldades"></Td>
                <Td name="aspectosAvaliados.2B.pronunciaPalavrasDificuldades" id="aspectosAvaliados.2B.pronunciaPalavrasDificuldades"></Td>
                <Td name="aspectosAvaliados.3B.pronunciaPalavrasDificuldades" id="aspectosAvaliados.3B.pronunciaPalavrasDificuldades"></Td>
                <Td name="aspectosAvaliados.4B.pronunciaPalavrasDificuldades" id="aspectosAvaliados.4B.pronunciaPalavrasDificuldades"></Td>
              </tr>
              <tr>
                <Th2>8- APRESENTA ALGUM TIPO DE DIFICULDADE PARA ENXERGAR.</Th2>
                <Td name="aspectosAvaliados.1B.apresentaDificuldadeEnxergar" id="aspectosAvaliados.1B.apresentaDificuldadeEnxergar"></Td>
                <Td name="aspectosAvaliados.2B.apresentaDificuldadeEnxergar" id="aspectosAvaliados.2B.apresentaDificuldadeEnxergar"></Td>
                <Td name="aspectosAvaliados.3B.apresentaDificuldadeEnxergar" id="aspectosAvaliados.3B.apresentaDificuldadeEnxergar"></Td>
                <Td name="aspectosAvaliados.4B.apresentaDificuldadeEnxergar" id="aspectosAvaliados.4B.apresentaDificuldadeEnxergar"></Td>
              </tr>
              <tr>
                <Th2>9- APRESENTA ALGUMA DIFICULDADE DE AUDIÇÃO.</Th2>
                <Td name="aspectosAvaliados.1B.apresentaDificuldadeAudiça" id="aspectosAvaliados.1B.apresentaDificuldadeAudiça"></Td>
                <Td name="aspectosAvaliados.2B.apresentaDificuldadeAudiça" id="aspectosAvaliados.2B.apresentaDificuldadeAudiça"></Td>
                <Td name="aspectosAvaliados.3B.apresentaDificuldadeAudiça" id="aspectosAvaliados.3B.apresentaDificuldadeAudiça"></Td>
                <Td name="aspectosAvaliados.4B.apresentaDificuldadeAudiça" id="aspectosAvaliados.4B.apresentaDificuldadeAudiça"></Td>
              </tr>
              <tr>
                <Th2>10- MANIFESTA TIMIDEZ.</Th2>
                <Td name="aspectosAvaliados.1B.manifestaTimidez" id="aspectosAvaliados.1B.manifestaTimidez"></Td>
                <Td name="aspectosAvaliados.2B.manifestaTimidez" id="aspectosAvaliados.2B.manifestaTimidez"></Td>
                <Td name="aspectosAvaliados.3B.manifestaTimidez" id="aspectosAvaliados.3B.manifestaTimidez"></Td>
                <Td name="aspectosAvaliados.4B.manifestaTimidez" id="aspectosAvaliados.4B.manifestaTimidez"></Td>
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
          <div className="w-3/4 mx-auto font-medium text-right">Legenda: Não Obs. = NÃO OBSERVADO</div>
        </section>
        <section>
          <SectionTitle>RENDIMENTO DAS AVALIAÇÕES</SectionTitle>
          <table className="mx-auto w-3/4 border-collapse border-black border mt-10">
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
          <div className="w-3/4 mx-auto font-medium text-right">Legenda: P.M. = PRECISA MELHORAR</div>
        </section>
        <section>
          <SectionTitle>RELATÓRIO DESCRITIVO</SectionTitle>
          <div className="w-9/12 mt-10 mx-auto">
            <textarea className="w-full border-black border bg-slate-100" name="relatorio-descritivo" id="relatorio-descritivo" cols={30} rows={20}
              placeholder="Descreva aqui o seu relatório..." />
          </div>
          <div className="flex items-center justify-between w-8/12 mx-auto">
            <div className="flex flex-col items-center justify-between w-1/3">
              <input type="text" id="assinatura-professora" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
              <hr className="w-full my-2 border-black" />
              <label htmlFor="assinatura-professora">Professor</label>
            </div>
            <div className="flex flex-col items-center justify-between w-1/3">
              <input type="text" id="assinatura-coordenador" className="p-1 text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
              <hr className="w-full my-2 border-black" />
              <label htmlFor="assinatura-coordenador">Coordenador</label>
            </div>

          </div>

        </section>

      </main >
      {/* menuzinho */}
      <div className="bg-emerald-500 print:hidden w-20 h-20 rounded-full fixed bottom-4 right-4 flex items-center justify-center group transition-all">
        <Menu size={40} fill="#ffffff" />
        <div className="hidden fixed bottom-4 right-4 flex-col gap-2 items-center justify-center bg-white border border-slate-500 rounded-lg w-36 h-40 group-hover:flex transition-all">
          <button className="text-white bg-emerald-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={saveAlumn}><Save /> <span className="flex-1">Salvar</span></button>
          <button className="text-white bg-red-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={deleteAlumn}><Trash2 /> <span className="flex-1">Descartar</span></button>
          <button className="text-white bg-blue-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={imprimir}> <Download /> <span className="flex-1">Imprimir</span></button>
        </div>
      </div>
    </>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center text-center gap-2">
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

interface TdProps {
  children?: React.ReactNode
  name?: string
  id?: string
}

function Td({ children, name, id }: TdProps) {
  return (
    <td className="border p-2">
      <select className="p-1 border-0" name={name} id={id}>
        <option value="Não">Não</option>
        <option value="Sim">Sim</option>
        <option value="Não Observado">Não Obs.</option>
        <option value="As Vezes">As Vezes</option>
      </select>
      {children}
    </td>
  )
}

function Td2({ children, name, id }: TdProps) {
  return (
    <td className="border p-2">
      <select className="p-1 border-0" name={name} id={id}>
        <option value="Ótimo">Ótimo</option>
        <option value="Bom">Bom</option>
        <option value="Regular">Regular</option>
        <option value="Precisa Melhorar">P.M.</option>
      </select>
      {children}
    </td>
  )

}