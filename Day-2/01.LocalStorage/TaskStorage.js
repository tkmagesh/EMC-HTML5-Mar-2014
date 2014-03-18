function getTaskStorage(){
	var storage = window.localStorage;
	//var storage = window.sessionStorage;
	var taskStorage = {
		addTask : function (taskName){
				var id = new Date().getTime().toString();
				storage.setItem(id,taskName);
				return {
					id : id,
					name : taskName
				};
		},
		getAllTasks : function(){
				var tasks = [];
				for(var i=0;i<storage.length;i++){
					var id = storage.key(i);
					var name = storage.getItem(id);
					tasks.push({
						id : id,
						name : name
					});
				}
				return tasks;
		},
		removeTask : function (id){
				storage.removeItem(id);
		}
	}
	return taskStorage;
}