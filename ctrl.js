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
   
}


angular 
    .module("ToDoApp")
    .controller("ToDoController", ToDoController);