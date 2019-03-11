## Live Demo available [here](https://todo-app-77.herokuapp.com)  
It is an angular application(7.3.3) which allows -  
1) adding a todo item in the list  
2) marking the todo item as Done  
3) deleting the todo item from list  

Site used to get fake json responses- `https://jsonplaceholder.typicode.com`  

## Branches in this repo
`master` - has code that runs on [local server](http://localhost:4200/).  
`deployToHeroku`  - has code which is deployable to a web server. It contains an additional file - server.js(in source folder) and a couple of changes in package.json & index.html

## Basic setup to create a similar angular application
1) Install node.js- It provides npm(node package manager) required to install Angular CLI, which in turn is used to create Angular application.  
2) Install IDE- Visual studio code(recommended).  
3) Install angular CLI- `npm install -g @angular/cli`  
4) Check if angular CLI is installed- `ng --version`  
5) Create an Angular project- Go to directory where the project is to be created- `ng new <projectname>`  
and make below selections  
Select add routing -> yes  
select stylesheet format -> css  
6) Go into the project directory and start server(& open browser window)- `ng serve --open` or `ng s --open`  
7) To create a new component- `ng generate component <compName>` or `ng g c <compName>`  
The component is created in app folder.  
8) Similarly to create a new service- `ng g s <srvName>`
9) Finally after development, run- `ng build`. It would create a 'dist' folder which can then be deployed.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
