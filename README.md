# Job-Simulator
This JavaScript web app schedules jobs through VM's and finds the cost according to the Algorithm running. The enviroment of the Simulator has been made similar to the cloud enviroment.

The Simulator class simulates jobs and schedules them according to the algorithm devised and gives the effective cost.
The class which contains the algorithm to run the jobList contains a *simulate(JobList,VmList,deadline)* method takes the responsibility of scheduling the joblist using VM's according to the user's deadline.
```javascript
  var algo = new SelfFcfs();// SelfFcfs class conatins the algorithm
	algo.simulate(jobList,vmList,30);
```
To start the simulator you need to call *startSimulator()* method of the Simulator class
```javascript
  var simulator = new Simulator();
	simulator.startSimulator();
```
<br>
The output is at : http://tub99.github.io/JobSimulator/index.html

#Note:
document.write() has been used just for displaying purpose !
