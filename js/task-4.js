// Загальний баланс

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
