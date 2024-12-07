function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function iniciarJuego() {
    const numJugadores = document.getElementById('num-jugadores').value;
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    let jugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        jugadores.push({
            nombre: prompt(`Ingrese el nombre del jugador ${i + 1}:`),
            puntaje: 0
        });
    }

    // Ronda de juego
    for (let ronda = 1; ronda <= 3; ronda++) {
        const rondaDiv = document.createElement('div');
        rondaDiv.textContent = `Ronda ${ronda}`;
        resultadosDiv.appendChild(rondaDiv);

        for (let jugador of jugadores) {
            let resultado = tirarDado();
            const resultadoDiv = document.createElement('div');
            resultadoDiv.textContent = `${jugador.nombre} sacó un ${resultado}`;
            resultadosDiv.appendChild(resultadoDiv);
            jugador.puntaje += resultado;
        }
    }

    // Determinar el ganador
    let ganador = jugadores.reduce((mejorJugador, jugadorActual) => {
        return jugadorActual.puntaje > mejorJugador.puntaje ? jugadorActual : mejorJugador;
    });

    const ganadorDiv = document.createElement('div');
    ganadorDiv.textContent = `¡El ganador es ${ganador.nombre} con ${ganador.puntaje} puntos!`;
    resultadosDiv.appendChild(ganadorDiv);

    // Almacenar los jugadores en localStorage
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
}