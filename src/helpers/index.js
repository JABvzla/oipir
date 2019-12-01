function getFormatedDate() {
  let d = new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('/');
}

function getRandomHash() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  const randomChar = () => chars[Math.ceil(Math.random() * chars.length)];

  return new Array(6)
    .fill('')
    .map(randomChar)
    .join('');
}

function satoshiToBtc(n) {
  return '0.00000000'.substring(0, 10 - n.toString().length) + n;
}

export {getFormatedDate, satoshiToBtc, getRandomHash};
