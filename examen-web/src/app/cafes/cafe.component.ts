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

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data: Cafe[]) => {
      this.cafes = data;
      console.log(this.cafes);
    });
  }
}