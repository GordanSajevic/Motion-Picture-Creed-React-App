import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './ui/common/AppRouter';
import {store} from './common/Store';
import './App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//store.dispatch(fetchScreenShows())

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
