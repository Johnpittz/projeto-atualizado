import { Component, OnInit } from '@angular/core';
import { ITarefaEnum } from 'src/app/shared/models/ITarefa';
import { TarefaService } from 'src/app/shared/service/tarefa.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  public atividades: ITarefaEnum[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getAtividades().subscribe(atividades => this.atividades = atividades);
  }

  public adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length === 0){
      return;
    }
    const tarefaEncontrada = this.atividades.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase());

    if (!tarefaEncontrada){
      this.tarefaService.adicionarAtividade({
        id: this.atividades.length, nome: nomeTarefa, concluida: false,
        editando: false
      });
    }
  }
  
  public concluir(id: number): void {
    const tarefaEncontrada = this.atividades.find(item => item.id == id);

    if (tarefaEncontrada){
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida;
      this.tarefaService.atualizarAtividade(tarefaEncontrada);
    }
  }
}