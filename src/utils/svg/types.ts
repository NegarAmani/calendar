import type { Event } from '../../types/calendar';
import type { Theme } from '../seasonalThemes';

export interface CalendarData {
  year: number;
  month: number;
  events: Event[];
  currentDate: moment.Moment;
}

export interface SVGComponent {
  theme: Theme;
  data?: CalendarData;
}