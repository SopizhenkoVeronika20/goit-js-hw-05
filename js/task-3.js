// Сортування за кількістю друзів

const sortByDescendingFriendCount = (users) =>
  users.sort((user1, user2) => user2.friends.length - user1.friends.length);
