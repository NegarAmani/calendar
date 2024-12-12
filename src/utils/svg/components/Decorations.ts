import type { Theme } from '../../seasonalThemes';
import { SVG_DIMENSIONS } from '../constants';

export const generateDecorations = (theme: Theme): string => {
  const { width, height } = SVG_DIMENSIONS;
  
  return `
    <g transform="translate(10, 10) scale(0.5)">${theme.flowerIcon}</g>
    <g transform="translate(${width - 30}, 10) scale(0.5)">${theme.flowerIcon}</g>
    <g transform="translate(10, ${height - 30}) scale(0.5)">${theme.flowerIcon}</g>
    <g transform="translate(${width - 30}, ${height - 30}) scale(0.5)">${theme.flowerIcon}</g>
  `;
};