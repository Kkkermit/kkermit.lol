import { i18n } from "../i18n";
import { HeaderConfig } from "../interfaces/header-interface";

export const config: HeaderConfig = {
	title: i18n.t("app.config.title"),
	description: i18n.t("app.config.description"),
};
