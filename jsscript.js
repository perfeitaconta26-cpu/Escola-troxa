function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const content = document.getElementById("content");

    if (input === "matematica") {
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
    let text = "<h2>Matemática - Estudo Avançado</h2>";

    text += `
    <h3>Números Reais</h3>
    <p>Os números reais incluem racionais e irracionais...</p>
    <p>Os números racionais podem ser escritos como fração...</p>
    <p>Os irracionais possuem infinitas casas decimais...</p>

    <h3>Álgebra</h3>
    <p>Monômios são expressões algébricas com um único termo...</p>
    <p>Polinômios são compostos por vários termos...</p>
    <p>Produtos notáveis como (a+b)² são fundamentais...</p>
    <p>Sistemas de equações permitem encontrar valores desconhecidos...</p>

    <h3>Geometria</h3>
    <p>A congruência de triângulos ocorre quando possuem lados e ângulos iguais...</p>
    <p>Círculos possuem raio, diâmetro e circunferência...</p>
    <p>Volumes são calculados para prismas, cilindros e esferas...</p>

    <h3>Estatística</h3>
    <p>Média é a soma dividida pela quantidade...</p>
    <p>Moda é o valor que mais aparece...</p>
    <p>Mediana é o valor central...</p>

    <h3>Grandezas</h3>
    <p>Regra de três composta resolve problemas com mais de duas grandezas...</p>
    <p>Proporção compara razões equivalentes...</p>
    `;

    for (let i = 0; i < 200; i++) {
        text += "<p>A matemática desenvolve o raciocínio lógico, fortalece a capacidade de resolver problemas e é essencial para ciência, tecnologia e engenharia.</p>";
    }

    return text;
}