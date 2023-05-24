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
		console.log("Ten number array:");
		console.log(array[i]);
	}
}

const	pushToArray = (x, array) =>
{
	array.push(x);
	console.log("Push a number to the array:");
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
	console.log("Set a string to lower case:");
	console.log("original string", str);
	console.log("lower case string:", str.toLowerCase());
	return (str.toLowerCase());
}

const	toUpper = (str) =>
{
	console.log("Set a string to upper case:");
	console.log("original string:", str);
	console.log("upper case string:", str.toUpperCase());
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
	console.log("Capitalize array:");
	console.log("Original array:", array);
	for (let i = 0; i < array.length; i++)
	{
		array[i] = array[i].charAt(0).toUpperCase() + array[i].substr(1);
	}
	console.log("Modified array:", array);
	return (array);
}

