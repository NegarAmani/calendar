import React from 'react';
import { getSeasonalTheme } from '../../utils/seasonalThemes';

interface SeasonalFlowerProps {
  month: number;
  className?: string;
}

export const SeasonalFlower: React.FC<SeasonalFlowerProps> = ({ month, className = '' }) => {
  const theme = getSeasonalTheme(month);
  
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: theme.flowerIcon }}
    />
  );
};