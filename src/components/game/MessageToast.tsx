
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Export this type so it can be used in other components
export type MessageType = 'success' | 'error' | 'info' | 'pangram';

interface MessageToastProps {
  message: string;
  type: MessageType;
  show: boolean;
  onHide: () => void;
  duration?: number;
}

const MessageToast: React.FC<MessageToastProps> = ({
  message,
  type,
  show,
  onHide,
  duration = 2000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onHide, 300); // Wait for animation to complete
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onHide]);
  
  const bgColorClass = {
    success: 'bg-green-100 border-green-200 text-green-800',
    error: 'bg-red-100 border-red-200 text-red-800',
    info: 'bg-blue-100 border-blue-200 text-blue-800',
    pangram: 'bg-bee-lightYellow border-bee-yellow text-bee-black'
  }[type];
  
  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-md border shadow-md z-50 transition-all duration-300",
        bgColorClass,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      {message}
    </div>
  );
};

export default MessageToast;
