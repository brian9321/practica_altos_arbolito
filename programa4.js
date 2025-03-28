const typeEffectiveness = {
    'Agua': {
      'Agua': 1,
      'Fuego': 2,
      'Planta': 0.5,
      'Eléctrico': 1
    },
    'Fuego': {
      'Agua': 0.5,
      'Fuego': 1,
      'Planta': 2,
      'Eléctrico': 1
    },
    'Planta': {
      'Agua': 2,
      'Fuego': 0.5,
      'Planta': 1,
      'Eléctrico': 1
    },
    'Eléctrico': {
      'Agua': 2,
      'Fuego': 1,
      'Planta': 1,
      'Eléctrico': 1
    }
  };
  
  function calcularDanio() {
    const atacante = document.getElementById("atacante").value;
    const defensor = document.getElementById("defensor").value;
    const ataque = parseInt(document.getElementById("ataque").value, 10);
    const defensa = parseInt(document.getElementById("defensa").value, 10);
    const resultDiv = document.getElementById("result4");
  
    if (isNaN(ataque) || isNaN(defensa) || ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
      resultDiv.innerHTML = `<p style="color:red;">Error: El ataque y la defensa deben ser números entre 1 y 100.</p>`;
      return;
    }

    const efectividad = typeEffectiveness[atacante][defensor];
    const damage = 50 * (ataque / defensa) * efectividad;
  
    resultDiv.innerHTML = `<p>Daño calculado: ${damage.toFixed(2)}</p>`;
  }
  