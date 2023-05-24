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