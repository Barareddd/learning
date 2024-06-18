import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

interface Person {
  name: string;
  phoneNumber: string;
  province: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  personsData: Person[] = [];

  editingPersonIndex: number | null = null; // เก็บ index ของคนที่กำลังถูกแก้ไข

  constructor(private dataService: DataService) {
    this.personsData = dataService.getFormData();
    console.log(this.personsData);
  }

  ngOnInit(): void {}

  editingFinished(value: number | null) {
    console.log(value);
    this.editingPersonIndex = value;
  }
  startEdit(index: number) {
    this.editingPersonIndex = index;
  }
}
