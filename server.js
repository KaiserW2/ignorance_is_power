const express = require("express");
const fs = require("fs");
const JSCPP = require("JSCPP");


let code = fs.readFileSync( "./cpp_src/double.cpp" ).toString();



const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.get("/api/food", (req, res) => {
	const param = req.query.q;

	if (!param) {
		res.json({
			error: "Missing required parameter `q`"
		});
		return;
	}

	let output = "";
	let config = {
		stdio: {
			write: function(s) {
				output += s;
			}
		}
	};
	let exitcode = JSCPP.run(code, param, config);

	res.json({
		output: output,
		exitcode: exitcode
	});
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
