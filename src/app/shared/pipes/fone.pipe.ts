import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fone'
})
export class fonePipe implements PipeTransform {

    transform(fone: string|number): string|number {

    if (fone) {
      const value = fone.toString().replace(/\D/g, '');

      let foneFormatado: string = '';

      if (value.length > 10) {
        foneFormatado = value.replace(
          /(\d{2})(\d{5})(\d{4})/,
          '($1) $2-$3'
        );

      }else if (value.length > 8) {
        foneFormatado = value.replace(
          /(\d{2})(\d{4})(\d{4})/,
          '($1) $2-$3'
        );

      }
//      else {
//        if (fone !== '') { foneFormatado = value.replace(/^\d*/, '($1) //$2-$3'); }
//      }

      return foneFormatado;
    }
    return fone;
  }

}
