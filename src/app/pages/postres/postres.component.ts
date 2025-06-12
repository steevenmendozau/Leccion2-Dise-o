import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Postre } from '../../models/postres';
import { RecetasService } from '../../services/recetas.service';


@Component({
  selector: 'app-postres',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  postres: Postre[] = [];
  abierto: number | null = null;

  constructor(private recetasService: RecetasService) {}

  ngOnInit() {
    this.recetasService.getPostres().subscribe(data => {
      this.postres = data;
    });
  }

  toggleDetalle(index: number) {
    this.abierto = this.abierto === index ? null : index;
  }
}