import fs from "node:fs/promises";

import getTheme from "./theme";

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		fs.writeFile(
			"./themes/undefined.json",
			`${JSON.stringify(getTheme(), null, 2)}\n`,
		),
	)
	.catch(() => process.exit(1));
