import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
} from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgTemplateOutlet,
    NgSwitch,
    NgSwitchCase,
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent implements OnChanges {
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;

  @Input() label: string | undefined = undefined;
  @Input() caption: string | undefined = undefined;
  @Input() valid: string | undefined = undefined;
  @Input() invalid: string | undefined = undefined;

  @Input() disabled: boolean = false;

  @Output() toChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toIndeterminate: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  type: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.caption !== undefined) {
      this.type = 'caption';
    } else if (this.valid !== undefined) {
      this.type = 'valid';
    } else if (this.invalid !== undefined) {
      this.type = 'invalid';
    } else {
      this.type = '';
    }
  }
  handleChanges(ev: any) {
    const input = ev.target as HTMLInputElement;
    this.toChecked.emit(input.checked);
    this.toIndeterminate.emit(input.indeterminate);
  }
}
