import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import FunctionalComponent from './components/componentsTypes/FunctionalComponent';
// import ClassComponent from './components/componentsTypes/classComponent';
import Employee from './components/Employee/Employees';
function App() {
  return (
    <div className="App">
      <Header name="Hunter"  bgColor="black" color="#fff" />
      {/* <Sidebar />
      <Main 
        contentBackgroundColor="white"
        contentColor="black"
        name="Hunter"
      />

      <FunctionalComponent />
      <ClassComponent /> */}

      <Employee />

    </div>
  );
}

export default App;
