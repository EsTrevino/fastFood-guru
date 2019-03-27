import moment from 'moment';

export function getYear(string) {
  return moment(string).format(string);
}

export function getFormattedDate(string) {
  console.log('inside function', string);
  return moment(string).format('LLLL');
}
