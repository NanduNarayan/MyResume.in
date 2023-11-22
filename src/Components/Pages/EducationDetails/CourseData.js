import React, { useEffect, useState } from "react";
import "../../css/Inputs.css";
import "../../css/Global.css";


function CourseData({storeData,getData,errors}) {
	const [data, setData] = useState({institute:'', field:'', percentage:0});
	useEffect(() => {
		setData({ ...storeData });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [storeData]);
	console.log(errors)

	const updateData=(e)=>{
		const {name,value}=e.target;
		setData(prevData=>{
			const updates={...prevData};
			updates[name]=value;
			return {...updates}
		})
	}

	return (
		<div  onBlurCapture={()=>getData(data)}>
			<section className="item">
			<label className="main-label">Institution</label>
			<input
				type="text"
				required
				name="institute"
				value={data?.institute}
				onChange={updateData}
				className={`inp-class ${data?.institute ? "filled" : (errors?.institute ? "empty" : null)}`}
			/>
			</section>
			<section className="item">
			<label className="main-label">Course Name or Specialization</label>
			<input
				type="text"
				required
				name="field"
				value={data.field}
				onChange={updateData}
				className={`inp-class ${data?.field ? "filled" : (errors?.field ? "empty" : null)}`}
			/>
			</section>
			<section className="item">
			<label className="main-label">Total score <b>(%)</b></label>
			<input
				type="number"
				max={100}
				required
				name="percentage"
				value={data.percentage}
				onChange={updateData}
				className={`inp-class ${data?.percentage ? "filled" : (errors?.percentage ? "empty" : null)}`}
			/>
			</section>		
		</div>
	);
}

export default CourseData;