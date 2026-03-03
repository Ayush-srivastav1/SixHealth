import { useCallback, useRef, useState } from "react";

type Handlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function useHoverIntent(openDelay = 150, closeDelay = 200) {
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const pendingKey = useRef<string | null>(null);

  const clearTimers = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const getHandlers = useCallback(
    (key: string): Handlers => ({
      onMouseEnter: () => {
        pendingKey.current = key;
        if (closeTimer.current) {
          window.clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
        if (openTimer.current) {
          window.clearTimeout(openTimer.current);
        }
        openTimer.current = window.setTimeout(() => {
          setHoverKey(pendingKey.current);
          openTimer.current = null;
        }, openDelay) as unknown as number;
      },
      onMouseLeave: () => {
        pendingKey.current = null;
        if (openTimer.current) {
          window.clearTimeout(openTimer.current);
          openTimer.current = null;
        }
        if (closeTimer.current) {
          window.clearTimeout(closeTimer.current);
        }
        closeTimer.current = window.setTimeout(() => {
          setHoverKey((current) => (current === key ? null : current));
          closeTimer.current = null;
        }, closeDelay) as unknown as number;
      },
    }),
    [openDelay, closeDelay]
  );
  return { hoverKey, getHandlers, clearTimers } as const;
}
