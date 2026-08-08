function newYearTimer() {
  const timer = document.getElementById('timer');

  const interval = setInterval(() => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    let months =
      (newYear.getFullYear() - now.getFullYear()) * 12 +
      (newYear.getMonth() - now.getMonth());

    const dateWithMonths = new Date(now);
    dateWithMonths.setMonth(dateWithMonths.getMonth() + months);

    if (dateWithMonths > newYear) {
      months--;
      dateWithMonths.setMonth(dateWithMonths.getMonth() - 1);
    }

    const diff = newYear - dateWithMonths;

    if (diff <= 0 && months <= 0) {
      clearInterval(interval);
      timer.textContent = 'С Новым годом!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.textContent = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
  }, 1000);
}

newYearTimer();