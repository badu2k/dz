const lang = prompt('Введите ваш язык');
switch(lang) {
	case 'ru':
		console.log('Привет!');
		break;
	case 'en':
		console.log('Hello!');
		break;
	case 'de':
		console.log('Gutten tag!');
		break;
	case 'es':
		console.log('Prevenir!');
		break;
	case 'zh':
		console.log('Nǐ hǎo!');
		break;
	default:
		console.log('Такого языка нет!');
}