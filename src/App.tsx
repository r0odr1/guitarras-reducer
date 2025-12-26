import { useReducer } from "react";
import Guitar from "./components/Guitar";
import Heder from "./components/Header";
import useCart from "./hooks/useCart";
import { cartReducer, initialState } from "./reducers/cart-reducer";
function App() {
  const {
    cart,
    removeFromCart,
    decreaseFromCart,
    increseFromCart,
    clearCart,
    isEmmpty,
    cartTotal,
  } = useCart();

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <Heder
        cart={cart}
        removeFromCart={removeFromCart}
        increseFromCart={increseFromCart}
        decreaseFromCart={decreaseFromCart}
        clearCart={clearCart}
        isEmmpty={isEmmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
