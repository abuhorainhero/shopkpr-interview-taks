import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './AppRouter';
import "./scss/common/common.scss";

export const api_url = `https://shopkpr-taks-api.herokuapp.com`;

function App() {
  return (
    <AppRouter />
  );
}

export default App;
