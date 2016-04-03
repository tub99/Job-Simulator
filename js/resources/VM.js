/* 
	Vm is a virtual machine class
	Vm has id,unitCost ie cost/clock,length--> that is the time this VM can run
	engagedFlag which tells whether the VM is free or not.
	Functions: getters/setters
	Other major functions:
		1. createVm( )
		2. allocate( )
*/
function VM() {

	var unitCost,
		id,
		engaged,
		allocatedTime,
		timeLeft,
		cnt=0;
	this.createVm = function(nm,len,uCost) {
		id = nm;
		allocatedTime = len;
		engaged = false;
		unitCost = uCost;
		timeLeft=Number(allocatedTime);
	};
	this.allocate = function(job) {
		timeLeft=Number(allocatedTime)-Number(job.getLength());
		engaged=true;
	};
	this.getTimeLeft = function() {
		return timeLeft;
	};
	this.getVmStatus = function() { return engaged;};
	this.getVmCost = function() {
		return unitCost;
	};
	this.getId = function() {
		return id;
	};
}