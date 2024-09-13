function mostrarPersonaje(personaje) {
    return `
        <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h1>${personaje.race}</h1>
                    <h1>${personaje.gender}</h1>
                </div>
                <img src="${personaje.img}" alt="${personaje.name}" />
                <div class="character-stats">
                    <ul>
                        <li>Salud: ${personaje.health}</li>
                        <li>Ataque: ${personaje.attack}</li>
                        <li>Defensa: ${personaje.defense}</li>
                        <li>Velocidad de Restauración de KI: ${personaje.kiRestoreSpeed}</li>
                    </ul>
                </div>
            </div>
        </div>`;
}

function mostrarTodos() {
    const container = document.getElementById('container');
    container.innerHTML = personajes.map(mostrarPersonaje).join('');
}

function buscarPersonaje(nombre) {
    const personaje = personajes.find(p => p.name.toLowerCase() === nombre.toLowerCase());
    const container = document.getElementById('container');
    
    if (personaje) {
        container.innerHTML = mostrarPersonaje(personaje);
    } else {
        container.innerHTML = `<p>Personaje no encontrado.</p>`;
    }
}

function filtrarPorRaza(raza) {
    const razaMin = raza.toLowerCase();
    const filtrados = personajes.filter(p => p.race.toLowerCase().includes(razaMin));
    const container = document.getElementById('container');
    
    if (filtrados.length > 0) {
        container.innerHTML = filtrados.map(mostrarPersonaje).join('');
    } else {
        container.innerHTML = `<p>No se encontraron personajes de la raza ${raza}.</p>`;
    }
}

function filtrarPorGenero(genero) {
    const generoMin = genero.toLowerCase();
    const filtrados = personajes.filter(p => p.gender.toLowerCase() === generoMin);
    const container = document.getElementById('container');
    
    if (filtrados.length > 0) {
        container.innerHTML = filtrados.map(mostrarPersonaje).join('');
    } else {
        container.innerHTML = `<p>No se encontraron personajes de género ${genero}.</p>`;
    }
}

function menorPoder() {
    const personajeMenor = personajes.reduce((prev, curr) => {
        if (prev.attack < curr.attack) {
            return prev;
        } else {
            return curr;
        }
    });
    const container = document.getElementById('container');
    container.innerHTML = mostrarPersonaje(personajeMenor);
}
function mayorPoder() {
    const personajeMayor = personajes.reduce((prev, curr) => {
        if (prev.attack > curr.attack) {
            return prev;
        } else {
            return curr;
        }
    });
    const container = document.getElementById('container');
    container.innerHTML = mostrarPersonaje(personajeMayor);
}

function posicionDeVegeta() {
    const index = personajes.findIndex(p => p.name.toLowerCase() === 'vegeta');

    if (index !== -1) {
        alert(`Vegeta está en la posición: ${index + 1}`);
    } else {
        alert('Vegeta no se encuentra en la lista de personajes.');
    }
}

function totalPoder() {
    const total = personajes.reduce((sum, p) => sum + p.attack, 0);
    alert(`Total del poder de ataque: ${total}`);
}

document.getElementById('search-characters').addEventListener('input', function (event) {
    const query = event.target.value.toLowerCase();
    const filtrados = personajes.filter(p => p.name.toLowerCase().includes(query));
    const container = document.getElementById('container');
    
    if (filtrados.length > 0) {
        container.innerHTML = filtrados.map(mostrarPersonaje).join('');
    } else {
        container.innerHTML = `<p>No se encontraron personajes con el nombre "${query}".</p>`;
    }
});