import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DeputadoService} from '../../services/deputado.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  deputado: any;

  constructor(private route: ActivatedRoute,
              private deputadoService: DeputadoService) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.deputadoService.getDeputado(params['id']).subscribe(
        (data) => {
          this.deputado = data;
          console.log(data);
        },
        (error) => {
          console.log(error)
        }
      )
    );
  }

}
