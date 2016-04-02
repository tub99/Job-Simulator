function SelfFcfs() {

	var clock=0,
		waitingQueue = [],
		finishedQueue = [],
		laterQueue=[];

	this.simulate = function(jobList,vmList,deadline) {
		var job,
			j;
		
		// when jobList size = 0 we stop the loop
		while(jobList.length > 0 && clock <= deadline) {
			// We can process a job only if clock>= arrivalTime
			job=jobList[0];
			if(clock >= job.getArrivalTime()) {
				//allocate a VM(cost assign+clock update)--> allocate is a method in VM class
				for(j=0;j<vmList.length;j++) {
					var vm = vmList[j];
					if(vm.getTimeLeft() >= job.getLength()) {
						
						//Allocate job to that vm
						vm.allocate(job);
						document.write(job.getId()+" added to "+ vm.getId()+" at clock "+clock + "<br>");
						job.setIsFinished(true);
						clock=clock+job.getLength();
						//then addJob to finishedQ
						finishedQueue.push(job);
						break;
					}

				}
				//No VM could be allocated to the job
				if(job.getStatus().fin === false) {
					document.write(job.getId()+ " cannot be processed with the existing set of VMList"+"<br>");
				}
			}
			else {
					//else we add to laterQueue
					document.write(job.getId()+" added to waitingQueue at clock"+ clock+"<br>");
					waitingQueue.push(job);
					
				
			}
			//This job that is added either to finishedQ or laterQ, so we remove it from JobList
			jobList.shift();
			
		}
		
		// Now processing the jobs added to the waitingQueue
		//This jobs will be processed till we meet the deadline
	};
}