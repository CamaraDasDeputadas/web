import { Component, OnInit } from '@angular/core';
import {DeputadoService} from '../../services/deputado.service';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit {

  deputadas: any;

  constructor(private deputadoService: DeputadoService) { }

  ngOnInit() {
    this.deputadoService.listarDeputadas().subscribe(
      (data) => {
        this.deputadas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  linkBio(id) {
    window.open('http://www2.camara.leg.br/deputados/pesquisa/layouts_deputados_biografia?pk=' + id, '_blank');
  }

}
