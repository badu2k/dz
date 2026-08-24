const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  const firstAbilityUrl = data.abilities[0].ability.url;
  const abilityRequest = new XMLHttpRequest();
  abilityRequest.open('GET', firstAbilityUrl);
  abilityRequest.send();
  abilityRequest.addEventListener('load', function() {
    const abilityInfo = JSON.parse(this.responseText);
    console.log(abilityInfo.effect_entries);
    const enDescription = abilityInfo.effect_entries.find(item => item.language.name === 'en')?.effect ?? 'Описание отсутствует';
    console.log(enDescription);
  });
});