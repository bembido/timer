document.addEventListener('DOMContentLoaded', () => {
	let startTime;
	let updatedTime;
	let elapsedTime = 0;
	let timerInterval;
	let isRunning = false;

	const display = document.getElementById('display');
	const hoursInput = document.getElementById('hours');
	const minutesInput = document.getElementById('minutes');
	const secondsInput = document.getElementById('seconds');
	const inputContainer = document.getElementById('input-container');

	function startTimer() {
			startTime = new Date().getTime() - elapsedTime;
			timerInterval = setInterval(() => {
					updatedTime = new Date().getTime();
					elapsedTime = updatedTime - startTime;
					displayTime(elapsedTime);
			}, 1000);
	}

	function stopTimer() {
			clearInterval(timerInterval);
	}

	function resetTimer() {
			clearInterval(timerInterval);
			display.innerHTML = "00:00:00";
			isRunning = false;
			elapsedTime = 0;
			inputContainer.style.opacity = 1;
	}

	function displayTime(milliseconds) {
			const totalSeconds = Math.floor(milliseconds / 1000);
			const hours = Math.floor(totalSeconds / 3600);
			const minutes = Math.floor((totalSeconds % 3600) / 60);
			const seconds = totalSeconds % 60;

			display.innerHTML = 
					(hours < 10 ? "0" + hours : hours) + ":" +
					(minutes < 10 ? "0" + minutes : minutes) + ":" +
					(seconds < 10 ? "0" + seconds : seconds);
	}

	function handleEnterKey(event) {
			if (event.key === 'Enter') {
					if (!isRunning) {
							startTimer();
							inputContainer.style.opacity = 0;
							isRunning = true;
					} else {
							resetTimer();
					}
			}
	}

	document.addEventListener('keydown', handleEnterKey);
});
