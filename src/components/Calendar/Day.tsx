import React, { useState } from 'react';
import { clsx } from 'clsx';
import type { DayProps, Event } from '../../types/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { EventPopover } from './EventPopover';

export const Day: React.FC<DayProps & {
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (id: string) => void;
}> = ({
  day,
  isToday,
  isSelected,
  events,
  isHoliday,
  onClick,
  onEditEvent,
  onDeleteEvent,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (e: React.MouseEvent, event: Event) => {
    e.stopPropagation();
    setSelectedEvent(event);
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative h-14 sm:h-24 p-1 sm:p-2 border border-gray-200 transition-all cursor-pointer hover:bg-purple-50',
        {
          'bg-purple-100': isSelected,
          'ring-2 ring-purple-500': isToday,
          'bg-red-50': isHoliday && !isSelected,
        }
      )}
    >
      {events.map(event => (
        <div key={event.id} data-event={JSON.stringify(event)} style={{ display: 'none' }} />
      ))}
      <div className="flex justify-between items-start">
        <span className={clsx('text-sm sm:text-base font-vazirmatn', {
          'font-bold text-purple-600': isToday,
          'text-red-600': isHoliday,
        })}>
          {day}
        </span>
        {events.length > 0 && (
          <div className="flex gap-0.5">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className={clsx('w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full', {
                  'bg-red-500': event.type === 'holiday',
                  'bg-green-500': event.type === 'personal',
                  'bg-blue-500': event.type === 'work',
                  'bg-yellow-500': event.type === 'cultural',
                })}
              />
            ))}
          </div>
        )}
      </div>
      {events.length > 0 && (
        <div className="mt-0.5 sm:mt-1 space-y-0.5">
          {events.slice(0, 2).map((event) => (
            <button
              key={event.id}
              onClick={(e) => handleEventClick(e, event)}
              className={clsx(
                'text-[8px] sm:text-xs truncate w-full text-right px-0.5 py-0.5 rounded hover:bg-white/50',
                {
                  'text-red-600 font-medium': event.type === 'holiday',
                  'text-gray-600': event.type !== 'holiday',
                }
              )}
              title={event.title}
            >
              {event.title}
            </button>
          ))}
          {events.length > 2 && (
            <div className="text-[8px] sm:text-xs text-gray-500 flex items-center gap-0.5">
              <CalendarIcon size={8} className="sm:size-3" />
              +{events.length - 2}
            </div>
          )}
        </div>
      )}

      {selectedEvent && (
        <EventPopover
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onEdit={onEditEvent}
          onDelete={(id) => {
            onDeleteEvent(id);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
};