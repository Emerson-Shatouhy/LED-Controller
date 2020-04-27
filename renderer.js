// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$(document).ready(function() {
    //your code here

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var port = new SerialPort("COM7");
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{
  console.log('got word from arduino:', data);
});
function red() {
   port.write('Red');
}
function blue() {
   port.write('Blue');
}
function green() {
   port.write('Green');
}
function fadeIn() {
   port.write('Fade in');
}
function fadeOut() {
   port.write('Fade out');
}
function clear() {
   port.write('Clear');
}


var slider = document.getElementById("redRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
});
