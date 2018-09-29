// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const halfDollarsCoin = Math.floor(currency / 50);
    const quartersCoin = Math.floor((currency - (halfDollarsCoin * 50)) / 25);
    const dimesCoin = Math.floor((currency - (halfDollarsCoin * 50) - (quartersCoin * 25)) / 10);
    const nickelsCoin = Math.floor((currency - (halfDollarsCoin * 50) - (quartersCoin * 25) - (dimesCoin * 10)) / 5);
    const penniesCoin = Math.floor((currency - (halfDollarsCoin * 50) - (quartersCoin * 25) - (dimesCoin * 10) - (nickelsCoin * 5)));
    if (currency <= 0) {
        return {};
    }
	else if (currency > 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" }
	}
    else {
		const solution = {
			H: halfDollarsCoin,
			Q: quartersCoin,
			D: dimesCoin,
			N: nickelsCoin,
			P: penniesCoin
		};
		if (halfDollarsCoin == 0) {
			delete solution.H;
		};	
		if (quartersCoin == 0) {
			delete solution.Q;
		};
		if (dimesCoin == 0) {
			delete solution.D;
		};
		if (nickelsCoin == 0) {
			delete solution.N;
		};
		if (penniesCoin == 0) {
			delete solution.P;
		};	
		return solution;
    };
}
