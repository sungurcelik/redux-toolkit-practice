import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.counterSlice);

  return (
    <div className="d-flex gap-4 align-items-center justify-content-center vh-100">
      <button onClick={() => dispatch(decrease())} className="bg-danger">
        Eksi
      </button>
      <span className="fw-bold fs-2">{state.count}</span>
      <button onClick={() => dispatch(increase())} className="bg-primary">
        Artı
      </button>
      <button onClick={()=>dispatch(setCount(100))}>Sıfırla</button>
    </div>
  );
};

export default Counter;
