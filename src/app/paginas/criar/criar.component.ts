import { Component,OnInit } from '@angular/core';
import { ITarefaEnum } from 'src/app/shared/models/ITarefa';


@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key'
  atividades : ITarefaEnum[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.atividades = JSON.parse(tarefas)
    }
  }

  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0){
      return;
    }
    const tarefaEncontrada = this.atividades.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())

    if (!tarefaEncontrada){
      this.atividades.push({
        id: this.atividades.length, nome: nomeTarefa, concluida: false,
        editando: false
      })
      this.salvarLista()
    }
  }
  

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.atividades))
  }
  concluir(id: number) {
    const tarefaEncontrada = this.atividades.find( item => item.id == id)

    if (tarefaEncontrada){
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida
      this.salvarLista()
    }
}
}


