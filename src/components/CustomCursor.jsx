import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });
  const outlineX = useSpring(0, { damping: 15, stiffness: 150 });
  const outlineY = useSpring(0, { damping: 15, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      outlineX.set(e.clientX);
      outlineY.set(e.clientY);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, outlineX, outlineY]);

  return (
    <div className="hidden lg:block">
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? 'var(--accent)' : 'var(--primary)',
          backgroundColor: isPointer ? 'rgba(250, 189, 47, 0.1)' : 'transparent',
        }}
        style={{
          x: outlineX,
          y: outlineY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

export default CustomCursor;
