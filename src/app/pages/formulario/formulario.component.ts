import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  template: `<h2>🌈 ¡Descubre qué Pony de Equestria eres! 🦄</h2>`,
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  personajes = [
    { nombre: 'Twilight Sparkle', colorFavorito: 'Morado', fruta: 'Mandarina', habilidad: 'Magia' },
    { nombre: 'Fluttershy', colorFavorito: 'Amarillo', fruta: 'Pera', habilidad: 'Dominación' },
    { nombre: 'Pinkie Pie', colorFavorito: 'Rosita', fruta: 'Manzana', habilidad: 'Diversión' },
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
      p.colorFavorito.toLowerCase() === respuestas.colorFavorito.toLowerCase() && 
      p.fruta.toLowerCase() === respuestas.fruta.toLowerCase() && 
      p.habilidad.toLowerCase() === respuestas.habilidad.toLowerCase()
    );

    if (personaje) {
      this.resultado = `🎠 ¡Eres ${personaje.nombre}! 🎉`;
    } else {
      this.resultado = '❌ Lo siento, no pude adivinar el personaje.';
    }
  }
}
