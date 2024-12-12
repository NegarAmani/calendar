import moment from 'moment-jalaali';
import type { Event } from '../types/calendar';
import { getSeasonalTheme } from './seasonalThemes';
import { SVG_NAMESPACES, SVG_DIMENSIONS } from './svg/constants';
import { generateHeader } from './svg/components/Header';
import { generateWeekDays } from './svg/components/WeekDays';
import { generateDayCell } from './svg/components/DayCell';
import { generateMetadata } from './svg/components/Metadata';
import { generateDecorations } from './svg/components/Decorations';
import type { CalendarData } from './svg/types';
import type { Theme } from './seasonalThemes';

const generateDaysGrid = (
  year: number,
  month: number,
  events: Event[],
  theme: Theme
): string => {
  const daysInMonth = moment.jDaysInMonth(year, month - 1);
  const firstDayOfMonth = moment(`${year}/${month}/1`, 'jYYYY/jM/jD').day();
  let daysGrid = '';
  
  for (let i = 0; i < 42; i++) {
    const row = Math.floor(i / 7);
    const col = i % 7;
    const dayNumber = i - firstDayOfMonth + 1;
    
    if (dayNumber > 0 && dayNumber <= daysInMonth) {
      const date = moment(`${year}/${month}/${dayNumber}`, 'jYYYY/jM/jD');
      daysGrid += generateDayCell(dayNumber, date, events, theme, col, row);
    }
  }
  
  return daysGrid;
};

const generateCalendarSvg = (data: CalendarData): string => {
  const { year, month, events } = data;
  const theme = getSeasonalTheme(month);
  const { width, height, headerHeight } = SVG_DIMENSIONS;
  const namespaces = Object.entries(SVG_NAMESPACES)
    .map(([key, value]) => `xmlns:${key}="${value}"`)
    .join(' ');

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"
  ${namespaces}
  version="1.1">
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&amp;display=swap');
      .vazir { font-family: 'Vazirmatn', sans-serif; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="${theme.secondary}" />
  
  ${generateHeader(year, theme)}

  <!-- Calendar Grid -->
  <g transform="translate(0, ${headerHeight})">
    ${generateWeekDays(theme)}
    ${generateDaysGrid(year, month, events, theme)}
    ${generateDecorations(theme)}
  </g>
  ${generateMetadata(events)}
</svg>`;
};

export const exportToAI = async (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const currentDate = moment();
  const year = parseInt(currentDate.format('jYYYY'));
  const month = parseInt(currentDate.format('jM'));
  
  const eventsElements = element.querySelectorAll('[data-event]');
  const events: Event[] = Array.from(eventsElements).map(el => {
    return JSON.parse(el.getAttribute('data-event') || '{}');
  });

  const data: CalendarData = { year, month, events, currentDate };
  const svg = generateCalendarSvg(data);
  
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `persian-calendar-${currentDate.format('jYYYY-jMM')}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};