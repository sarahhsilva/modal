const btnConverter = document.getElementById('btnConverter');

btnConverter.addElementListener('onclick', () => {
    let inName = document.getElementById('InName');
    let inTime = document.getElementById('InTime');
    let octName = document.getElementById('octName');
    let octTime = document.getElementById('octTime');

    let name = inName.value;
    let time = inTime.value;

    octName.textContent = name;
    octTime.textContent = '${Math.floor(time/60)} Hora(s) e ${time%60} Minuto(s)'
});