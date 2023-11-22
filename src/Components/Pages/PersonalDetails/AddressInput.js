import React, { useEffect, useState } from 'react';
import '../../css/Inputs.css';
import '../../css/Global.css';

function AddressInput({ storeData, updater, errors }) {
  const [data, setData] = useState({
    location: "",
    street: "",
    landmark: "",
    pin: "",
  });
  useEffect(() => {
    setData({ ...storeData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData])

  const updateData = e => {
    const { name, value } = e.target;
    setData(prevData => { return { ...prevData, [name]: value } });
  }
  return (
    <div id='address-box' onBlurCapture={() => updater(data)}>
      <label className='main-label'>Address <span><b style={{ color: "red" }}>*</b></span>:</label>
      <section className="item">
        <label><span><b style={{ color: "red" }}>*</b></span> House/Apartment Number </label>
        <input type='text' required name="location" className={`inp-class ${data?.location ? "filled" : (errors?.location ? "empty" : null)}`}
          onChange={updateData} value={data?.location || ""} placeholder='House/Flat/Apartment No.' />
      </section>
      <section className="item">
        <label><span><b style={{ color: "red" }}>*</b></span> Street Name</label>
        <input type='text' required placeholder='Street' name="street" className={`inp-class ${data?.street ? "filled" : (errors?.street ? "empty" : null)}`}
          onChange={updateData} value={data?.street || ""} />
      </section>
      <section className="item">
        <label> Landmark</label>
        <input type='text' placeholder='Landmark  //Optional' name="landmark"
          onChange={updateData} value={data?.landmark || ""} className="inp-class" />
      </section>
      <section className="item">
        <label><span><b style={{ color: "red" }}>*</b></span> Pin Code</label>
        <input type="number" required maxLength={6} placeholder="pin code" name="pin"
          onChange={updateData} value={data?.pin || ""} className={`inp-class ${data?.pin ? "filled" : (errors?.pin ? "empty" : null)}`} />
        {/* {(errors.pin &&
          <label style={{ color: 'red', fontStyle: 'italic' }}>{errors.pin}</label>)} */}
      </section>
    </div>
  )
}

export default AddressInput;