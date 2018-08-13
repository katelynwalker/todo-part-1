"use strict";
function ToDoController(){
    const vm = this;
    vm.list = [
        {
            task:"Do Laundry",
            completed:true
        },
        {
            task:"Get Gas",
            completed:true
        },
        {
            task:"Grocery Shop",
            completed:false
        },
        {
            task:"Walk Dog",
            completed:false
        }
    ]
    vm.addTask = (newTask) => {
                vm.list.push({
                    task: newTask,
                    completed: false
                });
            }

    vm.removeTask = (index) => {
                vm.list.splice(index,1)
    };

    vm.completeTask = (index) => {
        vm.list[index].completed = true;
    }

    vm.editTask = (index) => {
        vm.list[index].display = "none";

    }

   
}


angular 
    .module("ToDoApp")
    .controller("ToDoController", ToDoController);