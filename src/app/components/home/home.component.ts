import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Prodotti } from 'src/app/interface/prodotti';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Prodotti[] = [];
  sub!: Subscription;
  show: boolean = true;

  constructor(private generalProductSrv: GeneralService) {}

  recupService() {
    this.sub = this.generalProductSrv.recupera().subscribe((resp) => {
      this.products = resp;
    });
  }

  ngOnInit(): void {
    this.recupService();
  }
}
