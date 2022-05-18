import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Prodotti } from 'src/app/interface/prodotti';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent implements OnInit {
  empty!: boolean;
  carts: Prodotti[] = [];
  total: number = 0;
  genders = ['uomo', 'donna'];
  form!: FormGroup;

  constructor(
    private router: Router,
    private carrelloSrv: GeneralService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.carts = this.carrelloSrv.carrello;
    if (this.carts.length == 0) {
      this.empty = true;
    } else {
      this.empty = false;
      this.totale();
      this.form = this.fb.group({
        userInfo: this.fb.group({
          username: this.fb.control(null, [
            Validators.required,
            this.noWhitespaceValidator,
          ]),
          email: this.fb.control(null, [
            Validators.email,
            Validators.required,
            // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]),
          password: this.fb.control(null, [
            Validators.required,
            Validators.maxLength(20),
            Validators.minLength(7),
          ]),
        }),
        genders: this.fb.control('uomo'),
        textarea: this.fb.control(
          `Hai già provato le nostre birre? Facci sapere cosa ne pensi!`,
          Validators.maxLength(150)
        ),
      });
    }
  }

  backHome2() {
    this.router.navigate(['/home']);
  }

  totale() {
    for (let i = 0; i < this.carts.length; i++) {
      this.total += this.carts[i].price;
    }
    this.total.toFixed(2);
  }

  //funzione per evitare che l'utente inserisca solo spazi vuoti all'interno del nome
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  elimina() {
    this.carts = this.carrelloSrv.carrello.splice(
      0,
      this.carrelloSrv.carrello.length
    );
    //this.router.navigate(['/home']);
    this.empty = true;
  }

  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }
}
