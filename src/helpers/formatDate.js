import { formatDistanceToNow, formatDate } from 'date-fns';

export const formatDataNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const dateTransactions = date => {
  return formatDate(new Date(date), 'Pp');
};
