import fs from "node:fs/promises";

import getTheme from "./theme";

fs.mkdir("./themes", { recursive: true })
	.then(() =>
		fs.writeFile(
			"./themes/undefined.json",
			`${JSON.stringify(getTheme(), null, "\t")}\n`,
		),
	)
	.catch(() => process.exit(1));
