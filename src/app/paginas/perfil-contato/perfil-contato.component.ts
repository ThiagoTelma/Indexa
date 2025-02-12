import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [CommonModule, ContainerComponent, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.snapshot.paramMap.get('id')
  }

}
