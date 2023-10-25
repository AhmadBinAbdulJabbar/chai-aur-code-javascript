const sayDate = function (str) {
    console.log(str, Date.now());
};

let intervalId = null;
let isRunning = false;

const startStopButton = document.querySelector('#startStop');

startStopButton.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;
        startStopButton.textContent = 'Start';
        console.log("Stopped");
    } else {
        intervalId = setInterval(sayDate, 1000, 'hi');
        isRunning = true;
        startStopButton.textContent = 'Running';
        console.log("Started");
    }
});
