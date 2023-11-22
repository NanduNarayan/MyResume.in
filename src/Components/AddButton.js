import React from "react";
import { Button } from "@mui/material";

function AddButton({ setData, init, isSkillPage = false }) {
	const handleClick = () => {
		if (isSkillPage) {
			setData((prevData) => {
				const updatedSkills = [...prevData.skills, { ...init }];
				return { ...prevData, skills: [...updatedSkills] };
			});
		} else {
			setData((prevData) => [...prevData, { ...init }]);
		}
	};
	return (
		<div className="add-btn">
			<Button variant="outlined" id="add-btn" onClick={handleClick}>
				Add
			</Button>
		</div>
	);
}

export default AddButton;
