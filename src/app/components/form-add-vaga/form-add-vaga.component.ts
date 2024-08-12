import { Component, EventEmitter, Output } from '@angular/core';
import { Vaga } from 'src/app/interfaces/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-form-add-vaga',
  templateUrl: './form-add-vaga.component.html',
  styleUrls: ['./form-add-vaga.component.scss']
})
export class FormAddVagaComponent {

  nome: string = "";
  descricao: string = "";
  salario: number = 0;
  cidade: string = "";
  uf: string = "";

  @Output() vagasToEmit: any = new EventEmitter<any>();

  constructor(private service: VagaService) {
  }

  getVagas(){
    this.service.getVagas().subscribe(res => {
      let vagas = res;
      this.vagasToEmit.emit(vagas);
    })
  }

  addVaga() {

    if(this.nome === "" || this.descricao === "" || this.salario === 0 || this.cidade === "" || this.uf === "") {
      alert("Preencha todos os campos!")
      return;
    }

    let vagaToAdd = {
      nome: this.nome,
      descricao: this.descricao,
      sallary: this.salario,
      cidade: this.cidade,
      uf: this.uf
    }

    this.service.adicionarVaga(vagaToAdd).subscribe(res => {
      console.log(res);
      this.getVagas();
    })
  }

}
