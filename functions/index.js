const greeting = (name) =>
{
	console.log(`Hello, ${name}`);
	document.write(`Hello, ${name}`);
}

const sum = (x, y) =>
{
	console.log(`${x} + ${y} is`, x + y);
	document.write(`${x} + ${y} is`, x + y);
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