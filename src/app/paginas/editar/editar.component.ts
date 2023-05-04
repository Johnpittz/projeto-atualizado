import { Component, OnInit } from '@angular/core';
import { ITarefaEnum } from 'src/app/shared/models/ITarefa';
import { TarefaService } from 'src/app/shared/service/tarefa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  
  public atividades: ITarefaEnum[] = [];

  constructor(private tarefaService: TarefaService) { };

  ngOnInit(): void {
    this.tarefaService.getAtividades().subscribe(atividades => this.atividades = atividades);
  }

  public editarTarefa(tarefa: ITarefaEnum): void {
    this.atividades.forEach(item => {
      if (item.id === tarefa.id) {
        item.editando = true;
      } else {
        item.editando = false;
      }
    });
  }
  
  public salvarTarefa(): void {
    this.atividades.forEach(item => {
      if (item.editando) {
        item.editando = false;
        this.tarefaService.atualizarAtividade(item);
      }
    });
  }
}