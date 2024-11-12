export interface Theme {
  colors: {
    background: string;
    textPrimary: string;
    cardBackground: string;
    sectionTitle: string;
    borderColor: string;
    bottomNavText: string;
    standardGray: string;
    darkCharcoal: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    textPrimary: '#000000',
    cardBackground: '#F5F5F5',
    sectionTitle: '#000000',
    borderColor: '#E0E0E0',
    bottomNavText: '#555555',
    standardGray: '#808080',
    darkCharcoal: '#2D2D2D',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#000000',
    textPrimary: '#FFFFFF',
    cardBackground: '#1A1A1A',
    sectionTitle: '#FFFFFF',
    borderColor: '#333333',
    bottomNavText: '#CCCCCC',
    standardGray: '#808080',
    darkCharcoal: '#2D2D2D',
  },
};
