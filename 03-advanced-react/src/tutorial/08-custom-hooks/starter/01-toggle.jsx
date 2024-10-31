
import useToggle from './useToggle'
const ToggleExample = () => {
 const {isShow, toggle}=useToggle(false)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={() => toggle(!isShow)}>
        toggle
      </button>
      {isShow && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
