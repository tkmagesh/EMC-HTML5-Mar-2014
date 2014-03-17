function getSpinner(){
	var count = 0;
	return {
		up : function(){
			return ++count;
		},
		down : function(){
			return --count;
		}
	}
}

var spinner = getSpinner();
spinner.up() //return 1
spinner.up() //return 2
spinner.up() //return 3
spinner.up() //return 4

spinner.down() //return 3
spinner.down() //return 2
spinner.down() //return 1
