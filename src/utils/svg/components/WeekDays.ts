import { SVG_DIMENSIONS, PERSIAN_WEEKDAYS } from '../constants';
import type { Theme } from '../../seasonalThemes';

export const generateWeekDays = (theme: Theme): string => {
  const { cellWidth } = SVG_DIMENSIONS;
  
  return PERSIAN_WEEKDAYS.map((day, i) => `
    <g transform="translate(${i * cellWidth}, 0)">
      <rect width="${cellWidth}" height="40" fill="${theme.accent}" />
      <text x="${cellWidth/2}" y="20"
        class="vazir"
        fill="white"
        font-size="14"
        text-anchor="middle"
        dominant-baseline="middle"
        direction="rtl"
        unicode-bidi="bidi-override">
        ${day}
      </text>
    </g>`).join('');
};