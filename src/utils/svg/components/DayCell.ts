import moment from 'moment-jalaali';
import type { Event } from '../../../types/calendar';
import type { Theme } from '../../seasonalThemes';
import { SVG_DIMENSIONS } from '../constants';

const generateEventsList = (events: Event[], theme: Theme, cellWidth: number): string => {
  return events.map((event, index) => `
    <g transform="translate(5, ${30 + index * 20})">
      <rect width="${cellWidth - 10}" height="18"
        fill="${theme.secondary}"
        rx="4" />
      <text x="${cellWidth - 15}" y="14"
        class="vazir"
        fill="${theme.primary}"
        font-size="12"
        text-anchor="end"
        direction="rtl"
        unicode-bidi="bidi-override">
        ${event.title}
      </text>
    </g>`).join('');
};

export const generateDayCell = (
  dayNumber: number,
  date: moment.Moment,
  events: Event[],
  theme: Theme,
  col: number,
  row: number
): string => {
  const { cellWidth, cellHeight } = SVG_DIMENSIONS;
  const dateStr = date.format('YYYY-MM-DD');
  const dayEvents = events.filter(e => e.date === dateStr);
  
  return `
  <g transform="translate(${col * cellWidth}, ${row * cellHeight + 40})">
    <rect width="${cellWidth}" height="${cellHeight}" fill="white" stroke="${theme.accent}" />
    <text x="${cellWidth - 10}" y="20"
      class="vazir"
      fill="${theme.primary}"
      font-size="14"
      text-anchor="end"
      direction="rtl"
      unicode-bidi="bidi-override">
      ${dayNumber}
    </text>
    ${generateEventsList(dayEvents, theme, cellWidth)}
  </g>`;
};