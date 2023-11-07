export const stringifyCircular = (obj) => {
	const seen = new Map();

	return JSON.stringify(obj, (key, value) => {
		if (typeof value === 'object' && value !== null) {
			if (seen.has(value)) {
				// Si ya hemos visto este objeto, lo tratamos como un objeto circular
				return '[Circular Reference]';
			}

			// Registramos este objeto en el mapa
			seen.set(value, true);
		}

		return value;
	});
}