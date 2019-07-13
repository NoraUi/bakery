import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakeryService } from 'src/app/shared/services/bakery/bakery.service';
import { Bakery } from 'src/app/model/bakery.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LATITUDE_PATTERN, LONGITUDE_PATTERN, ZIP_PATTERN } from 'src/app/shared/constant/app.constants';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  bakeryForm: FormGroup;
  bakeryId: string|null = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private bakeryService: BakeryService) {
    this.bakeryForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(100)]],
      zip: ['', [Validators.required, Validators.pattern(ZIP_PATTERN)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      lat: ['', [Validators.required, Validators.pattern(LATITUDE_PATTERN)]],
      lon: ['', [Validators.required, Validators.pattern(LONGITUDE_PATTERN)]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      star: ['', [Validators.required, Validators.pattern('[0-9]{1}\.[0-9]{1}')]]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bakeryId = params.get('id');
      if (this.bakeryId) {
        this.fillBakery();
      }
    });
  }

  fillBakery() {
    this.bakeryService.get(this.bakeryId).subscribe(
      (bakery: Bakery) => {
        this.bakeryForm.get('id').setValue(this.bakeryId);
        this.bakeryForm.get('name').setValue(bakery.name);
        this.bakeryForm.get('address').setValue(bakery.address);
        this.bakeryForm.get('zip').setValue(bakery.zip);
        this.bakeryForm.get('city').setValue(bakery.city);
        this.bakeryForm.get('lat').setValue(bakery.lat);
        this.bakeryForm.get('lon').setValue(bakery.lon);
        this.bakeryForm.get('phone').setValue(bakery.phone);
        this.bakeryForm.get('star').setValue(bakery.star);
      },
      (err) => {
        if (err.status === 404) {
          this.router.navigate(['/error/404']);
        } else {
          this.router.navigate(['/error/server']);
        }
      });
  }

  get f() {
    return this.bakeryForm.controls;
  }

  addBakery() {
    this.bakeryService.createBakery(this.bakeryForm.value).subscribe(
      (data) => this.router.navigate([`/referencer/home`]),
      () => this.router.navigate(['/error/server']));
  }

}
