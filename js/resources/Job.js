/*
	Job class contains the jobs that the user is going to submit.
	It has id,startTime,burstTime ie length,arrivalTime,finishedFlag,waititingFlag
	Functions: getter and setter of above props
	and getClock(),checkJobEquality(Job)

	Job constructor(length,arrivalTime)
*/
function Job() {
	var startTime,
		length,
		id,
		arrivalTime,
		clock=0,
		counter=0,
		finishedFlag,
		waititingFlag;

	this.createJob = function(nm,len,aT) {
		length=len;
		arrivalTime=aT;
		id=nm;
		finishedFlag=false;
		waititingFlag=false;

	};
	this.getClock = function() {
		return clock;
	};
	this.getId = function() {
		return id;
	};
	this.getLength = function() {
		return length;
	};
	this.getArrivalTime = function() {
		return arrivalTime;
	};
	this.getStatus = function() {
		return {
			fin : finishedFlag,
			wait : waititingFlag
		};
	};
	this.getStartTime = function() {
		return clock;
	};
	this.setIsFinished = function(flag) {
		finishedFlag=flag;
	};

}