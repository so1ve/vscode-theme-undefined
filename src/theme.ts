import { UndefinedTheme, colors } from "./colors";
import { toArray } from "./utils";

const NAME = "Undefined";

export default function getTheme() {
	const undef = (key: keyof typeof UndefinedTheme, op = "") =>
		UndefinedTheme[key] + op;

	const foreground = undef("foreground");
	const secondaryForeground = undef("secondaryForeground");
	const activeForeground = undef("activeForeground");
	const primary = undef("primary");

	const cellBorder = undef("cellBorder");
	const border = undef("border");
	const background = undef("background");
	const activeBackground = undef("activeBackground");

	const punctuation = undef("punctuation");

	const selectionBackgroundInActive = "#eeeeee08";
	const selectionBackgroundActive = "#eeeeee15";
	const selectionBackground = "#eeeeee15";

	const theme = {
		name: NAME,
		base: "vs-dark",
		colors: {
			foreground,
			"focusBorder": "#00000000",
			"descriptionForeground": secondaryForeground,
			"errorForeground": undef("red"),

			"textLink.foreground": primary,
			"textLink.activeForeground": primary,
			"textBlockQuote.background": background,
			"textBlockQuote.border": border,
			"textCodeBlock.background": background,
			"textPreformat.foreground": colors.gray[6],
			"textSeparator.foreground": colors.gray[3],

			"button.background": primary,
			"button.foreground": background,
			"button.hoverBackground": primary,

			"checkbox.background": activeBackground,
			"checkbox.border": colors.gray[1],

			"dropdown.background": background,
			"dropdown.border": border,
			"dropdown.foreground": foreground,
			"dropdown.listBackground": activeBackground,

			"input.background": activeBackground,
			"input.border": border,
			"input.foreground": foreground,
			"input.placeholderForeground": secondaryForeground,
			"inputOption.activeBackground": undef("ignored"),

			"badge.foreground": background,
			"badge.background": colors.gray,

			"progressBar.background": primary,

			"titleBar.activeForeground": activeForeground,
			"titleBar.activeBackground": background,
			"titleBar.inactiveForeground": colors.gray[5],
			"titleBar.inactiveBackground": background,
			"titleBar.border": activeBackground,

			"activityBar.foreground": foreground,
			"activityBar.inactiveForeground": undef("ignored"),
			"activityBar.background": background,
			"activityBarBadge.foreground": background,
			"activityBarBadge.background": activeForeground,
			"activityBar.activeBorder": primary,
			"activityBar.border": border,

			"sideBar.foreground": activeForeground,
			"sideBar.background": background,
			"sideBar.border": border,
			"sideBarTitle.foreground": foreground,
			"sideBarSectionHeader.foreground": foreground,
			"sideBarSectionHeader.background": background,
			"sideBarSectionHeader.border": border,

			"list.hoverForeground": foreground,
			"list.inactiveSelectionForeground": foreground,
			"list.activeSelectionForeground": foreground,
			"list.hoverBackground": activeBackground,
			"list.inactiveSelectionBackground": activeBackground,
			"list.activeSelectionBackground": activeBackground,
			"list.inactiveFocusBackground": background,
			"list.focusBackground": activeBackground,
			"list.highlightForeground": primary,

			"tree.indentGuidesStroke": colors.gray[1],

			"notificationCenterHeader.foreground": colors.gray[5],
			"notificationCenterHeader.background": background,
			"notifications.foreground": foreground,
			"notifications.background": background,
			"notifications.border": border,
			"notificationsErrorIcon.foreground": undef("red"),
			"notificationsWarningIcon.foreground": undef("orange"),
			"notificationsInfoIcon.foreground": undef("blue"),

			"pickerGroup.border": border,
			"pickerGroup.foreground": foreground,
			"quickInput.background": background,
			"quickInput.foreground": foreground,
			"quickInputList.focusBackground": activeBackground,

			"statusBar.foreground": activeForeground,
			"statusBar.background": background,
			"statusBar.border": border,
			"statusBar.noFolderBackground": background,
			"statusBar.debuggingBackground": activeBackground,
			"statusBar.debuggingForeground": activeForeground,
			"statusBarItem.prominentBackground": activeBackground,

			"editorGroupHeader.tabsBackground": background,
			"editorGroupHeader.tabsBorder": border,
			"editorGroup.border": border,

			"tab.activeForeground": foreground,
			"tab.inactiveForeground": colors.gray[5],
			"tab.inactiveBackground": background,
			"tab.activeBackground": background,
			"tab.hoverBackground": activeBackground,
			"tab.unfocusedHoverBackground": background,
			"tab.border": border,
			"tab.unfocusedActiveBorderTop": border,
			"tab.activeBorder": border,
			"tab.unfocusedActiveBorder": border,
			"tab.activeBorderTop": secondaryForeground,

			"breadcrumb.foreground": colors.gray[5],
			"breadcrumb.focusForeground": foreground,
			"breadcrumb.background": activeBackground,
			"breadcrumb.activeSelectionForeground": selectionBackgroundActive,
			"breadcrumbPicker.background": background,

			"editor.foreground": foreground,
			"editor.background": background,
			"editorWidget.background": background,
			"editor.foldBackground": "#eeeeee10",
			"editor.lineHighlightBackground": activeBackground,
			"editorLineNumber.foreground": undef("ignored"),
			"editorLineNumber.activeForeground": activeForeground,
			"editorIndentGuide.background": "#ffffff15",
			"editorIndentGuide.activeBackground": "#ffffff30",
			"editorWhitespace.foreground": "#ffffff15",

			"editor.findMatchBackground": "#e6cc7722",
			"editor.findMatchHighlightBackground": "#e6cc7744",
			"editor.inactiveSelectionBackground": selectionBackgroundInActive,
			"editor.selectionBackground": selectionBackground,
			"editor.selectionHighlightBackground": selectionBackgroundInActive,
			"editor.wordHighlightBackground": "#1c6b4825",
			"editor.wordHighlightStrongBackground": "#1c7b4835",
			"editorBracketMatch.background": "#4d937520",

			"diffEditor.insertedTextBackground": "#4d937522",
			"diffEditor.removedTextBackground": "#ab595922",

			"scrollbar.shadow": "#0000",
			"scrollbarSlider.background": undef("faded"),
			"scrollbarSlider.hoverBackground": undef("ignored"),
			"scrollbarSlider.activeBackground": undef("ignored"),
			"editorOverviewRuler.border": colors.white,

			"panel.background": background,
			"panel.border": border,
			"panelTitle.activeBorder": primary,
			"panelTitle.activeForeground": foreground,
			"panelTitle.inactiveForeground": colors.gray[4],
			"panelInput.border": colors.gray[1],

			"terminal.ansiBrightBlack": "#777777",
			"terminal.ansiBrightBlue": undef("blue"),
			"terminal.ansiBrightCyan": undef("cyan"),
			"terminal.ansiBrightGreen": undef("green"),
			"terminal.ansiBrightMagenta": undef("magenta"),
			"terminal.ansiBrightRed": undef("red"),
			"terminal.ansiBrightWhite": "#ffffff",
			"terminal.ansiBrightYellow": undef("yellow"),
			"terminal.ansiBlack": "#3f4451",
			"terminal.ansiBlue": undef("blue"),
			"terminal.ansiCyan": undef("cyan"),
			"terminal.ansiGreen": undef("green"),
			"terminal.ansiMagenta": undef("magenta"),
			"terminal.ansiRed": undef("red"),
			"terminal.ansiWhite": UndefinedTheme.terminalForeground,
			"terminal.ansiYellow": undef("yellow"),

			"gitDecoration.addedResourceForeground": undef("green"),
			"gitDecoration.modifiedResourceForeground": undef("blue"),
			"gitDecoration.deletedResourceForeground": undef("red"),
			"gitDecoration.untrackedResourceForeground": undef("cyan"),
			"gitDecoration.ignoredResourceForeground": undef("ignored"),
			"gitDecoration.conflictingResourceForeground": undef("orange"),
			"gitDecoration.submoduleResourceForeground": undef("secondaryForeground"),

			"editorGutter.modifiedBackground": undef("blue"),
			"editorGutter.addedBackground": undef("green"),
			"editorGutter.deletedBackground": undef("red"),

			"editorBracketHighlight.foreground1": undef("cyan"),
			"editorBracketHighlight.foreground2": undef("green"),
			"editorBracketHighlight.foreground3": undef("orange"),
			"editorBracketHighlight.foreground4": undef("magenta"),
			"editorBracketHighlight.foreground5": undef("yellow"),
			"editorBracketHighlight.foreground6": undef("blue"),

			"debugToolBar.background": background,
			"editor.stackFrameHighlightBackground": "#a707",
			"editor.focusedStackFrameHighlightBackground": "#b808",

			"peekViewEditor.matchHighlightBackground": "#ffd33d33",
			"peekViewResult.matchHighlightBackground": "#ffd33d33",
			"peekViewEditor.background": background,
			"peekViewResult.background": background,

			"settings.headerForeground": foreground,
			"settings.modifiedItemIndicator": primary,
			"welcomePage.buttonBackground": colors.gray[1],
			"welcomePage.buttonHoverBackground": colors.gray[2],

			"problemsErrorIcon.foreground": undef("red"),
			"problemsWarningIcon.foreground": undef("orange"),
			"problemsInfoIcon.foreground": undef("blue"),

			"editorError.foreground": undef("red"),
			"editorWarning.foreground": undef("orange"),
			"editorInfo.foreground": undef("blue"),
			"editorHint.foreground": undef("green"),

			"editorGutter.commentRangeForeground": undef("ignored"),
			"editorGutter.foldingControlForeground": undef("secondaryForeground"),

			"editorInlayHint.foreground": punctuation,
			"editorInlayHint.background": "#00000000",

			"editorStickyScroll.background": activeBackground,
			"editorStickyScrollHover.background": activeBackground,

			"menu.separatorBackground": border,

			"notebook.cellBorderColor": cellBorder,
		},
		semanticHighlighting: true,
		semanticTokenColors: {
			namespace: undef("namespace"),
			property: undef("property"),
			interface: undef("interface"),
			type: undef("interface"),
			class: undef("class"),
		},
		tokenColors: [
			{
				scope: ["comment", "punctuation.definition.comment", "string.comment"],
				settings: {
					foreground: undef("comment"),
				},
			},
			{
				scope: [
					"delimiter.bracket",
					"delimiter",
					"invalid.illegal.character-not-allowed-here.html",
					"keyword.operator.rest",
					"keyword.operator.spread",
					"keyword.operator.type.annotation",
					"keyword.operator.relational",
					"keyword.operator.assignment",
					"meta.brace",
					"meta.tag.block.any.html",
					"meta.tag.inline.any.html",
					"meta.tag.structure.input.void.html",
					"meta.type.annotation",
					"meta.embedded.block.github-actions-expression",
					"storage.type.function.arrow",
					"keyword.operator.type",
					"meta.objectliteral.ts",
					"punctuation",
				],
				settings: {
					foreground: punctuation,
				},
			},
			{
				scope: [
					"constant",
					"entity.name.constant",
					"variable.language",
					"meta.definition.variable",
				],
				settings: {
					foreground: undef("constant"),
				},
			},
			{
				scope: ["entity", "entity.name"],
				settings: {
					foreground: undef("function"),
				},
			},
			{
				scope: "variable.parameter.function",
				settings: {
					foreground,
				},
			},
			{
				scope: ["entity.name.tag", "tag.html"],
				settings: {
					foreground: undef("keyword"),
				},
			},
			{
				scope: "entity.name.function",
				settings: {
					foreground: undef("function"),
				},
			},
			{
				scope: ["keyword", "storage.type.class.jsdoc"],
				settings: {
					foreground: undef("keyword"),
				},
			},
			{
				scope: [
					"storage",
					"storage.type",
					"support.type.builtin",
					"constant.language.undefined",
					"constant.language.null",
				],
				settings: {
					foreground: undef("builtin"),
				},
			},
			{
				scope: [
					"text.html.derivative",
					"storage.modifier.package",
					"storage.modifier.import",
					"storage.type.java",
				],
				settings: {
					foreground,
				},
			},
			{
				scope: [
					"string",
					"string punctuation.section.embedded source",
					"attribute.value",
				],
				settings: {
					foreground: undef("string"),
				},
			},
			{
				scope: [
					"punctuation.definition.string",
					"punctuation.support.type.property-name",
				],
				settings: {
					foreground: undef("string", "99"),
				},
			},
			{
				scope: "support",
				settings: {
					foreground: undef("property"),
				},
			},
			{
				scope: [
					"property",
					"meta.property-name",
					"meta.object-literal.key",
					"entity.name.tag.yaml",
					"attribute.name",
				],
				settings: {
					foreground: undef("property"),
				},
			},
			{
				scope: [
					"entity.other.attribute-name",
					"invalid.deprecated.entity.other.attribute-name.html",
				],
				settings: {
					foreground: undef("variable"),
				},
			},
			{
				scope: ["variable", "identifier"],
				settings: {
					foreground: undef("variable"),
				},
			},
			{
				scope: ["support.type.primitive", "entity.name.type"],
				settings: {
					foreground: undef("type"),
				},
			},
			{
				scope: "namespace",
				settings: {
					foreground: undef("namespace"),
				},
			},
			{
				scope: [
					"keyword.operator",
					"keyword.operator.assignment.compound",
					"meta.var.expr.ts",
				],
				settings: {
					foreground: undef("operator"),
				},
			},
			{
				scope: "invalid.broken",
				settings: {
					fontStyle: "italic",
					foreground: colors.red[7],
				},
			},
			{
				scope: "invalid.deprecated",
				settings: {
					fontStyle: "italic",
					foreground: colors.red[7],
				},
			},
			{
				scope: "invalid.illegal",
				settings: {
					fontStyle: "italic",
					foreground: colors.red[7],
				},
			},
			{
				scope: "invalid.unimplemented",
				settings: {
					fontStyle: "italic",
					foreground: colors.red[7],
				},
			},
			{
				scope: "carriage-return",
				settings: {
					fontStyle: "italic underline",
					background: colors.red[6],
					foreground: colors.gray[0],
					content: "^M",
				},
			},
			{
				scope: "message.error",
				settings: {
					foreground: colors.red[7],
				},
			},
			{
				scope: "string variable",
				settings: {
					foreground: undef("string"),
				},
			},
			{
				scope: ["source.regexp", "string.regexp"],
				settings: {
					foreground: undef("regex"),
				},
			},
			{
				scope: [
					"string.regexp.character-class",
					"string.regexp constant.character.escape",
					"string.regexp source.ruby.embedded",
					"string.regexp string.regexp.arbitrary-repitition",
				],
				settings: {
					foreground: undef("string"),
				},
			},
			{
				scope: "string.regexp constant.character.escape",
				settings: {
					foreground: undef("yellow"),
				},
			},
			{
				scope: ["support.constant"],
				settings: {
					foreground: undef("constant"),
				},
			},
			{
				scope: ["constant.numeric", "number"],
				settings: {
					foreground: undef("number"),
				},
			},
			{
				scope: ["keyword.other.unit"],
				settings: {
					foreground: undef("builtin"),
				},
			},
			{
				scope: ["constant.language.boolean", "constant.language"],
				settings: {
					foreground: undef("boolean"),
				},
			},
			{
				scope: "meta.module-reference",
				settings: {
					foreground: primary,
				},
			},
			{
				scope: "punctuation.definition.list.begin.markdown",
				settings: {
					foreground: undef("orange"),
				},
			},
			{
				scope: ["markup.heading", "markup.heading entity.name"],
				settings: {
					fontStyle: "bold",
					foreground: primary,
				},
			},
			{
				scope: "markup.quote",
				settings: {
					foreground: undef("interface"),
				},
			},
			{
				scope: "markup.italic",
				settings: {
					fontStyle: "italic",
					foreground,
				},
			},
			{
				scope: "markup.bold",
				settings: {
					fontStyle: "bold",
					foreground,
				},
			},
			{
				scope: "markup.raw",
				settings: {
					foreground: primary,
				},
			},
			{
				scope: [
					"markup.deleted",
					"meta.diff.header.from-file",
					"punctuation.definition.deleted",
				],
				settings: {
					background: colors.red[0],
					foreground: colors.red[7],
				},
			},
			{
				scope: [
					"markup.inserted",
					"meta.diff.header.to-file",
					"punctuation.definition.inserted",
				],
				settings: {
					background: colors.green[0],
					foreground: colors.green[6],
				},
			},
			{
				scope: ["markup.changed", "punctuation.definition.changed"],
				settings: {
					background: colors.orange[1],
					foreground: colors.orange[6],
				},
			},
			{
				scope: ["markup.ignored", "markup.untracked"],
				settings: {
					foreground: colors.gray[1],
					background: colors.blue[6],
				},
			},
			{
				scope: "meta.diff.range",
				settings: {
					foreground: colors.purple[6],
					fontStyle: "bold",
				},
			},
			{
				scope: "meta.diff.header",
				settings: {
					foreground: colors.blue[6],
				},
			},
			{
				scope: "meta.separator",
				settings: {
					fontStyle: "bold",
					foreground: colors.blue[6],
				},
			},
			{
				scope: "meta.output",
				settings: {
					foreground: colors.blue[6],
				},
			},
			{
				scope: [
					"brackethighlighter.tag",
					"brackethighlighter.curly",
					"brackethighlighter.round",
					"brackethighlighter.square",
					"brackethighlighter.angle",
					"brackethighlighter.quote",
				],
				settings: {
					foreground: colors.gray[6],
				},
			},
			{
				scope: "brackethighlighter.unmatched",
				settings: {
					foreground: colors.red[7],
				},
			},
			{
				scope: [
					"constant.other.reference.link",
					"string.other.link",
					"punctuation.definition.string.begin.markdown",
					"punctuation.definition.string.end.markdown",
				],
				settings: {
					foreground: undef("string"),
				},
			},
			{
				scope: [
					"markup.underline.link.markdown",
					"markup.underline.link.image.markdown",
				],
				settings: {
					foreground: secondaryForeground,
					fontStyle: "underline",
				},
			},
			{
				scope: ["type.identifier"],
				settings: {
					foreground: undef("class"),
				},
			},
			{
				scope: ["entity.other.attribute-name.html.vue"],
				settings: {
					foreground: undef("function"),
				},
			},
			{
				scope: ["invalid.illegal.unrecognized-tag.html"],
				settings: {
					fontStyle: "normal",
				},
			},
		],
		rules: [] as any[],
	};

	// monaco rules
	const rules: any[] = [];

	for (const { scope, settings } of theme.tokenColors) {
		for (const s of toArray(scope)) {
			rules.push({
				token: s,
				foreground: settings.foreground?.replace("#", ""),
			});
		}
	}

	theme.rules = rules;

	return theme;
}
