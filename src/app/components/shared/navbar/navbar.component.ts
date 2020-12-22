import { Component, OnInit } from '@angular/core';
// Version de la aplicacion
import { version } from '../../../../../package.json';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../../views/shared/navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Check List';
  public appVersion: string = version;

  constructor() {}

  ngOnInit() { }
}
