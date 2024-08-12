import { Component } from '@angular/core';
import { Vaga } from 'src/app/interfaces/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent {
  vagas: Vaga[] = [];
  vagaToUpdate!: Vaga;
  vagaToDelete!: Vaga;

  constructor(private service: VagaService){
    this.getVagas();
  }

  getVagas(){
    this.service.getVagas().subscribe(res => {
      this.vagas = res;
      console.log(res);
    })
  }

  attVagas(vagas: Vaga[]){
    console.log(vagas)
    this.vagas = vagas;
  }

  alterarVaga(vaga: Vaga){
    this.vagaToUpdate = vaga;
  }

  deletarVaga(vaga: Vaga) {
    if(vaga.id !== undefined){
      this.service.deleteVaga(vaga.id).subscribe(res => {
        console.log(res);
        this.getVagas();
      });
    }
  }
}
