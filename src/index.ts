/* eslint-disable no-console */
import fs from "node:fs/promises";

import getTheme from "./theme";

console.log("Building...");

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		fs.writeFile(
			"./themes/undefined.json",
			`${JSON.stringify(getTheme(), null, "\t")}\n`,
		),
	)
	.catch(() => process.exit(1));

console.log("Built!");
