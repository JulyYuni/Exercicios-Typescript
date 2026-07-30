type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: StatusRequisicao) {
  if (status === "carregando") {
    return "Aguarde... carregando dados.";
  }

  if (status === "sucesso") {
    return "Dados carregados com sucesso.";
  }

  return "Ocorreu um erro ao carregar os dados.";
}

console.log(mostrarMensagemStatus("carregando")); 
console.log(mostrarMensagemStatus("sucesso"));    
console.log(mostrarMensagemStatus("erro"));       
