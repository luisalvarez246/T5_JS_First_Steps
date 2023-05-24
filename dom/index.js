const	message = () =>
{
	window.alert("I am a window alert message, nice to meet you");
}

const	getTime = () =>
{
	let	date;

	date = new Date();
	document.getElementById("time").innerHTML = date;
}

const	showHideTime = () =>
{
	let	element;

	element = document.getElementById("time");
	console.log(element);
	if (element.style.display === "none")
	{
		element.style.display = "block";
	}
	else
	{
		element.style.display = "none";
	}
}

const	nameList = () =>
{
	const	namesArray = ["Luis", "Pedro", "Juan", "Maria", "Marta", "Olga", "Luisa", "Carlos", "Mar", "Jim"];
	const	list = document.createElement("ul");
	let		node;
	let		textNode;
	
	list.setAttribute("id", "names");
	document.body.appendChild(list);
	for (let i = 0; i < namesArray.length; i++)
	{
		node = document.createElement("li");
		textNode = document.createTextNode(namesArray[i]);
		node.appendChild(textNode);
		document.getElementById("names").appendChild(node);
	}
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

const	arrayLength = () =>
{
	const	array = arrayMaker();
	const	para = document.createElement("p");

	para.innerText = `The length of the number array is ${array.length}`;
	document.body.appendChild(para);
}

const	formMaker = () =>
{
	const	form = document.createElement("form");
	const	firstName = document.createElement("label");
	const	firstNameInput = document.createElement("input");
	const	lastName = document.createElement("label");
	const	lastNameInput = document.createElement("input");
	const	submit = document.createElement("input");

	firstName.innerText = "First Name";
	lastName.innerText = "Last Name";
	form.setAttribute("action", "#");
	form.setAttribute("id", "basic-form");
	firstNameInput.setAttribute("type", "text");
	lastNameInput.setAttribute("type", "text");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Submit");

	document.body.appendChild(form);
	document.getElementById("basic-form").appendChild(firstName);
	document.getElementById("basic-form").appendChild(firstNameInput);
	document.getElementById("basic-form").appendChild(lastName);
	document.getElementById("basic-form").appendChild(lastNameInput);
	document.getElementById("basic-form").appendChild(submit);
}

const	tableMaker = () =>
{
	const	table = document.createElement("table");
	const	tr1 = document.createElement("tr");
	let		th;
	const	tr2 = document.createElement("tr");
	let		td;

	table.setAttribute("id", "basic-table");
	tr1.setAttribute("id", "row-1");
	tr2.setAttribute("id", "row-2");
	document.body.appendChild(table);
	document.getElementById("basic-table").appendChild(tr1);
	document.getElementById("basic-table").appendChild(tr2);
	for (let i = 0; i < 2; i++)
	{
		th = document.createElement("th");
		td = document.createElement("td");
		th.innerText = `header ${i + 1}`;
		td.innerText = `data ${i + 1}`;
		document.getElementById("row-1").appendChild(th);
		document.getElementById("row-2").appendChild(td);
		console.log(i);
	}
}

/*
const	fetchArray = async() =>
{
	const	array = [];
	let		randomNbr;

	for (let i = 0; i < 10; i++)
	{
		randomNbr = Math.floor(Math.random() * (826)) + 1;
		console.log(randomNbr);
		fetch(`https://rickandmortyapi.com/api/character/${randomNbr}`)
			.then(response => response.json())
			.then(data => array.push(data))
			.catch(err => console.log('Solicitud fallida', err));
	}
	console.log(array);
	return (array);
}*/

/**
 * No catch error provided for this function, still under developing
 *
 */
const	fetchArray = async() =>
{
	const	array = [];
	let		randomNbr;
	let		response;
	let		results;

	for (let i = 0; i < 10; i++)
	{
		randomNbr = Math.floor(Math.random() * (826)) + 1;
		console.log(randomNbr);
		response = await fetch(`https://rickandmortyapi.com/api/character/${randomNbr}`);
		results = await response.json();
		array.push(results)
	}
	console.log(array);
	return (array);
}


const	dataPopulate = (array, headings, rows, cols) =>
{
	let	data;

	for (let i = 0; i <= rows; i++)
	{
		for (let n = 0; n < cols; n++)
		{
			if (i === 0)
			{
				data = headings[n];
				document.getElementById(`th${n}`).innerText = data;
			}
			else
			{
				data = Object.values(array[i - 1])[n];
				document.getElementById(`td${(i * 10) + n}`).innerText = data;
			}
		}
	}
}

const	customTable = (rows, cols) =>
{
	const	table = document.createElement("table");
	let		tr;
	let		th;
	let		td;

	table.setAttribute("id", "custom-table");
	document.body.appendChild(table);
	for (let i = 0; i <= rows; i++)
	{
		tr = document.createElement("tr");
		if (i === 0)
			tr.setAttribute("id", "table-header");
		else
			tr.setAttribute("id", `table-row${i}`);
		document.getElementById("custom-table").appendChild(tr);
	}
	for (let i = 0; i <= rows; i++)
	{
		for (let n = 0; n < cols; n++)
		{
			if (i === 0)
			{
				th = document.createElement("th");
				th.setAttribute("id", `th${n}`);
				document.getElementById("table-header").appendChild(th);
			}
			else
			{
				td = document.createElement("td");
				td.setAttribute("id", `td${(i * 10) + n}`);
				document.getElementById(`table-row${i}`).appendChild(td);
			}
		}
	}
}

const	printArray = async(rows, cols) =>
{
	const	array = await fetchArray();
	const	headings = Object.keys(array[0]).slice(0, 6);

	dataPopulate(array, headings, rows, cols);
}