/* eslint-disable react/prop-types */
import { Checkbox } from '../components'

const CheckboxWrapper = ({ label,isActive,onClick }) => {
  return (
    <div className='w-80 h-[42px] flex justify-between px-[15px] items-center' onClick={onClick}><div>{label}</div><Checkbox isActive={isActive} /></div>
  )
}

export default CheckboxWrapper