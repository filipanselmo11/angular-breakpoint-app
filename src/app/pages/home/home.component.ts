import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { ComponenteService } from '../../services/componente.service';
import { ComponenteInterface } from '../../types/componente';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor, HttpClientModule, MatGridListModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  loading: boolean = true;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'XSmall'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private componenteService: ComponenteService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
        .observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
        ])
        .pipe(takeUntil(this.destroyed))
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              this.displayNameMap.get(query) ?? 'Unknown';
            }
          }
        })
  }

  listaComponente: ComponenteInterface[] = [];

  ngOnInit(): void {
    this.componenteService.listar().subscribe((res) => {
      this.loading = true;
      console.log('LOADING ', this.loading);
      this.listaComponente = res;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
  }
}
