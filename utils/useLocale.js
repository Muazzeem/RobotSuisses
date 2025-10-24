export const getLocaleField = (data, field, lang) => {
	const isDefault = lang === "en";
	const localizedField = isDefault ? `${field}_en` : `${field}_${lang}`;
	let x = data[localizedField] || data[field] || "";
	return x;
};
