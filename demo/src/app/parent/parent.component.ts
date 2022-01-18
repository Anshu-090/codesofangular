import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck{
  uname:any
//   salesProduct=[{
//     name:"bat",price:3000
//   },
// {name:"ball",price:4000}]
// newProduct=[{
//   name:"bats",price:3000
// },
// {name:"balls",price:4000}]
flag:boolean=false
toggleChild(){
  this.flag=!this.flag
}
  constructor() {console.log("parent constructor has been called ");
   }

  ngOnInit() {
    console.log("parent onit has been called ");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("parent onchanges has been called");
      
  }
  ngDoCheck(): void {
      
  }

}
