const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
function getData(url) {
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(`Ошибка: HTTP ${response.status}`)
      }
    return response.json();
  });
}

getData(url)
  .then((data) => {
    return getData(data.abilities[0].ability.url);
  })
  .then((abilityInfo) => {
    const enDescription = abilityInfo.effect_entries.find(item => item.language.name === 'en')?.effect ?? 'Описание отсутствует';
    console.log(enDescription);
  })
  .catch((err) => {
    console.log(err.message);
  });