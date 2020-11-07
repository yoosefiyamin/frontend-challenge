var createUser = function (user) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        user: user,
        token: "test.token"
      });
    }, 1000);
  });
};


module.exports = createUser;