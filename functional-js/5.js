function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((elem) => {
            return goodUsers.some((gUser) => {
                return gUser.id === elem.id;
            });
        });
    };
}

module.exports = checkUsersValid