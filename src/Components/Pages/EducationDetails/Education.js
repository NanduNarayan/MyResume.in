import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../css/Global.css";
import { Card, Divider } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CourseData from "./CourseData";
import DateSelect from "../../DateSelect";
import ControlButtons from "../../ControlButtons";
import AddButton from "../../AddButton";
import DeleteItemButton from "../../DeleteItemButton";
import useFormSubmit from "../../../Custom Hooks/useFormSubmit";

const initialize = {
	courseData: { institute: '', field: '', percentage: null },
	duration: { start: 2014, end: 2018 }
}

function Education() {
	const store = useSelector((state) => state.education);
	const [dataList, setDataList] = useState([{ ...initialize },]);
	const { handleSubmit, errors } = useFormSubmit();

	useEffect(() => {
		setDataList([...store]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [store])
	const submitForm=(e)=>{
        e.preventDefault();
        handleSubmit("education",dataList)
    }

	return (
		<>
			<Card id="form-card-wrapper" >
				<h2>Education Information</h2>
				<form className="form-wrapper" onSubmit={submitForm}>
					{(dataList &&
						<Carousel stopAutoPlayOnHover className="form-carousel-wrapper" navButtonsAlwaysInvisible
							activeIndicatorIconButtonProps={{ style: { color: 'red', width: "1.5rem" } }}>
							{dataList.map((item, index) => (
								<div key={index + '#' + crypto.randomUUID}>
									<DeleteItemButton setData={setDataList} delIndex={index} />
									<CourseData getData={input => {
										const updatedList = dataList.map((item, i) => (
											index === i ? { ...item, courseData: { ...input } } : item
										))
										setDataList([...updatedList]);
									}} storeData={item.courseData} errors={(errors?.filter(err => err.key === index)[0])} />
									<Divider />
									<DateSelect getData={input => {
										const updatedList = dataList.map((item, i) => (
											index === i ? { ...item, duration: { ...input } } : item
										))
										setDataList([...updatedList]);
									}} storeData={item.duration} errors={errors?.filter(err => err.key === index)} />
								</div>))}
						</Carousel>)}
					<AddButton setData={setDataList} init={initialize} />
					<ControlButtons back={"/details/personal"} submit={submitForm} />
				</form>
			</Card>
		</>
	);
}
export default Education;