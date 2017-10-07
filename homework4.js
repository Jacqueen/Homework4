const stars = function (num)
{
	if (num === 0)
	{
		return '';
	}
	return stars(num-1) + '* ';
}; 

const checkerBoard = function (n)
{
	if (n === 0)
		return '';
	
	const newRow = function (r)
	{
		if (r === 0)
			return '';
		if (r % 2 === 0)
		return ' ' + stars(n) + '\n' + newRow(r-1);
	return  stars(n) + '\n' + newRow(r-1);
	};
	return newRow(n) + '\n';
};
checkerBoard(5);




const reverse = function (str)
{
	const f1 = function (index)
	{
		if (index < 0)
		{
			return '';
		}
		return str[index] + f1(index-1);
	};
	return  f1(str.length - 1);
};
console.log(reverse('ashkhen'));
	
	
	
	
	const pow = function (base, n)
	{
		if (n < 0 || base < 0 || base === -0)
			return '';
		if (n === 0)
			return 1;
		return base * pow(base, n-1);
		
	};
	pow(8, 2);
	
	
	const star = function (number)
	{
		if (number <= 0)
		return '';
		return '*' + star(number - 1);
	};
	const spaces = function(m)
	{
		if (m <= 0)
			return'';
		return " " + spaces(m - 1);
	};
	
	
	const triangleStars = function (n)
	{
		const f = function (n, space, stars)
		{
			if(n <= 0)
			{
				return '';
			}
			console.log(spaces(space) + star(stars));
			return f(n-1, space + 1 , stars - 2);
			debugger;
			
		};
		const numOfStars = n + n - 1;
		return f(n, 0, numOfStars);
	};
	 triangleStars(9);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	