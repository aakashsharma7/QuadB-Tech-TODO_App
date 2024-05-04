import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import Todo from "./Components/Todo";
import { store } from "./store/Store";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fd0054",
      },
      secondary: {
        main: "#9df9ef",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Todo />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
