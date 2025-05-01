import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState(""); // "" para que ninguna esté activa al inicio

	const getLightClass = (lightColor) => {
		return "rounded-circle m-2"
			+ (color === lightColor ? ` bg-${lightColor}` : " bg-secondary")
			+ " border border-dark"
			+ " light";
	};

	return (
		<div className="text-center mt-5">
			<div className="d-flex flex-column align-items-center" style={{ height: "200px", width: "80px", background: "#333", padding: "10px", borderRadius: "10px" }}>
				<div
					onClick={() => setColor("danger")}
					className={getLightClass("danger")}
					style={{ width: "50px", height: "50px", cursor: "pointer" }}
				></div>
				<div
					onClick={() => setColor("warning")}
					className={getLightClass("warning")}
					style={{ width: "50px", height: "50px", cursor: "pointer" }}
				></div>
				<div
					onClick={() => setColor("success")}
					className={getLightClass("success")}
					style={{ width: "50px", height: "50px", cursor: "pointer" }}
				></div>
			</div>
		</div>
	);
};

export default Home;