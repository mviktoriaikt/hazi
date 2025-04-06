import { Component, OnInit } from '@angular/core';
import { KutyaService } from '../kutya.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{

  Kutyak:any[]=[];

  constructor(private adat:KutyaService){}

  betoltes(){
    this.adat.get().subscribe((data)=>{
      this.Kutyak=data;
    })
  }

  ngOnInit(): void {
    this.betoltes();
  }

}
