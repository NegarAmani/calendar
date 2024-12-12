import { SVG_DIMENSIONS } from '../constants';
import type { Theme } from '../../seasonalThemes';

export const generateHeader = (year: number, theme: Theme): string => {
  const { width, headerHeight } = SVG_DIMENSIONS;
  
  return `
  <!-- Header -->
  <rect width="${width}" height="${headerHeight}" fill="${theme.primary}" />
  <text x="${width/2}" y="${headerHeight/2}" 
    class="vazir"
    fill="white"
    font-size="24"
    text-anchor="middle"
    dominant-baseline="middle"
    direction="rtl"
    unicode-bidi="bidi-override">
    تقویم فارسی ${year}
  </text>`;
};