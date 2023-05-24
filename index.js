const variables = () =>
{
	let	nbr;
	let	str;
	let	bool;
	let	sum;
	let	multiply;

	nbr = 42;
	str = "I am a string";
	bool = true;
	console.log(nbr, str, bool);
	sum = nbr + 100;
	multiply = nbr * 2;
	console.log("nbr + 100 = ", sum);
	console.log("nbr * 2 = ", multiply);
	console.log(str + " and I've been concatenated");
	document.write(nbr);
	document.write("\n" + str);
	document.write("\n" + bool);
	document.write("\n nbr + 100 = " + sum);
	document.write("\n nbr * 2 = " + multiply);
	document.write(" " + str + " and I've been concatenated");
}

const greeting = (name) =>
{
	console.log(name);
	document.write(name);
}

const sum = (x, y) =>
{
	console.log(x + y);
	document.write(x + y);
}

const oddEven = (x) =>
{
	if (x !== 0 && (x % 2) === 0)
	{
		console.log(x, "is even");
		document.write(x, " is even");
	}
	else
	{
		console.log(x, "is odd");
		document.write(x, " is odd");
	}
}

const	car = 
{
	make: "toyota",
	model: "yaris",
	doors: 5,
	misc:
	{
		color: 'blue',
		transmission: 'automatic',
	}
}

const	getCarMake = () =>
{
	console.log(car.make);
	return (car.make);
}

const	getDoorNumber = () =>
{
	console.log(car.doors);
	return (car.doors);
}

const	getRandomMisc = () =>
{
	console.log(car.misc.color);
	return (car.doors);
}

const	arrayMaker = () =>
{
	const array = [];

	for (let i = 0; i < 10; i++)
	{
		array[i] = Math.floor(Math.random() * 100);
	}
	return (array);
}

const	arrayLog = (array) =>
{
	for (let i = 0; i < array.length; i++)
	{
		console.log(array[i]);
	}
}

const	pushToArray = (x, array) =>
{
	array.push(x);
	console.log(array);
	return (array);
}

const	delEven = (array) =>
{
	console.log("delEven:");
	for (let i = 0; i < array.length; i++)
	{
		if (array[i] !== 0 && array[i] % 2 === 0)
		{
			array.splice(i, 1);
		}
	}
	console.log(array);
	return (array);
}

const	ftMax = (array) =>
{
	let	max;

	console.log("Max number in array:")
	max = 0;
	for (let i = 0; i < array.length; i++)
	{
		if (array[i] > max)
			max = array[i];
	}
	console.log(array);
	console.log(max);
	return (max);
}

const	ftMin = (array) =>
{
	let	min;

	console.log("Min number in array:")
	min = array[0];
	for (let i = 0; i < array.length; i++)
	{
		if (array[i] < min)
			min = array[i];
	}
	console.log(array);
	console.log(min);
	return (min);
}

const upperGen = () =>
{
	let	i;

	i = Math.floor(Math.random() * (91 - 65)) + 65;
	return (i);
}

const lowerGen = () =>
{
	let	i;

	i = Math.floor(Math.random() * (123 - 97)) + 97;
	return (i);
}

const fiveStrArrayGen = () =>
{
	const	array = [];

	for (let i = 0; i < 5; i++)
	{
		array[i] = String.fromCharCode(upperGen(), lowerGen(), upperGen(), upperGen(), lowerGen());
	}
	return (array);
}

const	toUpper_Ascii = () =>
{
	const	array = fiveStrArrayGen();
	let		str;

	console.log(array);
	for (let i = 0; i < array.length; i++)
	{
		str = array[i];
		console.log(str);
		for (let n = 0; n < str.length; n++)
		{
			console.log(str.charCodeAt(n));
			if (str.charCodeAt(n) >= 65 && str.charCodeAt(n) <= 97)
			{
				console.log(array[i][n]);
				array[i][n] = String.fromCharCode(str.charCodeAt(n) + 32);
			}
		}
	}
	console.log(array);
}

const fiveLetterStrGen = () =>
{
	return (String.fromCharCode(upperGen(), lowerGen(), upperGen(), upperGen(), lowerGen()));
}

const	toLower = (str) =>
{
	console.log(str.toLowerCase());
	return (str.toLowerCase());
}

const	toUpper = (str) =>
{
	console.log(str.toUpperCase());
	return (str.toUpperCase());
}

const	lowerCaseArray = () =>
{
	const	array = [];

	for (let i = 0; i < 5; i++)
	{
		array[i] = toLower(fiveLetterStrGen());
	}
	return (array);
}

const	arrayCapitalizer = (array) =>
{
	for (let i = 0; i < array.length; i++)
	{
		array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
	}
	console.log(array);
	return (array);
}

