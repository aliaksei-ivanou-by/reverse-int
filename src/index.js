module.exports = function reverse (n) // 123
{
	var current;
	var output = 0
	if (n < 0)
	{
		n = n * (-1);
	}
	while (n)
	{
		current = n % 10; // 123 % 10 = 3, 12 % 10 = 2, 1 % 10 = 1
        output = (output * 10) + current; // 3, 30 + 2 = 32, 320 + 1 = 321
        n = n / 10 | 0; // 123 / 10 = 12, 12 / 10 = 1, 1 / 10 = 0
    }
	return output // 321
}
