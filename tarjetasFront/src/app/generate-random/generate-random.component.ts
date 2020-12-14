import { Component, OnInit } from '@angular/core';
import { generateRandomCarga } from '../Interfaces/generate-random';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { generateRandom } from '../service/generate-random.service';

@Component({
  selector: 'app-generate-random',
  templateUrl: './generate-random.component.html',
  styleUrls: ['./generate-random.component.css']
})
export class GenerateRandomComponent implements OnInit {
  
  public formGenerate: FormGroup;
  public listMont: any[];
  public listaRandom: generateRandomCarga[];

  constructor(private formBuilder: FormBuilder, private generateService: generateRandom) { }

  ngOnInit() {
    this.listMont = [
      {mes:"Enero", valor: 1}, {mes:"Febrero", valor: 2}, {mes:"Marzo", valor: 3}, {mes:"Abril", valor: 4},
      {mes:"Mayo", valor: 5}, {mes:"Junio", valor: 6}, {mes:"Julio", valor: 7}, {mes:"Agosto", valor: 8},
      {mes:"Septiembre", valor: 9}, {mes:"Octubre", valor: 10}, {mes:"Noviembre", valor: 11}, {mes:"Diciembre", valor: 12},
    ];
    this.buildForm();
  }

  buildForm() {
    this.formGenerate = this.formBuilder.group({
      padded: ['', Validators.required],
      ammount: ['', Validators.required],
      month: ['', Validators.required],
    });
  }

  public generateRandom(): void {
    let ammount = this.formGenerate.controls.ammount.value;
    let padded = this.formGenerate.controls.padded.value == 1 ? false : true;
    let month = this.formGenerate.controls.month.value;
    console.log(ammount, padded, month);
    let object = {
      padded : padded,
      ammount: ammount,
      month: month
    }
    this.generateService.setGenerateAction(object).then(
      respuesta => {
        console.log('Respuesta', respuesta);
      }
    );
  }


}
