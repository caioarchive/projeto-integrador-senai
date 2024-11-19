

   const botaoMostrar = document.getElementById("buttonlogin")
    const botaoRegistrarMostrar = document.getElementById("buttonRegistrar")
    const botaoFechar = document.querySelector(".login-form .fechar-btn")
    const loginForm = document.querySelector(".login-form")
    const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")

    botaoMostrar.addEventListener("click", () => {
        document.body.classList.toggle("mostrar-login")
    })
    botaoFechar.addEventListener("click", () => botaoMostrar.click())
    
    loginSignupLink.forEach(link => {
        link.addEventListener("click", (e) =>{
            e.preventDefault();
            loginForm.classList[link.id === "signup-link" ? 'add' : 'remove']("mostrar-registrar")
        });
    });

    // Mostrar o formulário de registro ao clicar no botão de registrar
    botaoRegistrarMostrar.addEventListener("click", () => {
    loginForm.classList.add("mostrar-registrar");
    document.body.classList.add("mostrar-login"); 
});

    // Se o usuário já tiver uma conta, ele pode voltar para o login
    const voltarParaLogin = document.getElementById("login-link"); 
    voltarParaLogin.addEventListener("click", () => {
    loginForm.classList.remove("mostrar-registrar");
});