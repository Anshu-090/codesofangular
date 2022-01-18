import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges {
  //@Input() products
  @Input() uname
  constructor() { }

  ngOnInit() {
console.log("child component ");

  }
  ngOnDestroy(): void {
      console.log("child component has been destroyed");
      
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("child onchange has been called");
      console.log(changes);
      
      
  }

}
