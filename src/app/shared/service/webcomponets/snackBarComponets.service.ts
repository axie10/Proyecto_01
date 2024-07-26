import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../components/snackBar/snackBar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarComponetsService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  show(message: string, duration: number, estilo: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: duration,
      data: { message: message },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: estilo
    });
  }

}
