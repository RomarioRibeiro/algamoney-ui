import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisar',
  templateUrl: './pessoa-pesquisar.component.html',
  styleUrls: ['./pessoa-pesquisar.component.css']
})
export class PessoaPesquisarComponent {

pessoas = [
  {pessoa: 'Manoel Pinheiro', cidade:'Uberlândia', estado:'MG', ativo: true},
  {pessoa: 'Sebastião', cidade:'São paulo', estado:'SP', ativo: false},
  {pessoa: 'Carla Souza', cidade:'Florianópolis', estado:'SC', ativo: true},
  {pessoa: 'Luis Pereira', cidade:'Curitiba', estado:'PR', ativo: true},
  {pessoa: 'Vilma Andrade', cidade:'Rio janeiro', estado:'RJ', ativo: true},
  {pessoa: 'Romário Ribeiro', cidade:'Sabaudia', estado:'Pr', ativo: false}
]

}
