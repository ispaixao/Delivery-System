export interface Produto {
  id: number;
  titulo: string;
  valor: number;
  descricao: string;
  quantidade: number;
  foto: string;
  categoria: string;
}

export type Produtos = Array<Produto>;
