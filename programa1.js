function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNextLeapYears(startYear) {
    const leapYears = [];
    let year = startYear + 1;

    while (leapYears.length < 30) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
        year++;
    }
    return leapYears;
}

function calcularBisiestos() {
    const input = document.getElementById('yearInput');
    const resultDiv = document.getElementById('result');
    const year = parseInt(input.value, 10);

    if (isNaN(year)) {
        resultDiv.innerHTML = '<p style="color:red;">Por favor, ingresa un año válido.</p>';
        return;
    }

    const futurosBisiestos = getNextLeapYears(year);
    resultDiv.innerHTML = `<p>Los próximos 30 años bisiestos a partir de ${year} son:</p>
                           <p>${futurosBisiestos.join(', ')}</p>`;
}
