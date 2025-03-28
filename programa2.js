const releaseDates = {
  "Breath of the Wild": "2017-03-03",
  "Tears of the Kingdom": "2023-05-12",
  "Ocarina of Time": "1998-11-21",
  "Twilight Princess": "2006-11-19",
};

function diffYearsDays(a, b) {
  const [earlier, later] = a < b ? [a, b] : [b, a];
  let years = later.getUTCFullYear() - earlier.getUTCFullYear();
  const anniversary = new Date(Date.UTC(
    earlier.getUTCFullYear() + years,
    earlier.getUTCMonth(),
    earlier.getUTCDate()
  ));
  if (anniversary > later) {
    years--;
    anniversary.setUTCFullYear(anniversary.getUTCFullYear() - 1);
  }
  const days = Math.floor((later.getTime() - anniversary.getTime()) / (1000 * 60 * 60 * 24));
  return { years, days };
}


function calcularDiferenciaJuegos() {
  const game1Select = document.getElementById("game1");
  const game2Select = document.getElementById("game2");
  const resultDiv = document.getElementById("result2");
  const game1 = game1Select.value;
  const game2 = game2Select.value;
  
  if (!releaseDates[game1] || !releaseDates[game2]) {
    resultDiv.innerHTML = `<p style="color:red;">El titulo no se encontro.</p>`;
    return;
  }
  
  const date1 = new Date(releaseDates[game1]);
  const date2 = new Date(releaseDates[game2]);
  const { years, days } = diffYearsDays(date1, date2);
  resultDiv.innerHTML = `<p>${years} años y ${days} días entre "<strong>${game1}</strong>" y "<strong>${game2}</strong>".</p>`;
}
