let inp = document.querySelector('#phone-input');

// Проверяем фокус
inp.addEventListener('focus', _ => {
  // Если там ничего нет или есть, но левое
  if(!/^\+\d*$/.test(inp.value))
    // То вставляем знак плюса как значение
    inp.value = '+';
});

inp.addEventListener('keypress', e => {
  // Отменяем ввод не цифр
  if(!/\d/.test(e.key))
    e.preventDefault();
});
