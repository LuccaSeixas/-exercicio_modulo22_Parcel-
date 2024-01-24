AOS.init();

const dataDoEvento = new Date ("Dec 31, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diaEmMS = 1000 * 60 * 60 * 24
    const horasEmMS = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteEnvento = Math.floor(distanciaAteEvento / diaEmMS);
    const horasAteEnvento = Math.floor((distanciaAteEvento % diaEmMS) / horasEmMS);
    const minutosAteEnvento = Math.floor((distanciaAteEvento % horasEmMS) / minutosEmMs);
    const segundosAteEnvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEnvento}d ${horasAteEnvento}h ${minutosAteEnvento}m ${segundosAteEnvento}s`;

    if(diasAteEnvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'evento expirado';
    }
    
}, 1000);