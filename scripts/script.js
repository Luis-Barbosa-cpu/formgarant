// Intercepta o envio do formulário para tratar os dados
document.getElementById('garantiaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Coletando os dados inseridos
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    
    // Exibe os dados no console do navegador (F12 -> Console)
    console.log('Dados do Formulário Submetidos:', formObject);
    
    // Alerta para o usuário
    alert('Formulário preenchido com sucesso! Verifique o console para visualizar os dados.');
    
    // Opcional: Limpar o formulário após o envio bem-sucedido
    // this.reset(); 
});