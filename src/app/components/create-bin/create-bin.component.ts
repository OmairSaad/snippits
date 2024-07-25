import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { sn } from '../../Models/snippit';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
  constructor(private dbService:DbService){}
code= new FormGroup({
  title: new FormControl("",[
    Validators.required,
  ]),
  code: new FormControl("",[
    Validators.required
  ])
})
save(){
  console.log(this.code.value);
  this.dbService.create(this.code.value as sn);
}
}
