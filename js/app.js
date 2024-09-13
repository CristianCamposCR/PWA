// Preguntamos si en navegador soporta el service worker y lo registra
if(navigator.serviceWorker){
    
    navigator.serviceWorker.register('./sw.js');
}

