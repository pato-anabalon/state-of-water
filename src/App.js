import { ThemeProvider, createTheme } from '@mui/material/styles';
import WaterState from './components/pages/WaterState';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <WaterState />
    </ThemeProvider>
  );
}

export default App;
