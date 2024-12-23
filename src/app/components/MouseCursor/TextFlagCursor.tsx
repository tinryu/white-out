'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import TextFlagCursor from './textflag-cursor';

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();

  return (
    <div>
      <TextFlagCursor
        text='Hello World'
        color={theme === 'dark' ? '#FFFFFF' : '#000000'}
        font='monospace'
        textSize={12}
      />
    </div>
  );
}

export default index;
