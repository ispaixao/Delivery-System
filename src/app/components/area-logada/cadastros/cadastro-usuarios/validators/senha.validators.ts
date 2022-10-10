import { FormGroup } from '@angular/forms';

export function senhaValidator(formGroup: FormGroup) {
  const senha = formGroup.get('senha')?.value;
  const confirmSenha = formGroup.get('confirmSenha')?.value;

  if (senha != confirmSenha) {
    return { senha: true };
  } else {
    return null;
  }
}
