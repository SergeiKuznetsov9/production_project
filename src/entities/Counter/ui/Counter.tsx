import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div>
      <h1>Value = {counterValue}</h1>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};
