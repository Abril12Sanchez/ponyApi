import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  imports: [ReactiveFormsModule] // Agregar ReactiveFormsModule aquí
})
export class FormularioComponent {
  formulario: FormGroup;

  personajes = [
    { nombre: 'Twilight Sparkle', colorFavorito: 'Morado', fruta: 'Mandarina', habilidad: 'Magia' },
    { nombre: 'Fluttershy', colorFavorito: 'Amarillo', fruta: 'pera', habilidad: 'Dominacion' },
    { nombre: 'Pinkie Pie', colorFavorito: 'Rosita', fruta: 'Manzana', habilidad: 'Diversion' },
    { nombre: 'Rainbow Dash', colorFavorito: 'Rojo', fruta: 'Apio', habilidad: 'Velocidad' },
    { nombre: 'Rarity', colorFavorito: 'Morado', fruta: 'Uvas', habilidad: 'Moda' },
    { nombre: 'Applejack', colorFavorito: 'Naranja', fruta: 'Manzana', habilidad: 'Cultivo' },
  ];

  resultado: string | null = null;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      colorFavorito: ['', Validators.required],
      fruta: ['', Validators.required],
      habilidad: ['', Validators.required]
    });
  }

  adivinarPersonaje() {
    const respuestas = this.formulario.value;
    const personaje = this.personajes.find(p => 
      p.colorFavorito === respuestas.colorFavorito && 
      p.fruta === respuestas.fruta && 
      p.habilidad === respuestas.habilidad
    );

    if (personaje) {
      this.resultado = `¡Eres ${personaje.nombre}!`;
    } else {
      this.resultado = 'Lo siento, no pude adivinar el personaje.';
    }
  }
}
