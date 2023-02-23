import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";



const App = () => {
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const showCartHandler=()=>{
        setCartIsVisible(true)
    }

    const hideCartHandler=()=>{
        setCartIsVisible(false);
    }

    return (
    <>
        {cartIsVisible && <Cart></Cart>}
      <Header OnShowCart={showCartHandler} onHideCart={hideCartHandler}></Header>
        <main>
            <Meals></Meals>
        </main>
    </>
  );
};

export default App;
