// Importando libs do nodeJS para realizar consulta dos arquivos
var fs = require('fs')
var path = require('path')

// Variavéis que serão armazenadas os parâmetros enviados pelo usuário no terminal.
var folder = process.argv[2]
var tipo = process.argv[3]
var filtro = process.argv[4]

/* metódo assíncrono "fs.readdir" do NodeJS, criando uma função anonima,
que em caso de erro apresente o erro, ou siga na lógica.*/
fs.readdir(folder, (err, files) => {
  if(err) {
    return console.error(err)
  }
  //Apresenta a lista, uma abaixo da outra por linha.
  console.log("listagem \n")
  files.forEach((file) => {

	// instruções do terminal: node filtro.js ./ ext js (essa instrução pesquisa arquivos pela extensão escolhida)
    if(tipo == "ext" ) {
      if (path.extname(file) === '.' + filtro) {
        console.log(file)
	  }
	  /*instruções do terminal: node filtro.js ./ nome test (essa instrução pesquisa arquivos pelo nome escolhido)
	  independente da extensão*/
    }else if(tipo == "nome") {
      if (file.includes(filtro)) {
        console.log(file)
	  }
	  // Caso o usuário escreva qualquer filtro inválido, vai ser avisado.
    }else {
      console.log("Tipo de filtro inválido")
      console.log("digite 'ext', para pesquisar por extensão")
      console.log("Digite 'nome', para pesquisar por nome")
    }                                                                                        
  })                                                                                             
})