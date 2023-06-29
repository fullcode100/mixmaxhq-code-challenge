module.exports = {
  compareDate: (a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  },
};
