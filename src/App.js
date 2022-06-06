import CustomThemeProvider from "./Components/CustomThemeProvider";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <CustomThemeProvider>
      <HomePage />
    </CustomThemeProvider>
  );
}

export default App;
