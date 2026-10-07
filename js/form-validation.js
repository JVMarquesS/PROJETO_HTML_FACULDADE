// --- MÓDULO 2: VALIDAÇÃO E LOCALSTORAGE (form-validation.js) ---

document.addEventListener("DOMContentLoaded", () => {
    console.log("Módulo de Validação e Storage inicializado!");

    const dadosSalvos = localStorage.getItem("historicoCadastro");
    if (dadosSalvos) {
        try {
            const objetoRestaurado = JSON.parse(dadosSalvos);
            console.log("Dados restaurados:", objetoRestaurado);
        } catch (erro) {
            console.error("Erro ao ler localStorage:", erro);
        }
    }

    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            
            const campoNome = document.querySelector("#nome");
            if (campoNome && campoNome.value.trim() === "") {
                alert("Atenção: Preencha o campo de nome corretamente.");
                campoNome.classList.add("input-erro");
                return;
            }

            if (campoNome) {
                campoNome.classList.remove("input-erro");
            }

            const dadosCadastro = {
                nome: campoNome ? campoNome.value.trim() : "Utilizador",
                status: "Concluído",
                dataRegistro: new Date().toISOString()
            };

            localStorage.setItem("historicoCadastro", JSON.stringify(dadosCadastro));
            alert("Ação realizada com sucesso! Dados guardados no localStorage.");
            formulario.reset();
        });
    }
});