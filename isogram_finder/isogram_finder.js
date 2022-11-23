const IsogramFinder = function (word) {
    this.word = word;

}

IsogramFinder.prototype.isIsogram = function () {
    let word_as_list = this.word.split('');
    const result = word_as_list.every((letter) => {
        let letter_count = this.word.split(letter);
        return letter_count.length === 2;
    });
    return result

}

module.exports = IsogramFinder;
