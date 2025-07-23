import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
const Controls = () =>
{
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () =>
  {
    dispatch({ type: "INCREMENT" });
    
  }

  const handleDecrement = () =>
  {
    dispatch({ type: "DECREMENT" });
  }

  const handleAddition = () =>
  {
    dispatch({
      type: "ADDITION",
      payload: { number: inputElement.current.value}
    })
    inputElement.current.value = '';
  }
  const handleSubtraction = () =>
  {
    dispatch({
      type: "SUBTRACTION",
      payload: { number: inputElement.current.value}
    })
    inputElement.current.value = '';
  }
  const handlePrivacy = () =>
  {
    console.log("PRIVACY BUTTOn")
    dispatch({
      type: "PRIVACY_TOGGLE",
    })
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-secondary btn-lg px-4" onClick={handleDecrement}>-1</button>
        <button type="button" className="btn btn-warning btn-lg px-4" onClick={handlePrivacy}>privacy</button>

      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center m-2">

        <input type="text" placeholder='Enter number' ref={inputElement} />
        <button type="button" className="btn btn-success btn-lg px-4" onClick={handleAddition}>ADD</button>
        <button type="button" className="btn btn-danger btn-lg px-4" onClick={handleSubtraction}>SUB</button>

      </div>
     
    </>
  )
}

export default Controls;