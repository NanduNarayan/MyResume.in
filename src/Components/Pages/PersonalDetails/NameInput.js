import React, { useEffect, useState } from 'react';
import '../../css/Global.css'
import '../../css/Inputs.css'
import { Divider } from '@mui/material';

function NameInput({ storeData, updater, errors }) {
    const [data, setData] = useState({ firstName: '', lastName: '' });
    useEffect(() => {
        setData({ ...storeData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeData])

    const dataUpdater = e => {
        const { name, value } = e.target;
        setData(prevData => { return { ...prevData, [name]: value } })
    }
    return (
        <div onBlurCapture={() => updater(data)}>
            <label className='main-label'>Name <span><b style={{ color: "red" }}>*</b></span></label>
            <section className="item" >
                <label><span><b style={{color:"red"}}>*</b></span>First Name</label>
                <input name='firstName' type='text' onChange={dataUpdater}
                    value={data?.firstName} className={`inp-class ${data?.firstName ? "filled" : (errors?.firstName ? "empty" : null)}`} />
            </section>
            <section className="item">
                <label><span><b style={{color:"red"}}>*</b></span>Last Name</label>
                <input name='lastName' type='text' onChange={dataUpdater}
                    value={data.lastName} className={`inp-class ${data?.lastName ? "filled" : (errors?.lastName ? "empty" : null)}`} />
            </section>
            <Divider/>
        </div>
    )
}

export default NameInput