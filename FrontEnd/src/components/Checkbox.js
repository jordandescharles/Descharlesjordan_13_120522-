import { useState } from "react";
import { useDispatch } from 'react-redux';
import { isChecked } from '../features/auth/authSlice'

const Checkbox = ({ label, value }) => {

  const dispatch = useDispatch()
  const [checked, setChecked] = useState(true);
 
  const handleChange = () => {
    setChecked(!checked);
    dispatch(isChecked(checked))
  };

  return (
    <label>
      <input type="checkbox" name="checked" checked={value} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox