let filter = (arr, f) => {
	for(let i of arr) {
		if (f(i)) console.log(i)
	}
}

filter([1, 3, 4, 6, 9], (i)=>{return i%2==1})
