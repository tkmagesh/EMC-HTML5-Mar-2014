function isPrime(n){
	if (n === 1) return false;
	if (n <=3 ) return true;
	for(var i=2;i<=Math.sqrt(n);i++)
		if (n % i === 0) return false;
	return true;
}
self.addEventListener("message",function(msgEvt){
	var data = msgEvt.data,
		primeCount = 0;
	for(var i=data.start;i<=data.end;i++){
		if (isPrime(i)) primeCount++;
		updateProgress((((i-data.start)/(data.end-data.start)) * 100),primeCount);
	}
	updateCompletion(primeCount);
});
function updateProgress(percentCompleted,primeCount){
	self.postMessage({
		type : "progress",
		percentCompleted : percentCompleted,
		primeCount : primeCount
	});
}

function updateCompletion(primeCount){
	self.postMessage({
		type : "completed",
		primeCount : primeCount
	});	
}