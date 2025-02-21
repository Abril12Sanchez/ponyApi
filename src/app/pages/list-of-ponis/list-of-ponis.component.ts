import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPonisService } from '../../services/list-of-ponis.service';

@Component({
  selector: 'app-list-of-ponis',
  standalone: true, // Si usas Angular standalone components
  imports: [CommonModule], // Asegura compatibilidad con *ngFor
  templateUrl: './list-of-ponis.component.html',
  styleUrls: ['./list-of-ponis.component.css']
})
export class ListOfPonisComponent {
  data: any[] = [];

  constructor(private listOfPonisService: ListOfPonisService) {}

  ngOnInit(): void {
    this.listOfPonisService.getPonys().subscribe((response: any) => {
      this.data = response.data || []; // Asegurarse de que data sea un array
    });
  }
}
