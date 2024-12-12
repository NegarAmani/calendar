import React from 'react';
import { Day } from './Day';
import moment from 'moment-jalaali';
import type { Event } from '../../types/calendar';
import { Flower } from 'lucide-react';

interface MonthViewProps {
  year: number;
  month: number;
  events: Event[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (id: string) => void;
}

export const MonthView: React.FC<MonthViewProps> = ({
  year,
  month,
  events,
  selectedDate,
  onSelectDate,
  onEditEvent,
  onDeleteEvent,
}) => {
  const daysInMonth = moment.jDaysInMonth(year, month - 1);
  const firstDayOfMonth = moment(`${year}/${month}/1`, 'jYYYY/jM/jD').day();
  
  const days = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - firstDayOfMonth + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) return null;
    return dayNumber;
  });

  const weekDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

  return (
    <div className="w-full relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Flower className="text-purple-300 w-12 h-12 opacity-50" />
      </div>
      <div className="grid grid-cols-7 gap-px mb-px">
        {weekDays.map((day) => (
          <div
            key={day}
            className="bg-purple-100 p-1 sm:p-2 text-center font-vazirmatn font-medium text-xs sm:text-sm"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {days.map((day, index) => {
          if (!day) return <div key={index} className="bg-gray-50" />;

          const date = moment(`${year}/${month}/${day}`, 'jYYYY/jM/jD');
          const dateStr = date.format('YYYY-MM-DD');
          const dayEvents = events.filter((event) => event.date === dateStr);
          const isToday = date.isSame(moment(), 'day');
          const isSelected = dateStr === selectedDate;
          const isHoliday = date.day() === 6 || dayEvents.some(e => e.type === 'holiday');

          return (
            <Day
              key={index}
              day={day}
              month={month}
              year={year}
              isToday={isToday}
              isSelected={isSelected}
              isHoliday={isHoliday}
              events={dayEvents}
              onClick={() => onSelectDate(dateStr)}
              onEditEvent={onEditEvent}
              onDeleteEvent={onDeleteEvent}
            />
          );
        })}
      </div>
    </div>
  );
};