export const ADD_NOTIFICATION = (state, notification) => {
  state.notifications.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now()).substr(2)
  });
};

export const REMOVE_NOTIFICATION = (state, notification) => {
  state.notifications = state.notifications.filter(item => {
    return item.id !== notification.id;
  });
};
