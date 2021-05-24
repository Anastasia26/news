import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-news-list-add',
  templateUrl: './news-list-add.component.html',
  styleUrls: ['./news-list-add.component.scss']
})
export class NewsListAddComponent implements OnInit {
  form!: FormGroup;

  constructor() {
  }

  @Output() submitForm = new EventEmitter();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  submitAddNewsForm(): any {
    const payload = {
      title: this.form.value.title,
      description: this.form.value.description
    };
    this.submitForm.emit(payload);
    this.form.reset();
  }
}
