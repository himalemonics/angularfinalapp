import { AbstractControl } from '@angular/forms';

export function fullnameValidator(control: AbstractControl): { [key: string]: any } | null {
    const fullnameValid = /^[a-zA-Z]{5,}[a-zA-Z]+$/.test(control.value);
    return fullnameValid ? null : { invalidfullName: { valid: false, value: control.value }}
}