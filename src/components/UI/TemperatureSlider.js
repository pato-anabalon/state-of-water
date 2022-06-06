import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function TemperatureSlider({
  degreeHandler,
  scaleMarksData,
  degree,
}) {
  return (
    <Box sx={{ margin: '0 55px' }}>
      <Slider
        key={`slider-${scaleMarksData.name}`}
        aria-label='Custom marks'
        defaultValue={scaleMarksData.defaultValue}
        value={degree}
        onChange={degreeHandler}
        step={1}
        valueLabelDisplay='auto'
        marks={scaleMarksData.marks}
        min={scaleMarksData.minValue}
        max={scaleMarksData.maxValue}
      />
    </Box>
  );
}
