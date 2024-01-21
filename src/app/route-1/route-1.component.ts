import { Component } from '@angular/core';
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-route-1',
  standalone: true,
  imports: [
    TuiInputModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule
  ],
  templateUrl: './route-1.component.html',
  styleUrl: './route-1.component.scss'
})
export class Route1Component {
  public required = false;

  public formGroup = new FormGroup({
    test: new FormControl()
  })
}
