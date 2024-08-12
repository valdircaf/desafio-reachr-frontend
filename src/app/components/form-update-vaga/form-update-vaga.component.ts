import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vaga } from 'src/app/interfaces/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-form-update-vaga',
  templateUrl: './form-update-vaga.component.html',
  styleUrls: ['./form-update-vaga.component.scss']
})
export class FormUpdateVagaComponent {

  @Input() vaga!: Vaga;
  @Output() emitVagas: any = new EventEmitter<any>();

  descricao: string = "";
  nome: string = "";
  salario: number = 0;
  cidade: string = "";
  uf: string = "";

  constructor(private service: VagaService) {
  }

  getVagas() {
    this.service.getVagas().subscribe(res => {
      let vagas = res;
      this.emitVagas.emit(vagas);
      console.log(vagas, "OI");
    })
  }

  updateVaga() {

    let newVaga = {
      // id: 0,
      nome: this.nome,
      descricao: this.descricao,
      cidade: this.cidade,
      uf: this.uf,
      sallary: this.salario
    }

    if (!this.vaga) return;
    if (this.descricao === "" && this.nome === "" && this.salario === 0 && this.cidade === "" && this.uf === "") return;

    this.service.updateVaga(newVaga, this.vaga.id).subscribe(res => {
      console.log(res);
      this.getVagas();
    });

    // if (this.vaga.id !== undefined) {
    //   // console.log(this.vaga.id, newVaga)
      
    // }


  }

}
