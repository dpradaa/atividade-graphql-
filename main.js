async function buscarPaises() {
    const query = `
        {
            countries {
                code
                name
                continent {
                    name
                }
            }
        }
    `;

    try {
        const response = await fetch("https://countries.trevorblades.com/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        const lista = document.getElementById("lista-paises");
        lista.innerHTML = "";

        data.data.countries.forEach(pais => {
            const li = document.createElement("li");
            li.textContent = `${pais.name} (${pais.code}) - Continente: ${pais.continent.name}`;
            lista.appendChild(li);
        });
    } catch (error) {
        alert("Erro ao buscar países: " + error);
    }
}