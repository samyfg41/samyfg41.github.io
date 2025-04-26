function atualizaContador() {
    const destino = new Date("2025-11-12T00:00:00").getTime(); 
    const agora = new Date().getTime();
    const distancia = destino - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    document.getElementById("contador").textContent = `Faltam ${dias} dias para a viagem! 🏰`;
}
window.onload = atualizaContador;
