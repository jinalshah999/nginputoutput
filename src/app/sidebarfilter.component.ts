import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-sidebarfilter',
  templateUrl: './sidebarfilter.component.html',
  styleUrls: ['./sidebarfilter.component.css']
})
export class SidebarfilterComponent implements OnInit {
  @Input() result:string="";
  @Output() clicked=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
onClick(searchTerm:string){
this.clicked.emit(searchTerm);
}
}
