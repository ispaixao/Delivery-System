export interface Produto {
  id: number,
  titulo: string,
  valor: number,
  descricao: string,
  foto: string,
  categoria: string
}

export type Produtos = Array<Produto>;
