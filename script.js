let countdown;

function startCountdown() {
  const inputDateTime = document.getElementById('datetime').value;
  const targetDate = new Date(inputDateTime).getTime();

  if (isNaN(targetDate)) {
    alert("Please enter a valid date and time.");
    return;
  }

  clearInterval(countdown);

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

  }, 1000);
}

function stopCountdown() {
  clearInterval(countdown);
}

function resetCountdown() {
  clearInterval(countdown);
  document.getElementById('days').innerText = 0;
  document.getElementById('hours').innerText = 0;
  document.getElementById('minutes').innerText = 0;
  document.getElementById('seconds').innerText = 0;
}
