async function race(promises) {
	return new Promise((resolve, reject) => {
		let finished = false;

		for(const p of promises) {
			Promise.resolve(p).then(
				(value) => {
					if(!finished) {
						finished = true;
						resolve(value);
					}
				},
				(error) => {
					if(!finished) {
						finished = true;
						reject(error);
					}
				}
			);
		}
	});
}