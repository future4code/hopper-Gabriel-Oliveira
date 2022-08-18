enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


type dadosFilme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}


 const filme = (nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number) => {
    if(pontuacao){
        const filmes ={

            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
        return filmes
    } else{
        const filmes ={

            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            
        }
        return filmes

    }
 }
 console.log(filme("Thor", 2022, GENERO.ACAO, 87 ))