import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { updateUserData } from '../features/auth/service';
import { getDatas, getToken } from '../features/auth/userSlice'



function NameUpdater() {

    const dispatch = useDispatch()
    const {firstName,lastName} = useSelector((state) => state.user) 
    const [updating, setUpdating] = useState(false)
    const toggleUpdater = () => {
        setUpdating(!updating)
    }

    useEffect(() => {
        if (getToken()) {
          dispatch(getDatas())
        }
    },[])

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

    // on SUBMIT dispatch datas
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
            ) : (
                    <>
                        <form onSubmit={onSubmit} >
                            <div className="input-wrapper-updater">
                                <input name="firstN" type="text" id="firstN" value={firstN} onChange={onChange} placeholder={firstName} required minLength={2}/>
                                <input name="lastN" type="text" id="lastN" value={lastN} onChange={onChange} placeholder={lastName} required minLength={2}/>
                            </div>
                            <button className="edit-button" type="submit" >Save</button>
                            <button className="edit-button" onClick={toggleUpdater} >Cancel</button>
                        </form>
                    </>
                )
            }
        </>);
}
export default NameUpdater;