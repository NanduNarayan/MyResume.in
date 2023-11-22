import React, { useEffect, useState } from "react";
import "../../css/Inputs.css";
import '../../css/Global.css';
import { Divider } from "@mui/material";

function ExpDetails({ storeData, getData, errors }) {
	const [data, setData] = useState({
		company: "",
		jobTitle: "",
		description: "",
	});
	useEffect(() => {
		setData({ ...storeData });
	}, [storeData]);

	const updateData = (e) => {
		const { name, value } = e.target;
		setData((prevData) => {
			return { ...prevData, [name]: value };
		});
	};

	return (
		<>
			<div onBlurCapture={() => getData(data)}>
				<section className="item">
					<label htmlFor="company">Company Name</label>
					<input
						type="text"
						name="company"
						required
						value={data.company}
						onChange={updateData}
            className={`inp-class ${data?.company?"filled":(errors?.company?"empty":null)}`}
					></input>
				</section>
				<section className="item">
					<label htmlFor="jobTitle">Job Title</label>
					<input
						type="text"
						name="jobTitle"
						required
						value={data.jobTitle}
						onChange={updateData}
            className={`inp-class ${data?.jobTitle?"filled":(errors?.jobTitle?"empty":null)}`}
					></input>
				</section>
        <Divider/>
				<section className="item">
					<label htmlFor="Description">Experience Summary</label>
					<textarea
						rows="5"
						name="description"
						required
						value={data?.description}
            style={{minWidth:"60%"}}
						onChange={updateData}
            className={`inp-class ${data?.description?"filled":(errors?.description?"empty":null)}`}
					></textarea>
				</section>
			</div>
		</>
	);
}

export default ExpDetails;
