import { useState, useEffect } from 'react';
import moment from 'moment-jalaali';
import type { Event } from '../types/calendar';
import { getHolidays } from '../utils/persianHolidays';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>(() => {
    const storedEvents = localStorage.getItem('calendar-events');
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    const year = parseInt(moment().format('jYYYY'));
    const holidays = getHolidays(year);
    return [...parsedEvents, ...holidays];
  });

  useEffect(() => {
    const userEvents = events.filter(event => event.type !== 'holiday');
    localStorage.setItem('calendar-events', JSON.stringify(userEvents));
  }, [events]);

  const addEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (id: string, eventData: Partial<Omit<Event, 'id'>>) => {
    setEvents(prev => 
      prev.map(event => 
        event.id === id ? { ...event, ...eventData } : event
      )
    );
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  return { events, addEvent, updateEvent, deleteEvent };
};