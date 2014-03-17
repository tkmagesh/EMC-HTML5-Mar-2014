function isPrime(n){
	var result = {};
	function isPrimeUtil(x){
	   if (x <= 3) return true;
	   for(var i=2;i<=(x/2);i++)
	      if (x % i === 0) return false;
	   return true;
	}
	isPrime = function(no){
		if (typeof result[no] !== "undefined"){
			console.log("from cache.. ", result[no])
		} else {
			result[no] = isPrimeUtil(no);
			console.log("freshly brewed...", result[no]);
		}
	};
	isPrime(n);
}