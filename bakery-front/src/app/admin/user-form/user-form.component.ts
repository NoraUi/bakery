import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() formUser: FormGroup;
  @Input() action: string;

  isEdit: boolean;
  profiles: string[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.isEdit = this.action === 'EDIT';
  }

  close() {
    this.activeModal.close(this.formUser.value);
  }

}
