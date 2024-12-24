module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/users/friends',
        handler: 'user.addFriend',
        config: {
          auth: true, // Требуется авторизация
        },
      },
      {
        method: 'GET',
        path: '/users/friends',
        handler: 'user.getFriends',
        config: {
          auth: true, // Требуется авторизация
        },
      },
    ],
  };
  