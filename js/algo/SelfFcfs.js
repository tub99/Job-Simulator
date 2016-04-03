function SelfFcfs() {

	var clock=0,
		waitingQueue = [],
		finishedQueue = [],
		laterQueue=[],
		totalCost=0;

	var processJob = function(job,vmList,ck) {
		var j,
			vm;
		//allocate a VM(cost assign+clock update)--> allocate is a method in VM class
		for(j=0;j<vmList.length;j++) {
			vm = vmList[j];
			if(vm.getTimeLeft() >= job.getLength()) {
				
				//Allocate job to that vm
				vm.allocate(job);
				document.write("<b>"+job.getId()+"</b> added to <b>"+ vm.getId()+"</b> at clock <b>"+clock + "<br>");
				job.setIsFinished(true);
				clock=clock+job.getLength();
				totalCost+=vm.getVmCost()*job.getLength();
				//then addJob to finishedQ
				finishedQueue.push(job);
				break;
			}
		}
	};
	//This method checks whether there is a vm available that can process the job
	var isProcessable = function(job,vmList) {
		var j,
			vm;
		for(j=0;j<vmList.length;j++) {
			vm = vmList[j];
			if(vm.getTimeLeft() >= job.getLength()) {
				return true;
			}
		}
		return false;

	};
	var printTotCost = function() {
		document.write("--------------------------------------------------"+"<br>");
		document.write("The total cost for running the Jobs is <b>"+totalCost+"<br>");
		document.write("--------------------------------------------------");
	};

	this.simulate = function(jobList,vmList,deadline) {
		var job,
			j,
			i,
			vm,
			flag,
			clockMarker=false;
		
		// when jobList size = 0 we stop the loop
		//This loop 1.schedules jobs, 2.moves late arrival jobs to waiting queue
		//and 3. checks for unProcessable Jobs 
		while(jobList.length > 0 && clock <= deadline) {
			// We can process a job only if clock>= arrivalTime 
			job=jobList[0];
			flag=isProcessable(job,vmList);
			//No VM could be allocated to the job
			if(flag === false) {
				clock++;
				document.write("<b>"+job.getId()+ "</b> <b>cannot</b> be processed with the existing set of VMList"+"<br>");
					
			}
			// Three conditions for processing the job
			//1. There is a VM to process the job
			//2.Job arrives after present clock
			//3. The time taken for the job to execute should not extend the deadline
			else if(flag===true && clock >= job.getArrivalTime() && (clock+job.getArrivalTime())<=deadline) {
				processJob(job,vmList,clock);

			}
			else {
				//Updating the clock and adding job to the waiting queue
				clock++;
				document.write("<b>"+job.getId()+"</b> added to <b>waitingQueue</b> at clock"+ clock+"<br>");
				waitingQueue.push(job);	
						
			}
			//This job that is added either to finishedQ or laterQ, so we remove it from JobList
			jobList.shift();
			
		}
		
		// Now processing the jobs added to the waitingQueue
		//This jobs will be processed till we meet the deadline or waitingQueue is over
		while(clock <= deadline && waitingQueue.length !== 0){
			
			for(i=0;i<waitingQueue.length;i++) {
				job=waitingQueue[0];
				flag=isProcessable(job,vmList);
				//No VM could be allocated to the job,remove job from waiting queue
				if(flag === false) {
					clock++;
					document.write("<b>"+job.getId()+ "</b> <b>cannot</b> be processed with the existing set of VMList"+"<br>");
					waitingQueue.shift();
				}
				// Three conditions for processing the job
				//1. There is a VM to process the job
				//2.Job arrives after present clock
				//3. The time taken for the job to execute should not extend the deadline
				else if(flag===true && clock >= job.getArrivalTime() && (clock+job.getArrivalTime())<=deadline) {
					processJob(job,vmList,clock);
					waitingQueue.shift();
				}
				else clock++;
			}


		}
		//Jobs which could not be scheduled within the deadline is still remaining in the waiting queue
		if(waitingQueue.length>0) {
			for(var k=0;k<waitingQueue.length;k++)
				document.write("<b>"+waitingQueue[k].getId()+"</b> <b>could not</b> be scheduled within the deadline "+deadline+"<br>");
		}
		printTotCost();
	};
}