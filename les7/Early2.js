function login(username, password) {
  if (username) {
    if (password) {
      if (password.length >= 6) {
        return "Вхід виконано";
      } else {
        return "Пароль занадто короткий";
      }
    } else {
      return "Пароль не вказаний";
    }
  } else {
    return "Ім’я користувача не вказане";
  }
}

function login(username, password) {
  if (!username) {
    return "Ім’я користувача не вказане";
  }

  if (!password) {
    return "Пароль не вказаний";
  }

  if (password.length < 6) {
    return "Пароль занадто короткий";
  }

  return "Вхід виконано";
}
