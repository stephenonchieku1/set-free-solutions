import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import {ViewInvoice} from "./pages/ViewInvoice"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';
import PageNotFound from './pages/PageNotFound';
import About from "../src/components/About";
import Services from "./components/Services/Services"
import Faq from "./components/faq"
import Dropdownmenu from './components/dropdownmenu';
import Progress from './components/progress';

const Auth = lazy(()=> import('./pages/Auth'))
const CreateInvoice = lazy(()=> import('./pages/CreateInvoice'))
const Home = lazy(()=> import('./pages/Home'))
const Dashboard = lazy(()=> import('./pages/Dashboard'))
const SetupProfile = lazy(()=> import('./pages/SetupProfile'))

const theme = createTheme({
  typography: {
    fontFamily: [
      'Sora',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/new/invoice" element={<CreateInvoice/>}/>
        <Route path="/view/invoice/:id" element={<ViewInvoice/>}/>
        <Route path="/profile" element={<SetupProfile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/faq'element={<Faq/>}/>
        <Route path='/progress' element={<Progress/>}/>
   <Route path="/menu"element={<Dropdownmenu/>}/>
      </Routes>
      </Suspense>
        <ToastContainer />
       
      </ThemeProvider>
    </div>
  );
}

export default App;
