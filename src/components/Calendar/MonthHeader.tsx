import React from 'react';
import type { MonthInfo } from '../../utils/persianMonths';
import { SeasonalFlower } from './SeasonalFlower';
import { getSeasonalTheme } from '../../utils/seasonalThemes';
import { clsx } from 'clsx';

interface MonthHeaderProps {
  monthInfo?: MonthInfo;
  month: number;
}

export const MonthHeader: React.FC<MonthHeaderProps> = ({ monthInfo, month }) => {
  const theme = getSeasonalTheme(month);

  if (!monthInfo) {
    return (
      <div className="mb-4 bg-white rounded-lg overflow-hidden shadow-md">
        <div className="h-24 sm:h-32 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
          <p className="text-lg sm:text-xl text-gray-600 font-vazirmatn">تقویم فارسی</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-24 sm:h-32">
        <img
          src={monthInfo.image}
          alt={monthInfo.name}
          className="w-full h-full object-cover"
        />
        <div className={clsx(
          "absolute inset-0 bg-gradient-to-t opacity-90",
          `from-${theme.primary} to-transparent`
        )} />
        <div className="absolute top-2 left-2">
          <SeasonalFlower month={month} className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
        </div>
        <div className="absolute bottom-0 right-0 p-2 sm:p-4 text-white">
          <h2 className="text-xl sm:text-2xl font-bold font-vazirmatn mb-1">
            {monthInfo.name}
          </h2>
          <div className="space-y-0.5">
            <p className="font-nastaliq text-sm sm:text-base leading-relaxed">
              {monthInfo.poem}
            </p>
            <p className="text-xs text-gray-200">
              سروده: {monthInfo.poet}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};