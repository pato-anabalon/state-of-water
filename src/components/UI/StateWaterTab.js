import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ color: '#fff' }} variant='h6'>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function StateWaterTab({
  stateHandler,
  value,
  statusChangePoints,
}) {
  return (
    <Box sx={{ width: '100%', marginTop: '50px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={stateHandler}
          aria-label='state water panel'
          variant='fullWidth'
        >
          <Tab label='Solid' {...a11yProps(0)} />
          <Tab label='Liquid' {...a11yProps(1)} />
          <Tab label='Gas' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {`Water is in a SOLID STATE from ${statusChangePoints[0]} degrees and below`}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {`Water is in a LIQUID STATE between ${
          +statusChangePoints[0] + 1
        } and ${+statusChangePoints[1] - 1} degrees`}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {`Water is in a GASEOUS STATE from ${statusChangePoints[1]} degrees and above`}
      </TabPanel>
    </Box>
  );
}
