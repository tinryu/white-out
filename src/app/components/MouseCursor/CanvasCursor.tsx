'use client';

import useCanvasCursor from './use-canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none fixed inset-0 z-20' id='canvas' />;
};
export default CanvasCursor;
