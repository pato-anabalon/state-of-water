import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ScaleToggle({ scaleHandler, scale }) {
  return (
    <ToggleButtonGroup
      value={scale}
      exclusive
      onChange={scaleHandler}
      aria-label='scale selector'
    >
      <ToggleButton value='celsius' aria-label='celsius scale'>
        °C
      </ToggleButton>
      <ToggleButton value='fahrenheit' aria-label='fahrenheit scale'>
        °F
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
