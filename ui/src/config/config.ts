import { i18n } from "../i18n";

export interface HeaderConfig {
	title: string;
	description: string;
}

export const config: HeaderConfig = {
	title: i18n.t("app.config.title"),
	description: i18n.t("app.config.description"),
};
