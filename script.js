const body = document.body;
const loginBox = document.querySelector(".login-box");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const inputs = document.querySelectorAll("input");
const loginButton = document.getElementById("login-button");
const themeToggleButton = document.getElementById("theme-toggle");

function switchTheme() {
    const isDarkMode = body.classList.toggle("dark-mode");
    loginBox.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    h2.classList.toggle("dark-mode");
    
    inputs.forEach(input => {
        input.classList.toggle("dark-mode");
    });

    loginButton.classList.toggle("dark-mode");

    // Armazenar a preferência do tema no localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Carregar o tema preferido ao iniciar
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        switchTheme();
    }
}

// Evento para alternar o tema
themeToggleButton.addEventListener("change", switchTheme);

// Carregar o tema ao iniciar
loadTheme();

@media screen and (max-width:760px){
    header{
        flex-direction: column;
    }

    main{
        flex-direction: column;

    }

    h2{
        font-size: 38px;
    }

    form{
        margin: 0 auto;
        width: 100%;
        
    }

    input{
        align-self: center;
    }

    img{
        display: none;
    }

    ul{
        text-align: center;
    }
}
