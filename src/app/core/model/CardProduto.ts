export interface CardProduto {
  id: number;
  titulo: string;
  valor: number;
  foto: any;
  descricao: string;
  categoria: string;

}

export type CardProdutos = Array<CardProduto>;
