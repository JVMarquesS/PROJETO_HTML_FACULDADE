// --- MÓDULO 1: SPA E TEMPLATES (script.js) ---

document.addEventListener("DOMContentLoaded", () => {
    console.log("Módulo SPA inicializado com sucesso!");

    const conteudoPrincipal = document.querySelector("main");

    const carregarSecao = (caminho) => {
        if (!conteudoPrincipal) return;
        conteudoPrincipal.innerHTML = "<p>A carregar conteúdo...</p>";
        
        setTimeout(() => {
            conteudoPrincipal.innerHTML = `
                <section>
                    <h2>Conteúdo Dinâmico da SPA</h2>
                    <p>Página gerada programaticamente via JavaScript (${caminho}).</p>
                </section>
            `;
        }, 150);
    };

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault();
            carregarSecao(link.getAttribute("href"));
        });
    });

    const listaProjetos = [
        { titulo: "Apoio Comunitário", descricao: "Distribuição de alimentos e agasalhos." },
        { titulo: "Educação Solidária", descricao: "Reforço escolar para crianças carentes." }
    ];

    const containerProjetos = document.querySelector("#projetos-container");
    if (containerProjetos) {
        let htmlCards = "";
        listaProjetos.forEach(projeto => {
            htmlCards += `
                <div class="card">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
            `;
        });
        containerProjetos.innerHTML = htmlCards;
    }
});