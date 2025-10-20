// // import './App.css'
// import WeatherApp from "./WeatherApp";


// function App() {

//   return (
//     <>
//    <WeatherApp/>
//     </>
//   );
// }

// export default App


import WeatherApp from "./WeatherApp";
import { ThemeProvider } from "./context/ThemeContext";
import { UnitProvider } from "./context/UnitContext";

function App() {
  return (
    <ThemeProvider>
      <UnitProvider>
        <main>
          <WeatherApp />
        </main>
      </UnitProvider>
    </ThemeProvider>
  );
}

export default App;