import moment from 'moment';

export const dateFormat = (date) => {
  return moment(date).format('YYYY-MMMM-DD');
};

export const dateFormatString = 'yyyy-MMMM-dd';