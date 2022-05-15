import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sub!: Subscription;
  constructor(public srv: GeneralService) {}

  ngOnInit(): void {}
}
