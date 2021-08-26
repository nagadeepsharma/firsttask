import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoformb:FormBuilder
  ){

  }
  todoform=this.todoformb.group({
    inputtext:""
  })
  todos:Todo[]=[];

  createtodo(){
    if(this.todoform.value.inputtext.length==0){
      alert("please fill todo")
    }
    else{
      this.todos.push({content:this.todoform.value.inputtext})
      this.todoform.reset()
    }    
  }
  deletetodo(i:number){
    this.todos=this.todos.filter((v,ii)=>ii!==i)
  }
  currenttodo:any;
  currentedit:any=[]
  edittodo(i:number){
    this.currentedit=prompt("enter")
    if(this.currentedit.length==0){
    this.currenttodo=this.todos.map((v,ii)=>{
      if(ii==i){
        v.content=this.currentedit
        return v
      }
      return v
    }
      )
      this.todos=this.currenttodo
  }
    
    this.currenttodo.content=this.currentedit
  }
  ngOnInit(): void {
  }

}
