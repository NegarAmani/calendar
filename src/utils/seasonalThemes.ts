export interface SeasonalTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  flowerIcon: string;
}

export const getSeasonalTheme = (month: number): SeasonalTheme => {
  // Spring (1-3): Farvardin, Ordibehesht, Khordad
  if (month <= 3) {
    return {
      primary: '#10B981', // Emerald-600
      secondary: '#D1FAE5', // Emerald-100
      accent: '#059669', // Emerald-700
      background: 'from-emerald-50 to-teal-50',
      flowerIcon: `
        <path d="M12 1c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10" 
          fill="#10B981" stroke="#059669"/>
        <path d="M8.5 3.5C6 3.5 4 6 4 8.5c0 2 1 3.5 3 3.5s2-1.5 2-3.5c0-2.5-2-5-4-5" 
          fill="#34D399" stroke="#059669"/>
        <path d="M15.5 3.5c2.5 0 4.5 2.5 4.5 5 0 2-1 3.5-3 3.5s-2-1.5-2-3.5c0-2.5 2-5 4-5" 
          fill="#34D399" stroke="#059669"/>
      `
    };
  }
  // Summer (4-6): Tir, Mordad, Shahrivar
  if (month <= 6) {
    return {
      primary: '#F59E0B', // Amber-600
      secondary: '#FEF3C7', // Amber-100
      accent: '#D97706', // Amber-700
      background: 'from-amber-50 to-orange-50',
      flowerIcon: `
        <path d="M12 1c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10" 
          fill="#F59E0B" stroke="#D97706"/>
        <path d="M8.5 3.5C6 3.5 4 6 4 8.5c0 2 1 3.5 3 3.5s2-1.5 2-3.5c0-2.5-2-5-4-5" 
          fill="#FCD34D" stroke="#D97706"/>
        <path d="M15.5 3.5c2.5 0 4.5 2.5 4.5 5 0 2-1 3.5-3 3.5s-2-1.5-2-3.5c0-2.5 2-5 4-5" 
          fill="#FCD34D" stroke="#D97706"/>
      `
    };
  }
  // Fall (7-9): Mehr, Aban, Azar
  if (month <= 9) {
    return {
      primary: '#EA580C', // Orange-600
      secondary: '#FFEDD5', // Orange-100
      accent: '#C2410C', // Orange-700
      background: 'from-orange-50 to-red-50',
      flowerIcon: `
        <path d="M12 1c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10" 
          fill="#EA580C" stroke="#C2410C"/>
        <path d="M8.5 3.5C6 3.5 4 6 4 8.5c0 2 1 3.5 3 3.5s2-1.5 2-3.5c0-2.5-2-5-4-5" 
          fill="#FB923C" stroke="#C2410C"/>
        <path d="M15.5 3.5c2.5 0 4.5 2.5 4.5 5 0 2-1 3.5-3 3.5s-2-1.5-2-3.5c0-2.5 2-5 4-5" 
          fill="#FB923C" stroke="#C2410C"/>
      `
    };
  }
  // Winter (10-12): Dey, Bahman, Esfand
  return {
    primary: '#2563EB', // Blue-600
    secondary: '#DBEAFE', // Blue-100
    accent: '#1D4ED8', // Blue-700
    background: 'from-blue-50 to-indigo-50',
    flowerIcon: `
      <path d="M12 1c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10" 
        fill="#2563EB" stroke="#1D4ED8"/>
      <path d="M8.5 3.5C6 3.5 4 6 4 8.5c0 2 1 3.5 3 3.5s2-1.5 2-3.5c0-2.5-2-5-4-5" 
        fill="#60A5FA" stroke="#1D4ED8"/>
      <path d="M15.5 3.5c2.5 0 4.5 2.5 4.5 5 0 2-1 3.5-3 3.5s-2-1.5-2-3.5c0-2.5 2-5 4-5" 
        fill="#60A5FA" stroke="#1D4ED8"/>
    `
  };
};