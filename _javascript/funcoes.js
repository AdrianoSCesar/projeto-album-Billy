function verificar() {
    let senha = document.getElementById("inicio")
    let res = document.getElementById("res") 
    if (senha.value != "Billy") {
        window.alert("Senha incorreta! Digite a senha novamente ou feche a página!")
        res.innerHTML = ''
    } else {
        res.innerHTML = `<h1><a href="./inicio.html" target="_self">Acesse o Álbum de Billy</a></h1>`
    } 
}

function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}