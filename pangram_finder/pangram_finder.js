const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let lower_phrase = this.phrase.toLowerCase();
  const result = this.alphabet.every((letter) => {
    return lower_phrase.includes(letter);
  });
  return result;
}

module.exports = PangramFinder;
