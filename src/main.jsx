import ReactDOM from 'react-dom/client'
import { AppProvider } from './hooks';
import { ToastContainer} from 'react-toastify';
import MyRoutes from './routes/routes';
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AppProvider>
  <MyRoutes/>
  </AppProvider>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme='colored'/>
  </>
)
