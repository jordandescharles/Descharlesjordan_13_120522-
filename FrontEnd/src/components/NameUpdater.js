import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react'
import { updateUserData } from '../features/auth/authService';
import { getDatas} from '../features/auth/userSlice'


function NameUpdater() {
    const dispatch = useDispatch()

    const {firstName,lastName} = useSelector((state) => state.user)
    const [updating, setUpdating] = useState(false)

    const toggleUpdater = () => {
        setUpdating(!updating)
    }

    //define Formdata State
    const [formData, setFormData] = useState({
        firstN: '',
        lastN: '',
    })
    const { firstN, lastN } = formData
    //allows to make changes on form with react 
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // on SUBMIT dispatch datat to login
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            firstN,
            lastN,
        }
        updateUserData(userData)
        toggleUpdater()
        dispatch(getDatas())

    }

    return (
        <>
            {!updating ? (
                <div>
                    <h1 className='name'> {firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={toggleUpdater}>
                        Edit Name
                    </button>
                </div>
            ) :
                (
                    <>
                        <form onSubmit={onSubmit} >
                            <div className="input-wrapper-updater">
                                <input name="firstN" type="text" id="firstN" value={firstN} onChange={onChange} placeholder={firstName} />
                                <input name="lastN" type="text" id="lastN" value={lastN} onChange={onChange} placeholder={lastName} />
                            </div>

                            <button className="sign-in-button" type="submit" >Sign In</button>
                        </form>
                    </>
                )
            }

        </>);

}

export default NameUpdater;