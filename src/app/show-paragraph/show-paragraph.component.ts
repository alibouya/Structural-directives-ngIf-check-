import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-paragraph',
  templateUrl: './show-paragraph.component.html',
  styleUrls: ['./show-paragraph.component.css']
})
export class ShowParagraphComponent implements OnInit {
  isShown= true;
  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    this.isShown=! this.isShown;
  }

}
