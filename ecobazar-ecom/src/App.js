import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';

function App() {

  return (
    <Provider store={store}>
      <ProductList />
      {/* Other components */}
    </Provider>
  );
}

export default App;
