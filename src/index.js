module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
    return units[number];
  }

  if (number < 100) {
    return `${tens[Math.floor(number / 10)]}${number % 10 !== 0 ? ' ' + units[number % 10] : ''}`;
  }

  if (number < 1000) {
    return `${units[Math.floor(number / 100)]} hundred${number % 100 !== 0 ? ' ' + toReadable(number % 100) : ''}`;
  }

  if (number < 1000000) {
    return `${toReadable(Math.floor(number / 1000))} thousand${number % 1000 !== 0 ? ' ' + toReadable(number % 1000) : ''}`;
  }

  if (number < 1000000000) {
    return `${toReadable(Math.floor(number / 1000000))} million${number % 1000000 !== 0 ? ' ' + toReadable(number % 1000000) : ''}`;
  }

  if (number < 1000000000000) {
    return `${toReadable(Math.floor(number / 1000000000))} billion${number % 1000000000 !== 0 ? ' ' + toReadable(number % 1000000000) : ''}`;
  }

  return 'Number is too large';
}
