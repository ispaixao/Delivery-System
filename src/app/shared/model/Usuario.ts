export interface Usuario {
  id: number;
  Nome: string;
  Email: string;
  CPF: string;
  Telefone: string;
  dataNascimento: string;
  Senha: string;
  ConfirmSenha: string;
  Cargo: string;
  DataCriacao: string;
}


export type Usuarios = Array<Usuario>;
