// Користувачі з другом

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));
