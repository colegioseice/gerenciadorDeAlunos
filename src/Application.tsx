import logo_seice from "./assets/logo_seice.png"
import { Download, LogOut, Menu, Save, Search, Trash2 } from "lucide-react"

import defaultAlumnPhoto from "./assets/foto_default.jpg"
import trequinhoPhoto from "./assets/trequinho.svg"
import { useEffect, useState } from "react";
import { db, collection, addDoc, getDocs, doc, deleteDoc } from './firebase';

interface Aluno {
    emailProfessor: string;
    nome: string;
    matricula: string;
    turma: string;
    professora: string;
    fotoAluno: any;

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
        },
        "media": {
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
        },
    };

    // Campo do relatório descritivo
    relatorioDescritivo: string;

    // Assinaturas
    assinaturaProfessor: string;
    assinaturaCoordenador: string;
}

export default function Application({ emailProfessor }: any) {

    const [alunos, setAlunos] = useState<Aluno[]>(JSON.parse(localStorage.getItem("alunos") || "[]") || []);
    const [alunoData, setAlunoData] = useState<Aluno>({
        emailProfessor: emailProfessor,
        nome: "",
        matricula: "",
        turma: "",
        professora: "",
        fotoAluno: null,
        aspectosAvaliados: {
            "1B": {
                aprendeComFacilidade: "-",
                demonstraInteresseAtividades: "-",
                realizaAtividadesAula: "-",
                realizaAtividadesCasa: "-",
                apresentaDificuldadeCoordenacao: "-",
                manejaMaterialArtes: "-",
                pronunciaPalavrasDificuldades: "-",
                apresentaDificuldadeEnxergar: "-",
                apresentaDificuldadeAudição: "-",
                manifestaTimidez: "-",
                participaBrincadeiras: "-",
                partilhaObjetosBoaVontade: "-",
                pedeSempreAjuda: "-",
                choraComFrequencia: "-",
                respeitaProfessores: "-",
                demonstraAgressividade: "-",
                fazGestosObscenos: "-",
                cuidaBemMateriais: "-",
                mantemHigieneEscola: "-",
                frequentaAssiduamenteAulas: "-",
                usaUniforme: "-",
                cumpreHorariosEscola: "-"
            },
            "2B": {
                aprendeComFacilidade: "-",
                demonstraInteresseAtividades: "-",
                realizaAtividadesAula: "-",
                realizaAtividadesCasa: "-",
                apresentaDificuldadeCoordenacao: "-",
                manejaMaterialArtes: "-",
                pronunciaPalavrasDificuldades: "-",
                apresentaDificuldadeEnxergar: "-",
                apresentaDificuldadeAudição: "-",
                manifestaTimidez: "-",
                participaBrincadeiras: "-",
                partilhaObjetosBoaVontade: "-",
                pedeSempreAjuda: "-",
                choraComFrequencia: "-",
                respeitaProfessores: "-",
                demonstraAgressividade: "-",
                fazGestosObscenos: "-",
                cuidaBemMateriais: "-",
                mantemHigieneEscola: "-",
                frequentaAssiduamenteAulas: "-",
                usaUniforme: "-",
                cumpreHorariosEscola: "-"
            },
            "3B": {
                aprendeComFacilidade: "-",
                demonstraInteresseAtividades: "-",
                realizaAtividadesAula: "-",
                realizaAtividadesCasa: "-",
                apresentaDificuldadeCoordenacao: "-",
                manejaMaterialArtes: "-",
                pronunciaPalavrasDificuldades: "-",
                apresentaDificuldadeEnxergar: "-",
                apresentaDificuldadeAudição: "-",
                manifestaTimidez: "-",
                participaBrincadeiras: "-",
                partilhaObjetosBoaVontade: "-",
                pedeSempreAjuda: "-",
                choraComFrequencia: "-",
                respeitaProfessores: "-",
                demonstraAgressividade: "-",
                fazGestosObscenos: "-",
                cuidaBemMateriais: "-",
                mantemHigieneEscola: "-",
                frequentaAssiduamenteAulas: "-",
                usaUniforme: "-",
                cumpreHorariosEscola: "-"
            },
            "4B": {
                aprendeComFacilidade: "-",
                demonstraInteresseAtividades: "-",
                realizaAtividadesAula: "-",
                realizaAtividadesCasa: "-",
                apresentaDificuldadeCoordenacao: "-",
                manejaMaterialArtes: "-",
                pronunciaPalavrasDificuldades: "-",
                apresentaDificuldadeEnxergar: "-",
                apresentaDificuldadeAudição: "-",
                manifestaTimidez: "-",
                participaBrincadeiras: "-",
                partilhaObjetosBoaVontade: "-",
                pedeSempreAjuda: "-",
                choraComFrequencia: "-",
                respeitaProfessores: "-",
                demonstraAgressividade: "-",
                fazGestosObscenos: "-",
                cuidaBemMateriais: "-",
                mantemHigieneEscola: "-",
                frequentaAssiduamenteAulas: "-",
                usaUniforme: "-",
                cumpreHorariosEscola: "-"
            }
        },
        rendimentoAvaliacoes: {
            "1B": {
                portugues: "-",
                matematica: "-",
                ciencias: "-",
                sociedade: "-",
                edArtistica: "-",
                leitura: "-",
                ingles: "-",
                recreacao: "-",
                comportamento: "-",
                faltas: "-",
            },
            "2B": {
                portugues: "-",
                matematica: "-",
                ciencias: "-",
                sociedade: "-",
                edArtistica: "-",
                leitura: "-",
                ingles: "-",
                recreacao: "-",
                comportamento: "-",
                faltas: "-",
            },
            "3B": {
                portugues: "-",
                matematica: "-",
                ciencias: "-",
                sociedade: "-",
                edArtistica: "-",
                leitura: "-",
                ingles: "-",
                recreacao: "-",
                comportamento: "-",
                faltas: "-",
            },
            "4B": {
                portugues: "-",
                matematica: "-",
                ciencias: "-",
                sociedade: "-",
                edArtistica: "-",
                leitura: "-",
                ingles: "-",
                recreacao: "-",
                comportamento: "-",
                faltas: "-",
            },
            "media": {
                portugues: "-",
                matematica: "-",
                ciencias: "-",
                sociedade: "-",
                edArtistica: "-",
                leitura: "-",
                ingles: "-",
                recreacao: "-",
                comportamento: "-",
                faltas: "-",
            },
        },
        relatorioDescritivo: "",
        assinaturaProfessor: "",
        assinaturaCoordenador: ""
    });
    const [nomeAluno, setNomeAluno] = useState("")
    // @ts-ignore
    const [alunoImageBlob, setAlunoImageBlob] = useState<Blob | null>(null);
    const [turmas, setTurmas] = useState<string[]>([]);

    useEffect(() => {
        async function fetchAlunos() {
            try {
                const querySnapshot = await getDocs(collection(db, 'alunos'));
                const fetchedAlunos = querySnapshot.docs
                    .map((doc) => doc.data())
                    //@ts-ignore
                    .filter((aluno: Aluno) => aluno.emailProfessor === emailProfessor); // Filtra os alunos pelo email do professor
                // @ts-ignore
                setAlunos(fetchedAlunos);
            } catch (error) {
                console.error('Erro ao buscar alunos do Firestore:', error);
            }
        }

        async function fetchTurmas() {
            try {
                const querySnapshot = await getDocs(collection(db, 'turmas'));
                const fetchedTurmas = querySnapshot.docs
                    .map((doc) => doc.data().Turma)
                // @ts-ignore
                setTurmas(fetchedTurmas);
            } catch (error) {
                console.error('Erro ao buscar turmas do Firestore:', error);
            }
        }

        fetchTurmas();
        fetchAlunos();
    }, []);

    function getAlumn(e?: any, nome?: string) {
        //logica para obter o aluno pelo nome
        e.preventDefault()
        const aluno = alunos.find((aluno) => aluno.nome.toLowerCase() === nome?.toLowerCase() || "")
        alert(aluno ? "Aluno obtido!" : "Nenhum aluno encontrado!")
        aluno && setAlunoData(aluno)
    }

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    // @ts-ignore
                    const dataURL = event.target.result;
                    // @ts-ignore
                    fetch(dataURL)
                        .then((res) => res.blob())
                        .then((blob) => {
                            setAlunoImageBlob(blob);
                            // Convert the blob to a base64-encoded string
                            const reader = new FileReader();
                            reader.onload = () => {
                                const base64Image = reader.result as string;
                                setAlunoData({
                                    ...alunoData,
                                    fotoAluno: base64Image, // Save the base64-encoded image
                                });
                            };
                            reader.readAsDataURL(blob);
                        });
                };
                reader.readAsDataURL(file);
            }
        } else alert("Nenhuma imagem selecionada!");
    }

    async function saveAlumn(e?: any) {
        e.preventDefault();

        if (nomeAluno === '') {
            alert('Nome do aluno não pode ser vazio!');
            return;
        }

        try {
            const querySnapshot = await getDocs(collection(db, 'alunos'));
            const existingAluno = querySnapshot.docs.find((doc) => doc.data().nome === nomeAluno);

            if (existingAluno) {
                alert('Já existe um aluno com esse nome!');
            } else {
                const docRef = await addDoc(collection(db, 'alunos'), alunoData);
                alert(`Aluno salvo no Firestore com ID: ${docRef.id}`);
            }
        } catch (error) {
            console.error('Erro ao salvar aluno no Firestore:', error);
            alert('Erro ao salvar aluno no Firestore!');
        }
    }



    async function deleteAlumn(e?: any) {
        e.preventDefault();
        try {
            // @ts-ignore
            await deleteDoc(doc(db, 'alunos', alunoData.id));
            alert('Aluno deletado do Firestore!');
        } catch (error) {
            console.error('Erro ao deletar aluno do Firestore:', error);
            alert('Erro ao deletar aluno do Firestore!');
        }
    }
    function imprimir() {
        // Exiba uma mensagem para o usuário sobre como ajustar a escala de impressão
        alert('Antes de imprimir, verifique as configurações de escala nas opções avançadas de impressão do seu navegador. Use de preferência, a escala 70.');

        // Abra a janela de impressão
        window.print();

    }


    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`


    return (
        <>
            <header className="flex flex-col justify-center items-start w-full min-h-[13rem] relative">
                <div className="flex justify-between items-center w-full mt-6 m-2">
                    <img src={logo_seice} alt="Logo seice" className="w-48 object-cover absolute top-[5%] left-[2%] print:w-36 print:top-2 print:left-1" />
                    <input type="file" name="fotoFile" onChange={handleFileChange} accept="image/*" id="fotoFile" className="w-24 h-32 sr-only z-20 absolute top-8 right-12" />
                    <label htmlFor="fotoFile" className="w-24 absolute top-8 right-12 print:w-24 print:top-2 print:right-1 cursor-pointer hover:opacity-75 transition-all">
                        <img
                            src={alunoData.fotoAluno || defaultAlumnPhoto}
                            alt="Foto do aluno atual"
                            className="w-full cursor-pointer hover:opacity-75 transition-all"
                            title="Mudar foto"
                        />
                    </label>
                    <div className="flex flex-col gap-2 items-center justify-center w-full">
                        <h1 className="text-2xl font-bold">SEICE - Sistema de Ensino Integrado de Campos Elíseos</h1>
                        <h2 className="text-lg font-bold">Acompanhamento Infantil</h2>
                        <h3 className="font-medium">Duque de Caxias, {formattedDate}</h3>
                    </div>
                </div>
                <div className="flex flex-row w-full px-14 p-4">
                    <div className="flex flex-col items-start w-1/2">
                        <div className="flex items-center gap-8 p-2 w-full">
                            <label className="text-lg font-bold" htmlFor="nome-aluno">Aluno:</label>
                            <div className="w-8/12 flex items-center">
                                <input type="text" list="nomesaluno" autoComplete="off" id="nome-aluno" value={nomeAluno} onChange={e => {
                                    setNomeAluno(e.target.value)
                                    setAlunoData({
                                        ...alunoData,
                                        nome: e.target.value
                                    })
                                }} className="bg-slate-100 rounded p-1 text-lg text-black placeholder:text-black/40 w-full" placeholder="Nome do Aluno" />
                                <button className="ml-2 p-2 rounded hover:bg-slate-300 transition-colors print:hidden" title="Buscar Aluno" onClick={(e) => {
                                    getAlumn(e, nomeAluno)
                                }}><Search /></button>
                                <datalist id="nomesaluno">
                                    {alunos.map((aluno, index) => (
                                        <option key={index} value={aluno.nome} />
                                    ))}
                                </datalist>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 p-2 w-full">
                            <label className="text-lg font-bold" htmlFor="turma-aluno">Turma:</label>
                            <select id="turma-aluno" value={alunoData.turma} onChange={e => setAlunoData({ ...alunoData, turma: e.target.value })} className="bg-slate-100 rounded p-1 text-lg text-black placeholder:text-black/40 w-8/12">
                                <option disabled> - </option>
                                {turmas.map((turma, index) => (
                                    <option key={index} value={turma}>{turma}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-1/2">
                        <div className="flex items-end gap-8 p-2 w-full">
                            <label className="text-lg font-bold" htmlFor="matricula-aluno">N° Matrícula:</label>
                            <input type="text" id="matricula-aluno" maxLength={7} pattern="[0-9]{7}" autoComplete="off" value={alunoData.matricula} onChange={e => setAlunoData({ ...alunoData, matricula: String(e.target.value) })} className="bg-slate-100 rounded p-1 text-lg text-black w-2/4 placeholder:text-black/40 invalid:border-2 invalid:outline-none invalid:border-red-600" placeholder="Número de matricula" />
                        </div>
                        <div className="flex items-end gap-12 p-2 w-full">
                            <label className="text-lg font-bold" htmlFor="professora-aluno">Professora:</label>
                            <input type="text" id="professora-aluno" autoComplete="off" value={alunoData.professora} onChange={e => setAlunoData({ ...alunoData, professora: e.target.value })} className="bg-slate-100 rounded p-1 text-lg text-black w-2/4 placeholder:text-black/40" placeholder="Nome da professora" />
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full my-16 space-y-14">
                <section>
                    <SectionTitle>AVALIAÇÃO DOS ASPECTOS PSICOMOTORES, SOCIAIS E COMPORTAMENTAIS</SectionTitle>
                    <table className="mx-auto w-3/4 border-collapse border-black border mt-10">
                        <thead>
                            <tr>
                                <Th>ASPECTOS A SEREM AVALIADOS</Th>
                                <Th>1B</Th>
                                <Th>2B</Th>
                                <Th>3B</Th>
                                <Th>4B</Th>
                            </tr>
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
                                <Td name="aspectosAvaliados.1B.demonstraInteresseAtividades" id="aspectosAvaliados.1B.demonstraInteresseAtividades"></Td>
                                <Td name="aspectosAvaliados.2B.demonstraInteresseAtividades" id="aspectosAvaliados.2B.demonstraInteresseAtividades"></Td>
                                <Td name="aspectosAvaliados.3B.demonstraInteresseAtividades" id="aspectosAvaliados.3B.demonstraInteresseAtividades"></Td>
                                <Td name="aspectosAvaliados.4B.demonstraInteresseAtividades" id="aspectosAvaliados.4B.demonstraInteresseAtividades"></Td>
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
                                <Td name="aspectosAvaliados.1B.apresentaDificuldadeAudição" id="aspectosAvaliados.1B.apresentaDificuldadeAudição"></Td>
                                <Td name="aspectosAvaliados.2B.apresentaDificuldadeAudição" id="aspectosAvaliados.2B.apresentaDificuldadeAudição"></Td>
                                <Td name="aspectosAvaliados.3B.apresentaDificuldadeAudição" id="aspectosAvaliados.3B.apresentaDificuldadeAudição"></Td>
                                <Td name="aspectosAvaliados.4B.apresentaDificuldadeAudição" id="aspectosAvaliados.4B.apresentaDificuldadeAudição"></Td>
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
                                <Td name="aspectosAvaliados.1B.participaBrincadeiras" id="aspectosAvaliados.1B.participaBrincadeiras"></Td>
                                <Td name="aspectosAvaliados.2B.participaBrincadeiras" id="aspectosAvaliados.2B.participaBrincadeiras"></Td>
                                <Td name="aspectosAvaliados.3B.participaBrincadeiras" id="aspectosAvaliados.3B.participaBrincadeiras"></Td>
                                <Td name="aspectosAvaliados.4B.participaBrincadeiras" id="aspectosAvaliados.4B.participaBrincadeiras"></Td>
                            </tr>
                            <tr>
                                <Th2>12- PARTILHA SEUS OBJETOS DE BOA VONTADE.</Th2>
                                <Td name="aspectosAvaliados.1B.partilhaObjetosBoaVontade" id="aspectosAvaliados.1B.partilhaObjetosBoaVontade"></Td>
                                <Td name="aspectosAvaliados.2B.partilhaObjetosBoaVontade" id="aspectosAvaliados.2B.partilhaObjetosBoaVontade"></Td>
                                <Td name="aspectosAvaliados.3B.partilhaObjetosBoaVontade" id="aspectosAvaliados.3B.partilhaObjetosBoaVontade"></Td>
                                <Td name="aspectosAvaliados.4B.partilhaObjetosBoaVontade" id="aspectosAvaliados.4B.partilhaObjetosBoaVontade"></Td>
                            </tr>
                            <tr>
                                <Th2>13- PEDE SEMPRE AJUDA.</Th2>
                                <Td name="aspectosAvaliados.1B.pedeSempreAjuda" id="aspectosAvaliados.1B.pedeSempreAjuda"></Td>
                                <Td name="aspectosAvaliados.2B.pedeSempreAjuda" id="aspectosAvaliados.2B.pedeSempreAjuda"></Td>
                                <Td name="aspectosAvaliados.3B.pedeSempreAjuda" id="aspectosAvaliados.3B.pedeSempreAjuda"></Td>
                                <Td name="aspectosAvaliados.4B.pedeSempreAjuda" id="aspectosAvaliados.4B.pedeSempreAjuda"></Td>
                            </tr>
                            <tr>
                                <Th2>14- CHORA COM FREQUÊNCIA.</Th2>
                                <Td name="aspectosAvaliados.1B.choraComFrequencia" id="aspectosAvaliados.1B.choraComFrequencia"></Td>
                                <Td name="aspectosAvaliados.2B.choraComFrequencia" id="aspectosAvaliados.2B.choraComFrequencia"></Td>
                                <Td name="aspectosAvaliados.3B.choraComFrequencia" id="aspectosAvaliados.3B.choraComFrequencia"></Td>
                                <Td name="aspectosAvaliados.4B.choraComFrequencia" id="aspectosAvaliados.4B.choraComFrequencia"></Td>
                            </tr>
                            <tr>
                                <Th2>15- RESPEITA OS PROFESSORES.</Th2>
                                <Td name="aspectosAvaliados.1B.respeitaProfessores" id="aspectosAvaliados.1B.respeitaProfessores"></Td>
                                <Td name="aspectosAvaliados.2B.respeitaProfessores" id="aspectosAvaliados.2B.respeitaProfessores"></Td>
                                <Td name="aspectosAvaliados.3B.respeitaProfessores" id="aspectosAvaliados.3B.respeitaProfessores"></Td>
                                <Td name="aspectosAvaliados.4B.respeitaProfessores" id="aspectosAvaliados.4B.respeitaProfessores"></Td>
                            </tr>
                            <tr>
                                <Th2>16- DEMONSTRA AGRESSIVIDADE.</Th2>
                                <Td name="aspectosAvaliados.1B.demonstraAgressividade" id="aspectosAvaliados.1B.demonstraAgressividade"></Td>
                                <Td name="aspectosAvaliados.2B.demonstraAgressividade" id="aspectosAvaliados.2B.demonstraAgressividade"></Td>
                                <Td name="aspectosAvaliados.3B.demonstraAgressividade" id="aspectosAvaliados.3B.demonstraAgressividade"></Td>
                                <Td name="aspectosAvaliados.4B.demonstraAgressividade" id="aspectosAvaliados.4B.demonstraAgressividade"></Td>
                            </tr>
                            <tr>
                                <Th2>17- TEM COSTUME DE FALAR OU FAZER GESTOS OBSCENOS.</Th2>
                                <Td name="aspectosAvaliados.1B.fazGestosObscenos" id="aspectosAvaliados.1B.fazGestosObscenos"></Td>
                                <Td name="aspectosAvaliados.2B.fazGestosObscenos" id="aspectosAvaliados.2B.fazGestosObscenos"></Td>
                                <Td name="aspectosAvaliados.3B.fazGestosObscenos" id="aspectosAvaliados.3B.fazGestosObscenos"></Td>
                                <Td name="aspectosAvaliados.4B.fazGestosObscenos" id="aspectosAvaliados.4B.fazGestosObscenos"></Td>
                            </tr>
                            <tr>
                                <Th2>18- CUIDA BEM DE SEUS MATERIAIS.</Th2>
                                <Td name="aspectosAvaliados.1B.cuidaBemMateriais" id="aspectosAvaliados.1B.cuidaBemMateriais"></Td>
                                <Td name="aspectosAvaliados.2B.cuidaBemMateriais" id="aspectosAvaliados.2B.cuidaBemMateriais"></Td>
                                <Td name="aspectosAvaliados.3B.cuidaBemMateriais" id="aspectosAvaliados.3B.cuidaBemMateriais"></Td>
                                <Td name="aspectosAvaliados.4B.cuidaBemMateriais" id="aspectosAvaliados.4B.cuidaBemMateriais"></Td>
                            </tr>
                            <tr>
                                <Th2>19- MANTÉM A HIGIENE NA ESCOLA.</Th2>
                                <Td name="aspectosAvaliados.1B.mantemHigieneEscola" id="aspectosAvaliados.1B.mantemHigieneEscola"></Td>
                                <Td name="aspectosAvaliados.2B.mantemHigieneEscola" id="aspectosAvaliados.2B.mantemHigieneEscola"></Td>
                                <Td name="aspectosAvaliados.3B.mantemHigieneEscola" id="aspectosAvaliados.3B.mantemHigieneEscola"></Td>
                                <Td name="aspectosAvaliados.4B.mantemHigieneEscola" id="aspectosAvaliados.4B.mantemHigieneEscola"></Td>
                            </tr>
                            <tr>
                                <Th2>20- FREQUENTA ASSIDUAMENTE AS AULAS.</Th2>
                                <Td name="aspectosAvaliados.1B.frequentaAssiduamenteAulas" id="aspectosAvaliados.1B.frequentaAssiduamenteAulas"></Td>
                                <Td name="aspectosAvaliados.2B.frequentaAssiduamenteAulas" id="aspectosAvaliados.2B.frequentaAssiduamenteAulas"></Td>
                                <Td name="aspectosAvaliados.3B.frequentaAssiduamenteAulas" id="aspectosAvaliados.3B.frequentaAssiduamenteAulas"></Td>
                                <Td name="aspectosAvaliados.4B.frequentaAssiduamenteAulas" id="aspectosAvaliados.4B.frequentaAssiduamenteAulas"></Td>
                            </tr>
                            <tr>
                                <Th2>21- USA O UNIFORME.</Th2>
                                <Td name="aspectosAvaliados.1B.usaUniforme" id="aspectosAvaliados.1B.usaUniforme"></Td>
                                <Td name="aspectosAvaliados.2B.usaUniforme" id="aspectosAvaliados.2B.usaUniforme"></Td>
                                <Td name="aspectosAvaliados.3B.usaUniforme" id="aspectosAvaliados.3B.usaUniforme"></Td>
                                <Td name="aspectosAvaliados.4B.usaUniforme" id="aspectosAvaliados.4B.usaUniforme"></Td>
                            </tr>
                            <tr>
                                <Th2>22- CUMPRE OS HORÁRIOS DA ESCOLA.</Th2>
                                <Td name="aspectosAvaliados.1B.cumpreHorariosEscola" id="aspectosAvaliados.1B.cumpreHorariosEscola"></Td>
                                <Td name="aspectosAvaliados.2B.cumpreHorariosEscola" id="aspectosAvaliados.2B.cumpreHorariosEscola"></Td>
                                <Td name="aspectosAvaliados.3B.cumpreHorariosEscola" id="aspectosAvaliados.3B.cumpreHorariosEscola"></Td>
                                <Td name="aspectosAvaliados.4B.cumpreHorariosEscola" id="aspectosAvaliados.4B.cumpreHorariosEscola"></Td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="w-3/4 mx-auto font-medium text-right">Legenda: Não Obs. = NÃO OBSERVADO</div>
                </section>
                <section>
                    <SectionTitle>RENDIMENTO DAS AVALIAÇÕES</SectionTitle>
                    <table className="mx-auto w-3/4 border-collapse border-black border mt-10">
                        <thead>
                            <tr>
                                <Th>DISCIPLINAS</Th>
                                <Th>1º Bimestre</Th>
                                <Th>2º Bimestre</Th>
                                <Th>3º Bimestre</Th>
                                <Th>4º Bimestre</Th>
                                <Th>Média</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Th2>Português</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.portugues" id="rendimentoAvaliacoes.1B.portugues"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.portugues" id="rendimentoAvaliacoes.2B.portugues"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.portugues" id="rendimentoAvaliacoes.3B.portugues"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.portugues" id="rendimentoAvaliacoes.4B.portugues"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.portugues" id="rendimentoAvaliacoes.media.portugues"></Td2>
                            </tr>
                            <tr>
                                <Th2>Matemática</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.matematica" id="rendimentoAvaliacoes.1B.matematica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.matematica" id="rendimentoAvaliacoes.2B.matematica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.matematica" id="rendimentoAvaliacoes.3B.matematica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.matematica" id="rendimentoAvaliacoes.4B.matematica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.matematica" id="rendimentoAvaliacoes.media.matematica"></Td2>
                            </tr>
                            <tr>
                                <Th2>Ciências</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.ciencias" id="rendimentoAvaliacoes.1B.ciencias"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.ciencias" id="rendimentoAvaliacoes.2B.ciencias"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.ciencias" id="rendimentoAvaliacoes.3B.ciencias"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.ciencias" id="rendimentoAvaliacoes.4B.ciencias"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.ciencias" id="rendimentoAvaliacoes.media.ciencias"></Td2>
                            </tr>
                            <tr>
                                <Th2>Sociedade</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.sociedade" id="rendimentoAvaliacoes.1B.sociedade"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.sociedade" id="rendimentoAvaliacoes.2B.sociedade"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.sociedade" id="rendimentoAvaliacoes.3B.sociedade"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.sociedade" id="rendimentoAvaliacoes.4B.sociedade"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.sociedade" id="rendimentoAvaliacoes.media.sociedade"></Td2>
                            </tr>
                            <tr>
                                <Th2>Ed. Artística</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.edArtistica" id="rendimentoAvaliacoes.1B.edArtistica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.edArtistica" id="rendimentoAvaliacoes.2B.edArtistica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.edArtistica" id="rendimentoAvaliacoes.3B.edArtistica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.edArtistica" id="rendimentoAvaliacoes.4B.edArtistica"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.edArtistica" id="rendimentoAvaliacoes.media.edArtistica"></Td2>
                            </tr>
                            <tr>
                                <Th2>Leitura</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.leitura" id="rendimentoAvaliacoes.1B.leitura"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.leitura" id="rendimentoAvaliacoes.2B.leitura"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.leitura" id="rendimentoAvaliacoes.3B.leitura"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.leitura" id="rendimentoAvaliacoes.4B.leitura"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.leitura" id="rendimentoAvaliacoes.media.leitura"></Td2>
                            </tr>
                            <tr>
                                <Th2>Inglês</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.ingles" id="rendimentoAvaliacoes.1B.ingles"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.ingles" id="rendimentoAvaliacoes.2B.ingles"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.ingles" id="rendimentoAvaliacoes.3B.ingles"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.ingles" id="rendimentoAvaliacoes.4B.ingles"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.ingles" id="rendimentoAvaliacoes.media.ingles"></Td2>
                            </tr>
                            <tr>
                                <Th2>Recreação</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.recreacao" id="rendimentoAvaliacoes.1B.recreacao"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.recreacao" id="rendimentoAvaliacoes.2B.recreacao"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.recreacao" id="rendimentoAvaliacoes.3B.recreacao"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.recreacao" id="rendimentoAvaliacoes.4B.recreacao"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.recreacao" id="rendimentoAvaliacoes.media.recreacao"></Td2>
                            </tr>
                            <tr>
                                <Th2>Comportamento</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.comportamento" id="rendimentoAvaliacoes.1B.comportamento"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.comportamento" id="rendimentoAvaliacoes.2B.comportamento"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.comportamento" id="rendimentoAvaliacoes.3B.comportamento"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.comportamento" id="rendimentoAvaliacoes.4B.comportamento"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.comportamento" id="rendimentoAvaliacoes.media.comportamento"></Td2>
                            </tr>
                            <tr>
                                <Th2>Faltas</Th2>
                                <Td2 name="rendimentoAvaliacoes.1B.faltas" id="rendimentoAvaliacoes.1B.faltas"></Td2>
                                <Td2 name="rendimentoAvaliacoes.2B.faltas" id="rendimentoAvaliacoes.2B.faltas"></Td2>
                                <Td2 name="rendimentoAvaliacoes.3B.faltas" id="rendimentoAvaliacoes.3B.faltas"></Td2>
                                <Td2 name="rendimentoAvaliacoes.4B.faltas" id="rendimentoAvaliacoes.4B.faltas"></Td2>
                                <Td2 name="rendimentoAvaliacoes.media.faltas" id="rendimentoAvaliacoes.media.faltas"></Td2>
                            </tr>

                        </tbody>
                    </table>
                    <div className="w-3/4 mx-auto font-medium text-right">Legenda: P.M. = PRECISA MELHORAR</div>
                </section>
                <section>
                    <SectionTitle>RELATÓRIO DESCRITIVO</SectionTitle>
                    <div className="w-9/12 mt-10 mx-auto">
                        <textarea className="w-full border-black border bg-slate-100 p-2" value={alunoData.relatorioDescritivo} onChange={(e) => setAlunoData({ ...alunoData, relatorioDescritivo: String(e.target.value) })} name="relatorio-descritivo" id="relatorio-descritivo" cols={30} rows={20}
                            placeholder="Descreva aqui o seu relatório..." />
                    </div>
                    <div className="flex items-center justify-between w-8/12 mx-auto">
                        <div className="flex flex-col items-center justify-between w-1/3">
                            <input type="text" id="assinatura-professora" value={alunoData.assinaturaProfessor} onChange={(e) => setAlunoData({ ...alunoData, assinaturaProfessor: e.target.value })} className="p-1 text-center text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
                            <hr className="w-full my-2 border-black" />
                            <label htmlFor="assinatura-professora">Professor</label>
                        </div>
                        <div className="flex flex-col items-center justify-between w-1/3">
                            <input type="text" id="assinatura-coordenador" value={alunoData.assinaturaCoordenador} onChange={(e) => setAlunoData({ ...alunoData, assinaturaCoordenador: e.target.value })} className="p-1 text-center text-lg text-black bg-slate-100 w-full placeholder:text-black/40" />
                            <hr className="w-full my-2 border-black" />
                            <label htmlFor="assinatura-coordenador">Coordenador</label>
                        </div>
                    </div>
                </section>
            </main >
            {/* menuzinho */}
            <div className="bg-emerald-500 print:hidden w-20 h-20 rounded-full fixed bottom-4 right-4 flex items-center justify-center group transition-all">
                <Menu size={40} fill="#ffffff" />
                <div className="hidden fixed bottom-4 right-4 flex-col gap-2 items-center justify-center bg-white border border-slate-500 rounded-lg w-36 h-auto py-4 group-hover:flex transition-all">
                    <button className="text-white bg-emerald-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={saveAlumn}><Save /> <span className="flex-1">Salvar</span></button>
                    <button className="text-white bg-red-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={deleteAlumn}><Trash2 /> <span className="flex-1">Deletar</span></button>
                    <button className="text-white bg-blue-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={imprimir}> <Download /> <span className="flex-1">Imprimir</span></button>
                    <button className="text-white bg-red-500 w-10/12 p-1 rounded flex items-center justify-between" onClick={imprimir}> <LogOut /> <span className="flex-1">Sair</span></button>
                </div>
            </div>
        </>
    )

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

    function Td({ children, name = '', id = '' }: TdProps) {
        const newName = name?.split('.')
        const bimestre = newName?.[1]
        const tipo = newName?.[2]

        return (
            <td className="border p-2">
                {/* @ts-ignore */}
                <select className="p-1 border-0" name={name} id={id} value={alunoData.aspectosAvaliados[bimestre][tipo]} onChange={e => {
                    setAlunoData({
                        ...alunoData,
                        aspectosAvaliados: {
                            ...alunoData.aspectosAvaliados,
                            [bimestre]: {
                                // @ts-ignore
                                ...alunoData.aspectosAvaliados[bimestre],
                                [tipo]: e.target.value
                            }
                        }
                    })
                }}>
                    <option disabled> - </option>
                    <option value="Não Observado">Não Obs.</option>
                    <option value="Não">Não</option>
                    <option value="Sim">Sim</option>
                    <option value="As Vezes">As Vezes</option>
                </select>
                {children}
            </td>
        )
    }
    function Td2({ children, name = '', id = '' }: TdProps) {
        const newName = name?.split('.')
        const bimestre = newName?.[1]
        const tipo = newName?.[2]

        return (
            <td className="border p-2">
                {/* @ts-ignore */}
                <select className="p-1 border-0" name={name} id={id} value={alunoData.rendimentoAvaliacoes[bimestre][tipo]} onChange={e => {
                    setAlunoData({
                        ...alunoData,
                        rendimentoAvaliacoes: {
                            ...alunoData.rendimentoAvaliacoes,
                            [bimestre]: {
                                // @ts-ignore
                                ...alunoData.rendimentoAvaliacoes[bimestre],
                                [tipo]: e.target.value
                            }
                        }
                    })
                }}>
                    <option disabled> - </option>
                    <option value="Bom">Bom</option>
                    <option value="Ótimo">Ótimo</option>
                    <option value="Regular">Regular</option>
                    <option value="Precisa Melhorar">P.M.</option>
                </select>
                {children}
            </td>
        )

    }
}