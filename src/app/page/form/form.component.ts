import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

interface Person {
  name: string;
  phoneNumber: string;
  province: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      province: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      this.dataService.addFormData(this.form.value);
      this.form.reset();
    } else {
      alert('Invalid form - please fill in all required fields.');
    }
    // คุณสามารถทำการเก็บค่าของฟอร์ม หรือส่งข้อมูลไปยังเซิร์ฟเวอร์ได้ที่นี่
  }

  ngOnInit(): void {}
}
