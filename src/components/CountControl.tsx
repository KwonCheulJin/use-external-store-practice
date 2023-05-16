import useCounterStore from '../hooks/useCounterStore';


export default function CountControl() {
  const store = useCounterStore();

  const handleClickInCrease = () => {
    store.increase();
  }
  const handleClickDeCrease = () => {
    store.decrease();
  }
  return (
    <div>
      <p>{store.count}</p>
      <button type='button' onClick={handleClickInCrease}>
        Increase
      </button>
      <button type='button' onClick={handleClickDeCrease}>
        Decrease
      </button>
    </div>
  )
}


