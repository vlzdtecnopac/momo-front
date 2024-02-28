import { useCallback, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [online, setOnline] = useState(false);

  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem('token');

    const socketTemp = io('http://localhost:3000',{
        transports: ['websocket']
    });
    
      // Handle connection errors
      socketTemp.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });
  
      // Set up event listeners
      socketTemp.on('connect', () => setOnline(true));
      socketTemp.on('disconnect', () => setOnline(false));
  
      setSocket(socketTemp);
  }, [serverPath]);

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      desconectarSocket();
    };
  }, [desconectarSocket]);

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket,
  };
};
