(function (){
		var taskAddedCount = 0;
		function onBtnAddTaskClick(){
			var task = document.getElementById("txtTask").value
			  ,	ulTaskList = document.getElementById("ulTaskList")
	          , newTaskNode = document.createElement("li");
	        newTaskNode.innerHTML = task;
	        //newTaskNode.addEventListener("click",onTaskItemClick);
	        ulTaskList.appendChild(newTaskNode);
	        taskAddedCount++;
	        displayMessage(taskAddedCount + " tasks are added till now...");
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

			/*var taskNodes = document.getElementById("ulTaskList").children;
			for(var i=0;i<taskNodes.length;i++)
				taskNodes[i].addEventListener("click",onTaskItemClick);*/
		}


		function onBtnRemoveCompltedClick(){
			var taskNodes = document.getElementById("ulTaskList").children;
				for(var i=taskNodes.length-1;i>= 0;i--)
					if (taskNodes[i].classList.contains("completed"))
						taskNodes[i].remove();
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
		//window.onload = init;
		window.addEventListener("DOMContentLoaded",init);
	})();