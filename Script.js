//Funcion encargada de lanzar el dado
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function jugar(numeroJugadores) {
    let jugadores = [];
    for (let i = 0; i < numeroJugadores; i++) {
        jugadores.push({
            nombre: prompt(`Ingrese el nombre del jugador ${i + 1}:`),
            puntaje: 0
        });
    }

    // Ronda de juego
    for (let ronda = 1; ronda <= 3; ronda++) {
        console.log(`\nRonda ${ronda}`);
        for (let jugador of jugadores) {
            let resultado = tirarDado();
            console.log(`${jugador.nombre} sacó un ${resultado}`);
            jugador.puntaje += resultado;
        }
    }

    // Determinar el ganador
    let ganador = jugadores.reduce((mejorJugador, jugadorActual) => {
        return jugadorActual.puntaje > mejorJugador.puntaje ? jugadorActual : mejorJugador;
    });

    console.log("\nResultados finales:");
    jugadores.forEach(jugador => {
        console.log(`${jugador.nombre}: ${jugador.puntaje} puntos`);
    });
    console.log(`¡El ganador es ${ganador.nombre} con ${ganador.puntaje} puntos!`);
}

// Solicitar el número de jugadores
let numeroJugadores = parseInt(prompt("¿Cuántos jugadores son?"));
while (numeroJugadores <= 0) {
    numeroJugadores = parseInt(prompt("Ingrese un número de jugadores válido:"));
}

// Iniciar el juego
jugar(numeroJugadores);