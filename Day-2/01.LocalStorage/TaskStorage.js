function getTaskStorage(){
	var storage = window.localStorage;
	//var storage = window.sessionStorage;
	var taskStorage = {
		addTask : function (taskName){
				var id = new Date().getTime().toString();
				var newTask = {
					id : id,
					name : taskName,
					isCompleted : false
				};
				storage.setItem(id,JSON.stringify(newTask));
				return newTask;
		},
		toggleCompletion : function(id){
			var task = JSON.parse(storage.getItem(id));
			task.isCompleted = !task.isCompleted;
			storage.setItem(id,JSON.stringify(task));
		},
		getAllTasks : function(){
				var tasks = [];
				for(var i=0;i<storage.length;i++){
					var id = storage.key(i);
					tasks.push(JSON.parse(storage.getItem(id)));
				}
				return tasks;
		},
		removeTask : function (id){
				storage.removeItem(id);
		}
	}
	return taskStorage;
}