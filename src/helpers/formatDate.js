import { formatDistanceToNow } from 'date-fns';
export const formatDataNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
