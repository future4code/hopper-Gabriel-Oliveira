import { idText } from "typescript";

enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
  }

  type pessoa = {
    nome: string;
    salario: number;
    setor: SETOR;
    presencial: boolean;
  };

  const listaDeFuncionarios: pessoa [] = [
    { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: SETOR.MARKETING , presencial: false },
    { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETOR.MARKETING , presencial: true },
  ];


  const Mkt = (listaDeFuncionario: pessoa[]): pessoa[] =>{
    return(
        listaDeFuncionario.filter((pessoaMkt) =>{
            if(pessoaMkt.setor === SETOR.MARKETING && pessoaMkt.presencial === true){
                return listaDeFuncionario
            }
        })
    )
  }
  console.log(Mkt(listaDeFuncionarios))