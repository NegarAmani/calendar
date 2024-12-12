import moment from 'moment-jalaali';
import type { Event } from '../types/calendar';

export const getHolidays = (year: number): Event[] => {
  return [
    {
      id: 'nowruz',
      title: 'نوروز',
      date: moment(`${year}/1/1`, 'jYYYY/jM/jD').format('YYYY-MM-DD'),
      type: 'holiday',
      description: 'آغاز سال نو'
    },
    {
      id: 'nature-day',
      title: 'روز طبیعت',
      date: moment(`${year}/1/13`, 'jYYYY/jM/jD').format('YYYY-MM-DD'),
      type: 'holiday',
      description: 'سیزده به در'
    },
    // Add more holidays...
  ];
};