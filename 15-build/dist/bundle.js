class User {
	constructor(task) {
		this.task = task;
	}
	do() {
		this.task.run();
	}
}

class Task {
	constructor(str) {
		this.str = str;
	}
	run() {
		console.log(this.str);
	}
}

const doMath = new Task('Сделать математику');
const user = new User(doMath);
user.do();
