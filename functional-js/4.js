function getShortMessages(messages) {
    return messages.filter((value) => {
            if(value.message.length < 50) {
                return value;
            }
        }).map((item) => {
            return item.message;
        });
}

module.exports = getShortMessages