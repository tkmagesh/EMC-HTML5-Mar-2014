(function (){
		var taskStorage = getTaskStorage();
		function onBtnAddTaskClick(){
			var task = document.getElementById("txtTask").value;
	        var newTask = taskStorage.addTask(task);
			addTaskToList(newTask);	        
		}

		function addTaskToList(newTask){
			var ulTaskList = document.getElementById("ulTaskList")
	          , newTaskNode = document.createElement("li");
			newTaskNode.innerHTML = newTask.name;
	        newTaskNode.setAttribute("task-id",newTask.id);
	        ulTaskList.appendChild(newTaskNode);
		}

		
		function displayMessage(msg){
			var divMessage = document.getElementById("divMessage")
			divMessage.innerHTML = msg;
			divMessage.style.opacity = 1;
			setTimeout(function(){
				fadeOut(divMessage);	
			},3000);
			
		}
		function init(){
			document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
			document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompltedClick);
			document.getElementById("ulTaskList").addEventListener("click",onTaskItemClick);
			loadTasksFromStorage();
		}

		function loadTasksFromStorage(){
			var tasks = taskStorage.getAllTasks();
			for(var i=0;i<tasks.length;i++)
				addTaskToList(tasks[i]);
		}




		function onBtnRemoveCompltedClick(){
			var taskNodes = document.getElementById("ulTaskList").children;
				for(var i=taskNodes.length-1;i>= 0;i--)
					if (taskNodes[i].classList.contains("completed")){
						var node = taskNodes[i];
						taskStorage.removeTask(node.getAttribute("task-id"));
						fadeOut(node, (function(n){
							return function(){
								n.remove();
							}
						})(node));
					};
		}

		
		
		function onTaskItemClick(e){

			if (e.srcElement.nodeName === "LI"){
				if (e.srcElement.classList.contains("completed")){
					e.srcElement.classList.remove("completed");
				} else {
					e.srcElement.classList.add("completed");
				}	
			}
			
		}
		window.addEventListener("DOMContentLoaded",init);
	})();