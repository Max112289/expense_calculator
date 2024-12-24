module.exports = {
    async addFriend(ctx) {
      const { id } = ctx.state.user; // Текущий пользователь
      const { friendId } = ctx.request.body; // ID друга
  
      if (!friendId) {
        return ctx.badRequest('friendId is required');
      }
  
      // Проверка существования друга
      const friend = await strapi.query('plugin::users-permissions.user').findOne({
        where: { id: friendId },
      });
  
      if (!friend) {
        return ctx.notFound('Friend not found');
      }
  
      // Получаем пользователя с его друзьями
      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: { id },
        populate: ['friends'],
      });
  
      // Проверяем, является ли уже другом
      const alreadyFriend = user.friends.some(f => f.id === friendId);
      if (alreadyFriend) {
        return ctx.badRequest('Already friends');
      }
  
      // Обновляем поле friends
      await strapi.query('plugin::users-permissions.user').update({
        where: { id },
        data: {
          friends: [...user.friends.map(f => f.id), friendId],
        },
      });
  
      return ctx.send({ message: 'Friend added successfully' });
    },
  
    async getFriends(ctx) {
      const { id } = ctx.state.user;
  
      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: { id },
        populate: ['friends'],
      });
  
      if (!user) {
        return ctx.notFound('User not found');
      }
  
      return ctx.send(user.friends);
    },
  };
  