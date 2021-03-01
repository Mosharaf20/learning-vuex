export const addNotification = ({ commit }, notification) => {
  commit("ADD_NOTIFICATION", notification);
};

export const removeNotification = ({ commit }, notification) => {
  commit("REMOVE_NOTIFICATION", notification);
};
