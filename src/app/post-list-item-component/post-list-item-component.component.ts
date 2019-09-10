import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
 
 
  @Input() title: string;
  @Input() content: string;
  loveIts: number=0;
  bool:Boolean;
  date=new Date();
  constructor() { }

  ngOnInit() {
  }


  Loveit()
{
  this.loveIts=this.loveIts+1;
  if(this.loveIts>0)
  {
  this.bool=true;
  
  }
  else{
    this.bool=false;
  
  }
}
dontLoveit()
{

  this.loveIts=this.loveIts-1;

  if(this.loveIts>0)
  {
  this.bool=true;
  
  }
  else{
    this.bool=false;
  
  }
}

}
