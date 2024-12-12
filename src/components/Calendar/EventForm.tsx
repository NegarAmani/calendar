import React, { useState } from 'react';
import type { Event } from '../../types/calendar';
import { X } from 'lucide-react';

interface EventFormProps {
  onSubmit: (event: Omit<Event, 'id'>) => void;
  onClose: () => void;
  selectedDate: string;
}

export const EventForm: React.FC<EventFormProps> = ({
  onSubmit,
  onClose,
  selectedDate,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<Event['type']>('personal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      type,
      date: selectedDate,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold font-vazirmatn">افزودن رویداد جدید</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 font-vazirmatn">
              عنوان
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 font-vazirmatn">
              توضیحات
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 font-vazirmatn">
              نوع رویداد
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as Event['type'])}
              className="w-full p-2 border rounded-md"
            >
              <option value="personal">شخصی</option>
              <option value="work">کاری</option>
              <option value="holiday">تعطیلی</option>
              <option value="cultural">فرهنگی</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-vazirmatn"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-vazirmatn"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};