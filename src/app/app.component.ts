import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    CheckboxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected form!: FormGroup;
  protected checked = false;
  protected indeterminate = false;
  protected disabled = false;
  ngOnInit(): void {
    this.form = this.builder.group({
      label: '',
      caption: '',
      valid: '',
      invalid: '',
    });
    this.form.valueChanges.subscribe();
  }
  constructor(private builder: FormBuilder) {}

  toChecked() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.disabled = false;
  }
  toIndeterminate() {
    this.indeterminate = !this.indeterminate;
    this.checked = false;
    this.disabled = false;
  }
  toDisabled() {
    this.disabled = !this.disabled;
  }
  toggleChecked(event: any) {
    console.log(event, 'checked');
  }
  toggleIndeterminate(event: any) {
    console.log(event, 'endeterm');
  }
}
