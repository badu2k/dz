import { User } from './user.js';
import { Task } from './task.js';

const doMath = new Task('Сделать математику');
const user = new User(doMath);
user.do();