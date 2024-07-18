import theme from './src/theme/theme';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor='transparent'
        translucent
      />
      <Home/>
    </ThemeProvider>
  );
}