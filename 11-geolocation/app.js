const geoProm = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });

geoProm
  .then((coords) => {
    const {latitude, longitude} = coords;
    doSomething(latitude, longitude);
  })
  .catch((error) => {
    console.error('Ошибка получения геолокации:', error)
  })