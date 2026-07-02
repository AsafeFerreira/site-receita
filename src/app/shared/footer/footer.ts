import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  /** Quando true, mostra apenas o desenho da onda, sem os textos/links (usado em login e cadastro). */
  readonly compacto = input(false);

  protected readonly ano = new Date().getFullYear();
}
