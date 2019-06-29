import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
  declarations: [NotAuthorizedComponent, PageNotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorModule { }
