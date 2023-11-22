import React, { useEffect, useState } from "react";
import "../../css/Global.css";
import "../../css/Inputs.css";
import Ratings from "./Ratings";

function SkillsInput({ storeData, errors, skillDataUpdater }) {
	const [data, setData] = useState({skillName:"", rating: 2.5});
	const store = structuredClone(storeData);
	useEffect(() => {
		if (store.skillName && store.rating) setData({ ...store });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [store]);

	return (
		<div className="wrapper" onBlurC={() => skillDataUpdater(data)}>
			<section className="item">
				<label htmlFor="skillName">Skill</label>
				<input
					required
					name="skillName"
					type="text"
					defaultValue={store.skillName}
					onChange={e=>setData({...data, skillName: e.target.value})}
                    className={`inp-class ${data?.skillName?"filled":(errors?.skillName?"empty":null)}`}
				/>
			</section>
			<section className="item">
				<label htmlFor="rating">Proficiency</label>
				<Ratings itemRating={store?.rating||2.5} getRating={r=>setData({...data,rating:r})} />
			</section>
		</div>
	);
}

export default SkillsInput;
