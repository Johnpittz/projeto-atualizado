import { ITarefaEnum } from '../models/ITarefa';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  
  private atividades: ITarefaEnum[] = [];

  constructor() { }

  public getAtividades(): Observable<ITarefaEnum[]> {
    return of(this.atividades);
  }

  public adicionarAtividade(atividade: ITarefaEnum): void {
    this.atividades.push(atividade);
  }

  public atualizarAtividade(atividade: ITarefaEnum): void {
    const index = this.atividades.findIndex(a => a.id === atividade.id);
    if (index !== -1) {
      this.atividades[index] = atividade;
    }
  }
public excluirTarefa(tarefa: ITarefaEnum): void {
  const index = this.atividades.findIndex(item => item.id === tarefa.id);
  if (index >= 0) {
    this.atividades.splice(index, 1);
}
}
}