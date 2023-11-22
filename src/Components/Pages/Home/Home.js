import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box,  Container,  Typography } from "@mui/material";
import { DoubleArrowRounded } from "@mui/icons-material";
import "./Home.css";

const title = (
	<span className="title">
		MyResume<b className="dot">.</b>in
	</span>
);
function Home() {
	const navigate = useNavigate();
	return (
		<>
			<Container id="home-page">
				<Box className="header">
					<Typography
						variant="h2"
						component="h1"
						align="left"
						gutterBottom
						mt={2}
					>
						Unlock Your Career Potential with {title}
					</Typography>
				</Box>
				<section className="main-content">
				<section className="sub-heading">
					<Typography variant="h4" component="h2" gutterBottom>
						Craft Professional Resumes in Minutes
					</Typography>
				</section>
					<Typography variant="body1" component="p" align="center">
						Welcome to {title}, your one-stop destination for creating polished
						and impactful resumes effortlessly. We understand the importance of
						a well-crafted resume in today's competitive job market. That's why
						we've designed a user-friendly platform that empowers you to build
						professional resumes that stand out. 1
					</Typography>
				</section>
				<section className="main-btn">
					<Button
						variant="contained"
						id="create-btn"
						onClick={() => navigate("/details/personal")}
					>
						<Typography
							padding={1}
							variant="button"
							sx={{ fontWeight: "bold" }}
						>
							Let's Get Started
						</Typography>
						<DoubleArrowRounded fontSize="medium" />
					</Button>
				</section>
			</Container>
		</>
	);
}

export default Home;
