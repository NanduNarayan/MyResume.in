const initialState = {
	personal: {
		name: {
			firstName: "Nandu Narayan",
			lastName: "Suresh",
		},
		contacts: {
			phone: "8848994842",
			email: "nan@foo.kam",
		},
		address: {
			location: "here",
			street: "near here",
			landmark: "there",
			pin: "222000",
		},
	},
	profession: {
		jobRole: "Boss",
		summary: "Im Awesome doodz",
		skills: [
			{
				skillName: "Web Developer",
				rating: 5,
			},
		],
	},
	education: [
		{
			courseData: {
				institute: "cool skool",
				field: "awesome",
				percentage: "100",
			},
			duration: {
				start: 1996,
				end: 9999,
			},
		},
	],
	experiences: [
		{
			details: {
				company: "bos kompany",
				jobTitle: "boss",
				description: "yeyyyyyyyyya",
			},
			duration: { start: 2000, end: 9999, }
		},
	],
};

export default initialState;
