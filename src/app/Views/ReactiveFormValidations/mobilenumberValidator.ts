import { AbstractControl } from '@angular/forms';

export function mobilenumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const mobilenumberValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(control.value);
    return mobilenumberValid ? null : { invalidNumber: { valid: false, value: control.value }}
}