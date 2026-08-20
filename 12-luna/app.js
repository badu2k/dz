function checkLuhn(cardNumber) {
  // Убираем все НЕ цифры
  const digits = cardNumber.replace(/\D/g, '').split('').map(Number);
  
  if (digits.length < 13) return false;
  
  let checksum = 0;
  let isEven = false;
  
  // Идём справа налево
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    checksum += digit;
    isEven = !isEven;
  }
  
  return checksum % 10 === 0;
}