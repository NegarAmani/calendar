import React, { useState } from 'react';
import moment from 'moment-jalaali';
import { MonthView } from './components/Calendar/MonthView';
import { MonthHeader } from './components/Calendar/MonthHeader';
import { EventForm } from './components/Calendar/EventForm';
import { Calendar, ChevronRight, ChevronLeft, Download, FileImage } from 'lucide-react';
import { exportToPDF, exportToAI } from './utils/exportUtils';
import { persianMonths } from './utils/persianMonths';
import { useEvents } from './hooks/useEvents';
import type { Event } from './types/calendar';

function App() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'jMonth'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'jMonth'));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setEditingEvent(null);
    setShowEventForm(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setSelectedDate(event.date);
    setShowEventForm(true);
  };

  const handleEventSubmit = (eventData: Omit<Event, 'id'>) => {
    if (editingEvent) {
      updateEvent(editingEvent.id, eventData);
    } else {
      addEvent(eventData);
    }
    setShowEventForm(false);
    setEditingEvent(null);
  };

  const currentMonth = parseInt(currentDate.format('jM'));
  const currentMonthInfo = persianMonths[currentMonth - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4" id="calendar-container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-600 hidden sm:block" size={28} />
              <div className="text-center sm:text-right">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 font-vazirmatn">
                  تقویم فارسی
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-vazirmatn">
                  {currentDate.format('jMMMM jYYYY')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => exportToAI('calendar-container')}
                className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-vazirmatn text-xs sm:text-sm"
              >
                <FileImage size={14} className="hidden sm:block" />
                <span>AI</span>
              </button>
              <button
                onClick={() => exportToPDF('calendar-container')}
                className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-vazirmatn text-xs sm:text-sm"
              >
                <Download size={14} className="hidden sm:block" />
                <span>PDF</span>
              </button>
              <div className="flex gap-1">
                <button
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
          </div>

          <MonthHeader monthInfo={currentMonthInfo} />
          <MonthView
            year={parseInt(currentDate.format('jYYYY'))}
            month={parseInt(currentDate.format('jM'))}
            events={events}
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
            onEditEvent={handleEditEvent}
            onDeleteEvent={deleteEvent}
          />
        </div>
      </div>

      {showEventForm && selectedDate && (
        <EventForm
          selectedDate={selectedDate}
          onSubmit={handleEventSubmit}
          onClose={() => {
            setShowEventForm(false);
            setEditingEvent(null);
          }}
          editingEvent={editingEvent}
        />
      )}
    </div>
  );
}

export default App;