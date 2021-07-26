const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pw = document.getElementById("pw").value;
    let data = {
        name,
        email,
        pw,
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById("content");


    let loading = `<p id="message">Por favor, aguarde...</p>`;
    let done = `<p id="message">Muito obrigada! Seu cadastro foi enviado com sucesso.</p>`
    let error = `<p id="message">Oops.. Todos os campos devem ser preenchidos. Recarrege a página para tentar novamente.</p>`

    content.innerHTML = loading;

    if (name == null || email == null || pw == null){
        content.innerHTML = error
    }
    else{
        setTimeout(()=>{
            content.innerHTML = done
        }, 1000)
    }
})

