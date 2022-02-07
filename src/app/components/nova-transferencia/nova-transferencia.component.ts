import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>(); //evento de Output "Ao Transferir"

  valor: number;
  destino: number;

  constructor (private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('Solicitada nova transferência!');

    const valorEmitir : Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpar();
        this.router.navigateByUrl('extrato');
      },
      (error) => {
        return console.error(error);
      }
    )

  }

  limpar() {
    this.valor = null;
    this.destino = null;
  }
}
