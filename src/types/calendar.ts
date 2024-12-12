export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: 'holiday' | 'personal' | 'work' | 'cultural';
  color?: string;
}

export interface DayProps {
  day: number;
  month: number;
  year: number;
  isToday: boolean;
  isSelected: boolean;
  isHoliday: boolean;
  events: Event[];
  onClick: () => void;
}