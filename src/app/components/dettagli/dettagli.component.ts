import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Prodotti } from 'src/app/interface/prodotti';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  beer!: Prodotti | undefined;
  sub!: Subscription;
  cont: number = 0;
  id!: number;

  constructor(
    private router: Router,
    private routeractive: ActivatedRoute,
    private generalProductSrv: GeneralService
  ) {}

  ngOnInit(): void {
    this.routeractive.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.sub = this.generalProductSrv
        .recuperoId(this.id)
        .subscribe((resp) => {
          this.beer = resp;
        });
    });
  }

  backHome() {
    this.router.navigate(['/home']);
  }

  aggiungiCarrello() {
    this.generalProductSrv.recuperoId(this.id).subscribe((prodotto) => {
      this.generalProductSrv.carrello.push(prodotto);
      this.router.navigate(['/carrello']);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
