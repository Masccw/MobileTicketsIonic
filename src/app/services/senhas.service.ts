import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public inputNovaSenha: string = '';

  public senhasArray: string[] = [];
  public senhasSG: string[] = [];
  public senhasSP: string[] = [];
  public senhasSE: string[] = [];

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  novaSenha(tipoSenha: string) {
    const now = new Date();
    const yy = now.getFullYear().toString().substring(2, 4);
    const mm = (now.getMonth() + 1).toString().padStart(2, '0');
    const dd = now.getDate().toString().padStart(2, '0');
    const prefix = `${yy}${mm}${dd}-${tipoSenha}`;

    if (tipoSenha === 'SG') {
      this.somaGeral();
      const seq = this.senhasSG.length.toString().padStart(2, '0');
      this.inputNovaSenha = `${prefix}${seq}`;
      this.senhasSG.push(this.inputNovaSenha);
    } else if (tipoSenha === 'SP') {
      this.somaPrior();
      const seq = this.senhasSP.length.toString().padStart(2, '0');
      this.inputNovaSenha = `${prefix}${seq}`;
      this.senhasSP.push(this.inputNovaSenha);
    } else if (tipoSenha === 'SE') {
      this.somaExame();
      const seq = this.senhasSE.length.toString().padStart(2, '0');
      this.inputNovaSenha = `${prefix}${seq}`;
      this.senhasSE.push(this.inputNovaSenha);
    }

    this.senhasArray.push(this.inputNovaSenha);
    console.log(this.senhasArray);
  }
}
