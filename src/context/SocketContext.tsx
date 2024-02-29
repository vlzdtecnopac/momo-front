import React, { ReactNode, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

interface DynamicLayoutProps {
  children: ReactNode;
}

export const SocketContext = createContext<any | null>(null);

export const SocketProvider: React.FC<DynamicLayoutProps> = ({ children }: DynamicLayoutProps) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://ec2-54-209-249-2.compute-1.amazonaws.com/');

  useEffect(() => {
    conectarSocket();
  }, [conectarSocket]);

 
  useEffect(() => {
    desconectarSocket();
  }, [desconectarSocket]);

  return (
    <SocketContext.Provider value= {{ socket, online }}>
        { children }
    </SocketContext.Provider>
  );
};