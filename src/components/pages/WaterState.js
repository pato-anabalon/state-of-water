import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TemperatureSlider from '../UI/TemperatureSlider';
import ScaleToggle from '../UI/ScaleToggle';
import StateWaterTab from '../UI/StateWaterTab';
import scale from '../../utils/scaleMarks';
import stateWater from '../../utils/stateOfWater';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: '50px',
}));

class WaterState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleName: scale.celsius.name,
      degree: scale.celsius.defaultValue,
      scaleData: scale.celsius,
      stateOfWater: scale.celsius.defaultState,
      statusChangePoints: scale.celsius.statusChangePoints,
    };

    this.degreeHandleChange = this.degreeHandleChange.bind(this);
    this.scaleHandleChange = this.scaleHandleChange.bind(this);
    this.stateHandleChange = this.stateHandleChange.bind(this);
  }

  degreeHandleChange(event, newDegree) {
    this.setState({ degree: newDegree });

    if (newDegree <= this.state.statusChangePoints[0]) {
      this.setState({ stateOfWater: stateWater['solid'] });
    } else if (
      newDegree > this.state.statusChangePoints[0] &&
      newDegree < this.state.statusChangePoints[1]
    ) {
      this.setState({ stateOfWater: stateWater['liquid'] });
    } else {
      this.setState({ stateOfWater: stateWater['gas'] });
    }
  }

  scaleHandleChange(event, newScale) {
    newScale &&
      this.setState({
        scaleName: newScale,
        scaleData: scale[newScale],
        degree: scale[newScale].defaultValue,
        stateOfWater: scale[newScale].defaultState,
        statusChangePoints: scale[newScale].statusChangePoints,
      });
  }

  stateHandleChange(event, newState) {
    switch (newState) {
      case 0:
        this.setState({
          stateOfWater: stateWater['solid'],
          degree: scale[this.state.scaleName].statusChangePoints[0],
        });
        break;
      case 2:
        this.setState({
          stateOfWater: stateWater['gas'],
          degree: scale[this.state.scaleName].statusChangePoints[1],
        });
        break;
      default:
        this.setState({
          stateOfWater: stateWater['liquid'],
          degree: scale[this.state.scaleName].defaultValue,
        });
        break;
    }
  }

  componentDidMount() {
    console.log('🚀 - file: WaterState.js - line 92 - componentDidMount');
  }

  render() {
    console.log('🚀 - file: WaterState.js - line 96 - render');
    return (
      <React.Fragment>
        <Box className='App' sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>Move the slider to change the state of the water</Item>
            </Grid>
            <Grid item xs={12} md={8}>
              <TemperatureSlider
                degreeHandler={this.degreeHandleChange}
                scaleMarksData={this.state.scaleData}
                degree={this.state.degree}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ScaleToggle
                scaleHandler={this.scaleHandleChange}
                scale={this.state.scaleName}
              />
            </Grid>
            <Grid item xs={12}>
              <StateWaterTab
                stateHandler={this.stateHandleChange}
                value={this.state.stateOfWater}
                statusChangePoints={
                  scale[this.state.scaleName].statusChangePoints
                }
              />
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    );
  }
}

export default WaterState;
