import CustomThemeProvider from "./Components/CustomThemeProvider";
import Layout from "./Components/Layout";

function App() {
  return (
    <CustomThemeProvider>
      <Layout>Home page</Layout>
    </CustomThemeProvider>
  );
}

export default App;
