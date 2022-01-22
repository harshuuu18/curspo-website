/** @format */

import React, { useEffect, useState } from "react";
import { GetPageDetails } from "../network/services";
import About from "./About/About";
import Contents from "./Contents/Contents";
import Poster from "./Poster/Poster";

function HomePage() {
	const [details, setDetails] = useState("");

	useEffect(() => {
		GetPageDetails({ setDetails });
	}, []);
	if (!details) {
		return <p>Loading....</p>;
	}

	const { appointments, contents, creator, programs, sessions } = details;

	return (
		<>
			<Poster />
			<About about={creator} />
			<Contents
				contents={contents}
				programs={programs}
				appointments={appointments}
				sessions={sessions}
			/>
		</>
	);
}

export default HomePage;
