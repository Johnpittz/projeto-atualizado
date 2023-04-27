import { Component,OnInit } from '@angular/core';
import { ITarefaEnum } from 'src/app/shared/models/ITarefa';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key'
  atividades : ITarefaEnum[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.atividades = JSON.parse(tarefas)
    }
  }
  excluir(id: number) : void {
    this.atividades = this.atividades.filter(item => (item.id != id))
    this.salvarLista()
  }
  private salvarLista(): void {
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.atividades))
  }

}