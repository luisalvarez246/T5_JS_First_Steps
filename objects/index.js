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
	return (car.misc.color);
}

const	ftPrinter = () =>
{
	const	carMake = getCarMake ();
	const	doorNbr = getDoorNumber();
	const	misc = getRandomMisc();

	document.write(carMake);
	document.write(" ", doorNbr);
	document.write(" ", misc);
}