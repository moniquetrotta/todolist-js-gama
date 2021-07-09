const livros = require('./database')
console.log(livros)

//pegar o input

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//se sim, mostrar categorias disponiveis, pergunta qual categoria escolhe
//se nao, mostra todos os livros em ordem crescente pela quantidade de paginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:')
  console.log('/deContos','/contos','/contosx')

  const entradaCategoria = readline.question('Qual categoria você escolhe?')
  const retorno = livros.filter(livros => livros.categoria === entradaCategoria)
  console.table(retorno)

} else {
 const livrosOrdenados = livros.sort((a,b) => b.id - a.id)
  console.log('Esses são todos os livros disponíveis:')
  console.table(livrosOrdenados)
}