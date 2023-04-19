function cadastrar() {
    // recupera os dados do formulário
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('dataNascimento').value;

    // valida os dados
    var erros = [];
    if (nome.length < 3) {
        erros.push("O nome deve ter pelo menos 3 caracteres");
    }
    if (senha.length < 6 || senha.length > 10) {
        erros.push("A senha deve ter entre 6 e 10 caracteres");
    }
    // aqui utilizamos o email em minúsculo para evitar duplicatas
    if (usuarios[email.toLowerCase()] != null) {
        erros.push("Já existe um usuário cadastrado com esse email");
    }
    if (cpf.length != 11) {
        erros.push("O CPF deve ter 11 dígitos");
    }
    if (!validaEmail(email)) {
        erros.push("O email informado não é válido");
    }
    if (erros.length > 0) {
        // exibe os erros para o usuário
        var divErros = document.getElementById('erros');
        divErros.innerHTML = "";
        for (var i = 0; i < erros.length; i++) {
            divErros.innerHTML += "<p style='color: red'>" + erros[i] + "</p>";
        }
        return;
    }
    // cria o novo usuário e armazena na variável global
    usuarios[email.toLowerCase()] = {
        nome: nome,
        senha: senha,
        cpf: cpf,
        email: email,
        dataNascimento: dataNascimento,
        dataCadastro: new Date()
    };
    localStorage.setItem(email.toLowerCase(), JSON.stringify(usuarios[email.toLowerCase()]));
    // exibe a mensagem
    alert("Cadastro realizado com sucesso!");
    // redireciona para a página de login
    window.location.href = "login.html";
}

// função para validar o formato do email
function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}var usuarios = {};

 function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var usuario = JSON.parse(localStorage.getItem(email.toLowerCase()));

    if (usuario != null && usuario.senha == senha) {
    // redireciona para a página de perfil
    window.location.href = "cadastro.html";
} else {
    // exibe mensagem de erro
    alert("Usuário ou senha inválidos");
}

 }
