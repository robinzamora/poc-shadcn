import { createContext, Dispatch, SetStateAction } from 'react';

interface IProps {
  cleanValue: string;
  updateCleanValue: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext({} as IProps);
