const projetos = [
    {
        nome: "Sensor de Presença",
        descricao: "Colete com sensor para auxiliar pessoas cegas",
        imagem: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
        link: "https://github.com/Vinicius-Hoffelder/sensor-presenca",
        linguagem: ["raspberrypi", "arduino"]
    },
    {
        nome: "Combate Cósmico",
        descricao: "Jogo desenvolvido com PyGame",
        imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        link: "https://github.com/Vinicius-Hoffelder/Combate-Cosmico",
        linguagem: "python"
    },
    {
        nome: "Sistema de Biblioteca",
        descricao: "Sistema de biblioteca feito com Java",
        imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        link: "https://github.com/Vinicius-Hoffelder/Biblio",
        linguagem: "java"
    }
];

const container = document.getElementById("projectContainer");

const icons = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    raspberrypi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
};

const nomesTecnologias = {
    arduino: "Arduino",
    raspberrypi: "Raspberry Pi"
};

function getIcon(lang) {
    return icons[lang] || icons.python;
}

function renderLangIcons(langs) {
    const lista = Array.isArray(langs) ? langs : [langs];

    return lista.map(lang => `<img src="${getIcon(lang)}" alt="${nomesTecnologias[lang] || lang}">`).join("");
}

function renderProjectImage(p) {
    if (!p.tecnologias) {
        return `<img src="${p.imagem}" alt="Imagem do projeto ${p.nome}">`;
    }

    return `
        <div class="project-tech-hero">
            ${p.tecnologias.map(tech => `
                <div class="tech-badge">
                    <img src="${getIcon(tech)}" alt="${nomesTecnologias[tech]}">
                    <span>${nomesTecnologias[tech]}</span>
                </div>
            `).join("")}
        </div>
    `;
}

projetos.forEach(p => {
    container.innerHTML += `
        <div class="card">
            ${renderProjectImage(p)}
            
            <div class="langIcon ${Array.isArray(p.linguagem) ? "multi" : ""}">
                ${renderLangIcons(p.linguagem)}
            </div>

            <h3 class="projectName">${p.nome}</h3>
            <p class="projectDesc">${p.descricao}</p>

            <div class="card-actions">
                <a href="${p.link}" target="_blank" class="button small">Ver projeto</a>
            </div>
        </div>
    `;
});
