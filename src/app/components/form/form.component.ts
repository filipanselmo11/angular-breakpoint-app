import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent  {

}
