import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputModule} from "@taiga-ui/kit";

@Component({
  selector: 'app-route-2',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiHintModule,
    TuiInputModule,
    TuiTextfieldControllerModule
  ],
  templateUrl: './route-2.component.html',
  styleUrl: './route-2.component.scss'
})
export class Route2Component {
  public required = true;

  public formGroup = new FormGroup({
    test: new FormControl()
  })
}
