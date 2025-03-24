'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface URLContextType {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const URLContext = createContext<URLContextType | undefined>(undefined);

export const URLProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string>('');

  return (
    <URLContext.Provider value={{ data, setData }}>
      {children}
    </URLContext.Provider>
  );
};

export const useData = (): URLContextType => {
  const context = useContext(URLContext);
  if (!context) {
    throw new Error("useData는 URLProvider 내에서 사용되어야 합니다.");
  }
  return context;
};
