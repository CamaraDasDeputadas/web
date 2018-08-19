import { Component, OnInit } from '@angular/core';
import {DeputadoService} from '../../services/deputado.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.scss']
})
export class DeputadosComponent implements OnInit {

  deputadas: any;

  constructor(private deputadoService: DeputadoService,
              private router: Router) { }

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

  linkConsulta(id) {
    this.router.navigate(['consulta-publica/' + id + '/deputada']);
  }

}
