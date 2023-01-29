navigator.mediaDevices.addEventListener('devicechange', function(event) {
  console.log(event.device.label + ' has been ' + (event.device.kind === 'audioinput' ? 'connected' : 'disconnected'));
});
