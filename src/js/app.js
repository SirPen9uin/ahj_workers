import Widget from './widget';
import { API_ROOT } from './constants/environment';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./service.worker.js');

      console.log(`Service worker registered. Scope is ${registration.scope}`);
    }
    catch (error) {
      console.log(`Registation failed with ${error}`);
    }
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('API_ROOT', API_ROOT);

  registerServiceWorker();

  const container = document.querySelector('#app');

  const widget = new Widget();
  widget.bindToDOM(container);
  widget.drawUI();
});
