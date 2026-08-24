  const buttonsContainer = document.querySelector('.buttons');
  const resultContent = document.querySelector('.result-content');
  let lastButton = null;
  let count = 0; // Счётчик храним в JS

  buttonsContainer.addEventListener('click', function(e) {
    const button = e.target.closest('button');
    if (!button) return;

    // 1. Возвращаем предыдущую кнопку в исходное состояние
    if (lastButton) {
        lastButton.textContent = 'Нажми меня';
    }

    // 2. Увеличиваем счётчик и обновляем результат
    count++;
    resultContent.textContent = count;

    // 3. Помечаем текущую кнопку
    button.textContent = 'Нажата';

    // 4. Сохраняем текущую кнопку как последнюю
    lastButton = button;
  });