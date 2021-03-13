import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes-changes',
  templateUrl: './themes-changes.component.html',
  styleUrls: ['./themes-changes.component.css']
})
export class ThemesChangesComponent implements OnInit {
  theme = '';
  constructor() { }

  ngOnInit(): void {
  }
  changetheme(theme:string){
   this.theme= theme;
  }
}
