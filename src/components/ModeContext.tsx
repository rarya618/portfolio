import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Mode } from '../types';

interface ModeContextValue {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
  isDesigner: boolean;
}

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>('engineer');

  const setMode = (m: Mode) => setModeState(m);
  const toggle = () => setModeState((prev) => (prev === 'engineer' ? 'designer' : 'engineer'));
  const isDesigner = mode === 'designer';

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle, isDesigner }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used inside ModeProvider');
  return ctx;
}
