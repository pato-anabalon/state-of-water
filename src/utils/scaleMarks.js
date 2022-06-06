const scale = {
  celsius: {
    marks: [
      {
        value: -18,
        label: '-18°C',
      },
      {
        value: 0,
        label: '0°C',
      },
      {
        value: 25,
        label: '25°C',
      },
      {
        value: 37,
        label: '37°C',
      },
      {
        value: 100,
        label: '100°C',
      },
      {
        value: 120,
        label: '120°C',
      },
    ],
    defaultValue: 25,
    defaultState: 1,
    minValue: -18,
    maxValue: 120,
    name: 'celsius',
    statusChangePoints: [0, 100],
  },
  fahrenheit: {
    marks: [
      {
        value: 0,
        label: '0°F',
      },
      {
        value: 32,
        label: '32°F',
      },
      {
        value: 77,
        label: '77°F',
      },
      {
        value: 98,
        label: '98°F',
      },
      {
        value: 212,
        label: '212°F',
      },
      {
        value: 250,
        label: '250°F',
      },
    ],
    defaultValue: 77,
    defaultState: 1,
    minValue: 0,
    maxValue: 250,
    name: 'fahrenheit',
    statusChangePoints: [32, 212],
  },
};

export default scale;
