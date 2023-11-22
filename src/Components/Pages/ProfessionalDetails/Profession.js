import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Divider } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import SkillsInput from "./SkillsInput";
import ControlButtons from "../../ControlButtons";
import AddButton from "../../AddButton";
import DeleteItemButton from "../../DeleteItemButton";
import useFormSubmit from "../../../Custom Hooks/useFormSubmit";
import "../../css/Inputs.css";
import "../../css/Global.css";

function Profession() {
	const store = useSelector((state) => state.profession);
	const [data, setData] = useState({
		skills: [{ skillName: "", rating: 2.5 }],
		summary: "",
		jobRole: "",
	});
	const {handleSubmit,errors}=useFormSubmit();
	useEffect(() => {
		setData({ ...store });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [store]);

	const generalDataHandler = (e) => {
		const { name, value } = e.target;
		setData((prevData) => {
			return { ...prevData, [name]: value };
		});
	};
	const submitForm=(e)=>{
        e.preventDefault();
        handleSubmit("profession",data)
    }
	return (
		<>
			<Card id="form-card-wrapper">
				<form className="form-wrapper" onSubmit={submitForm}>
					<section className="item">
						<label htmlFor="jobRole">Job Role</label>
						<input
							className={`inp-class ${
								data?.jobRole ? "filled" : errors?.jobRole ? "empty" : null
							}`}
							required
							name="jobRole"
							type="text"
							value={data.jobRole}
							onChange={generalDataHandler}
                            placeholder="Eg: Web Designer"
						/>
					</section>
                    <Divider/>
					<section className="item">
						<label htmlFor="summary">Summary/Objective</label>
						<textarea
							className={`inp-class ${
								data?.summary ? "filled" : errors?.summary ? "empty" : null
							}`}
							style={{ width: "100%" }}
							value={data.summary}
							required
							name="summary"
							rows="5"
							placeholder="A brief summary about your carrier goals"
							onChange={generalDataHandler}
						/>
					</section>
                    <Divider/>
					<section >
						<label>
							<b>Skills</b>
						</label>
						<Carousel stopAutoPlayOnHover className="form-carousel-wrapper" navButtonsAlwaysInvisible
							activeIndicatorIconButtonProps={{ style: { color: 'red', width: "1.5rem" } }}>
							{data?.skills.map((skill, index) => (
								<div key={index + "$" + crypto.randomUUID()}>
									<DeleteItemButton setData={setData} delIndex={index} isSkillsPage={true}/>
									<SkillsInput
										storeData={skill}
										skillDataUpdater={(inp) => {
											const updatedSkills = data.skills.map((item, i) =>
												index === i ? { ...inp } : item
											);
											setData((prevData) => {
												return { ...prevData, skills: [...updatedSkills] };
											});
										}}
										errors={errors?.skillErrors.filter(
											(skill, i) => skill.key === i
										)[0]||{}}
									/>
								</div>
							))}
						</Carousel>
					</section>
					<AddButton setData={setData} init={{skillName:"",rating:2.5}} isSkillPage={true}/>
				<ControlButtons back={"/details/education"} submit={submitForm} />
				</form>
			</Card>
		</>
	);
}

export default Profession;
