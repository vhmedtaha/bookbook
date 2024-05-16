import {lazy, Suspense, useContext, useEffect} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './styles/App.css';
import ChatBtn from './components/ChatBtn';
import Footer from './components/Footer';
import { userContext } from './context/userContext';
import SearchResult from './components/SearchResult';
const Notfound=lazy(()=> import ('./components/Notfound'));
const Home = lazy(()=> import ('./components/Home'))
const Login = lazy(()=> import ('./components/Login'))
const Bookdetails = lazy(()=> import ('./components/Bookdetails'))
const ChatRoom = lazy(()=> import ( './components/ChatRoom'));
const SortedBooks = lazy(()=> import ( './components/SortedBooks'));
const Signup=lazy(()=> import ('./components/Signup'));
const Userprofile=lazy(()=> import ('./components/Userprofile'));
const Usercart=lazy(()=> import ('./components/Usercart'));
const MyBooks=lazy(()=> import ('./components/MyBooks'));
const Favorite=lazy(()=> import ('./components/Favorite'));
const SuccessfullPayment=lazy(()=> import ('./components/SuccessfullPayment'));
const FailedPayment=lazy(()=> import ('./components/FailedPayment'));

function App() {
  const {setUserData} = useContext(userContext);

  useEffect(()=>{
    setUserData()
  },[])
  
  return (
    <div className="App">
      <Suspense fullback={<div className='loading'> ....Ooops</div>}>
      <BrowserRouter>
      {/* <Navbar/> */}
      <ChatBtn/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='*' element={<Navigate to={'/notfound'}/>}/> */}
        <Route path='*' element={<Notfound/>}/>
        <Route path='mybooks' element={<MyBooks/>}/>
        <Route path='favorite' element={<Favorite/>}/>
        <Route path='successfullpayment' element={<SuccessfullPayment/>}/>
        <Route path='failedpayment' element={<FailedPayment/>}/>
        <Route path='notfound' element={<Notfound/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='search' element={<SearchResult/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='cart' element={<Usercart/>}/>
        <Route path='booksdetails/:id' element={<Bookdetails/>}/>
        <Route path='userprofile' element={<Userprofile/>}/>
        <Route path='chatroom' element={<ChatRoom/>}/>
        <Route path='bookscategories/:category' element={<SortedBooks/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
