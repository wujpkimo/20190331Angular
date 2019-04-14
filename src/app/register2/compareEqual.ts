import { Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
export function compareEqual(fieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // debugger;
    if (!control.parent) {
      return null;
    }

    if (control.parent.get(fieldName).value === control.value) {
      return null;
    } else {
      return { compareEqual: true };
    }
  };
}
export const passwordValidator = Validators.compose([
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(16)
]);
