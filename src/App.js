import './App.css';
import Header from './Components.js/Header';
import Home from './Components.js/Home';
// import store from './storage/store';
// import { Provider } from 'react-redux';

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        {/* <div>{store}</div> */}
        <Header />
        <Home />
      </div>
    // </Provider>
  );
}

export default App;
