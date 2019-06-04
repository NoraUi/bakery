# Bakery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
cd src/app
ng g module login
cd login
touch login-routing.module.ts
ng g component change-password
ng g component login
cd ..
ng g module error
cd error
touch error-routing.module.ts
ng g component not-authorized
ng g component page-not-found
ng g component server-error
cd ..
ng g module shared
cd shared
mkdir directives
cd directives
mkdir one-click-only-button
cd one-click-only-button
ng g directive one-click-only-button
cd ../..
mkdir components
cd components
ng g component menu
cd ..
mkdir guards
cd guards
ng g service auth-guard
ng g service home-redirect-guard
ng g service role-guard
cd ..
mkdir services
cd services
mkdir aws
cd aws
ng g service aws
cd ..
mkdir user
cd user
ng g service user
cd ..
mkdir authentication
cd authentication
ng g service login
ng g service session
ng g service token-storage
cd ../../..
mkdir model
cd model
touch user.model.ts
cd ..
ng g module referencer
cd referencer
touch referencer-routing.module.ts
ng g component home
cd ..
ng g module contributor
cd contributor
touch contributor-routing.module.ts
ng g component home
cd ..
ng g module core
cd core
mkdir global-error-handler
cd global-error-handler
ng g service app-config
cd ..
mkdir services
cd services
ng g service app-config
cd ..
mkdir interceptors
cd interceptors
ng g service error-interceptor
ng g service jwt-interceptor
ng g service ng-zone-http-interceptor
cd ../..
ng g module admin
cd admin
touch admin-routing.module.ts
mkdir admin
cd admin
ng g component admin
cd ..
mkdir services
cd services
ng g service admin
cd ..
mkdir user-form
cd user-form
ng g component user-form
cd ../..
cd ../..
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
