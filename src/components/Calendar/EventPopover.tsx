import React from 'react';
import type { Event } from '../../types/calendar';
import { Edit2, Trash2, X } from 'lucide-react';
import { clsx } from 'clsx';
import moment from 'moment-jalaali';

interface EventPopoverProps {
  event: Event;
  onClose: () => void;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

export const EventPopover: React.FC<EventPopoverProps> = ({
  event,
  onClose,
  onEdit,
  onDelete,
}) => {
  const formattedDate = moment(event.date).format('jYYYY/jM/jD');
  
  return (
    <div className="absolute z-50 bg-white rounded-lg shadow-lg p-4 w-72">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div
            className={clsx('w-3 h-3 rounded-full', {
              'bg-red-500': event.type === 'holiday',
              'bg-green-500': event.type === 'personal',
              'bg-blue-500': event.type === 'work',
              'bg-yellow-500': event.type === 'cultural',
            })}
          />
          <h3 className="font-semibold font-vazirmatn">{event.title}</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={16} />
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600 font-vazirmatn">{formattedDate}</p>
        {event.description && (
          <p className="text-sm text-gray-700 font-vazirmatn">{event.description}</p>
        )}
      </div>

      {event.type !== 'holiday' && (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEdit(event)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-md"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </div>
  );
};