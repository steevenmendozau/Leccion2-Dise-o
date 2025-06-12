import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css'],
})
export class UbicacionesComponent {
  showSlide(n: number) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((el, idx) => {
      el.classList.toggle('active', idx === n - 1);
    });
  }
}
