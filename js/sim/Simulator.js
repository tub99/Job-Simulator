function Simulator() {

	this.startSimulator = function() {
		
		var job1 = new Job(),
			job2 = new Job(),
			job3 = new Job(),
			job4 = new Job(),
			job5 = new Job(),
			job6 = new Job(),
			vm1 = new VM(),
			vm2 = new VM(),
			jobList=[],
			vmList=[],
			algo;

		//craete JobList(id,len,aTime)
		job1.createJob("job1",3,7); job2.createJob("job2",2,5); job3.createJob("job3",1,29);
		job4.createJob("job4",40,1);job5.createJob("job5",6,18);job6.createJob("job6",4,33);
		jobList.push(job1,job2,job3,job4,job5,job6);
		//create VmList
		vm1.createVm("vm1",7,30);vm2.createVm("vm2",14,140);
		vmList.push(vm1,vm2); 
		//new Algo().simulate(jobList,vmList,finishTime)
		algo = new SelfFcfs();
		algo.simulate(jobList,vmList,30);
	};
}