export const SVG_NAMESPACES = {
  svg: 'http://www.w3.org/2000/svg',
  xlink: 'http://www.w3.org/1999/xlink',
  ai: 'http://ns.adobe.com/AdobeIllustrator/10.0/',
  dc: 'http://purl.org/dc/elements/1.1/',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
} as const;

export const SVG_DIMENSIONS = {
  width: 800,
  height: 600,
  headerHeight: 80,
  cellWidth: 800 / 7,
  cellHeight: (600 - 80) / 6
} as const;

export const PERSIAN_WEEKDAYS = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'] as const;