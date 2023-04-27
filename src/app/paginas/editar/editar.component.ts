import { ITarefaEnum } from './../../shared/models/ITarefa';
import { Component, OnInit, NgModule } from '@angular/core';




@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  
  TAREFA_KEY = 'tarefa_key'
  atividades : ITarefaEnum[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.atividades = JSON.parse(tarefas)
    }
  }
  private salvarLista(): void {
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.atividades))
  }

    editarTarefa(tarefa: ITarefaEnum): void {
      this.atividades.forEach(item => {
        if (item.id == tarefa.id) {
          item.editando = true;
        } else {
          item.editando = false;
        }
      });
    }
    
    salvarTarefa(): void {
      this.atividades.forEach(item => {
        if (item.editando) {
          item.editando = false;
        }
      });
      this.salvarLista();
    }
    
  }




