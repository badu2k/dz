function newYearTimer() {
  const interval = setInterval(() => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    const diff = newYear - now;

    if (diff <= 0) {
      clearInterval(interval);
      console.log('С Новым годом!');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    console.log(`${days}д ${hours}ч ${minutes}м ${seconds}с`);
  }, 1000);
}

newYearTimer();