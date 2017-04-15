function countWords(inputWords) {
    var result = {};
    result[inputWords[0]] = 1;
    return inputWords.reduce((prev, val) => {
            if(val in result) {
                result[val] += 1;
            } else {
                result[val] = 1;
            }
            return result;
        });
}

module.exports = countWords