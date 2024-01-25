import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { ComponenteService } from '../../services/componente.service';
import { ComponenteInterface } from '../../types/componente';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, CardComponent, NgFor, HttpClientModule, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private componenteService: ComponenteService) {}

  listaComponente: ComponenteInterface[] = [];

  ngOnInit(): void {
    this.componenteService.listar().subscribe((res) => {
      this.listaComponente = res;
    });
  }
}
