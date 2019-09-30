let f = (x) => {
	if (x % 2 == 0) return false
	else return true
}

let filter = (arr, f) => {
	for(let i of arr) {
		if (f(i)) console.log(i)
	}
}

filter([1, 3, 4, 6, 9], f)
