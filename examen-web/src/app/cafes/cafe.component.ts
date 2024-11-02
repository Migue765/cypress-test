import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  public cafes: Cafe[] = [];
  public totalCafeOrigen: number = 0;
  public totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data: Cafe[]) => {
      this.cafes = data;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.totalCafeOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.totalCafeBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }
}