import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HimnosService } from 'src/app/himnos.service';
import { Himno } from '../../himnos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  himnos: Himno[] = [];

  constructor(private himnoService: HimnosService, private router:Router) { }

  ngOnInit() {
    this.himnos = this.himnoService.getHimnos();
  }

}
