function search() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const content = document.getElementById("content");

    if (input === "matematica" || input === "matemática") {
        content.innerHTML = generateMathContent();
    } 
    else if (input === "chatgpt") {
        window.location.href = "https://deepseek.com/";
    } 
    else {
        content.innerHTML = "<h2>Nenhum resultado encontrado.</h2>";
    }
}

function generateMathContent() {
    let text = "<h2>Matemática - Estudo Completo</h2>";

    for (let i = 0; i < 150; i++) {
        text += `
        <p>
        A matemática aprofunda o estudo dos números reais (racionais e irracionais),
        intensifica a álgebra com monômios, polinômios, produtos notáveis e sistemas
        de equações, além de desenvolver a geometria envolvendo congruência de
        triângulos, círculos, áreas e volumes. Também explora estatística com média,
        moda e mediana, além de grandezas e regra de três composta.
        </p>
        `;
    }

    return text;
}

function addTab() {
    const tabs = document.getElementById("tabs");

    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.innerHTML = `Nova Aba <span onclick="closeTab(event, this)">✖</span>`;
    newTab.onclick = function() { switchTab(newTab); };

    tabs.insertBefore(newTab, tabs.lastElementChild);
    switchTab(newTab);
}

function switchTab(tab) {
    const allTabs = document.querySelectorAll(".tab");
    allTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
}

function closeTab(event, span) {
    event.stopPropagation();
    const tab = span.parentElement;
    tab.remove();
}