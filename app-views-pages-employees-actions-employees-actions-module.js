(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-employees-actions-employees-actions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\t dir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"AdvancedPaymentForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t\t  (close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"role === 'Administrator'\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة السلفة\" formControlName=\"advancedPaymentStatusId\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t{{employee.name}}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>حالة السلفة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>حالة السلفة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"السبب\" formControlName=\"advancedDetails\"></textarea>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>تفاصيل السلفة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تفاصيل السلفة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"الكمية\" formControlName=\"amount\"></textarea>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"AdvancedPayment.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"date\" matInput placeholder=\"رد المسؤول\" formControlName=\"adminReply\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الرد</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الرد</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"AdvancedPayment.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة السلفة\" formControlName=\"advancedPaymentStatusId\">\r\n\t\t\t\t\t\t\t<mat-option value=\"1\">\r\n\t\t\t\t\t\t\t\tموافق عليها\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"2\">\r\n\t\t\t\t\t\t\t\tمرفوضة\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>حالة الاجازة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>حالة الاجازة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>السلف</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"طلب سلفة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة سلفة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<!--\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-hint align=\"start\">-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<strong>بحث</strong>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t\t</mat-hint>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t\t</mat-form-field>-->\r\n\t\t\t\t\t<!--\t\t\t\t\t</div>-->\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedEmployee\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"employee.id\" *ngFor=\"let employee of employees\">\r\n\t\t\t\t\t\t\t\t\t\t{{employee.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الموظف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadAdvancedPaymentsList()\" mat-raised-button matTooltip=\"\" color=\"primary\"\r\n\t\t\t\t\ttype=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"advancedDetails\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تفاصيل السلفة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let advancedPayment\">{{advancedPayment.advancedDetails}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"user\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الموظف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let advancedPayment\">{{advancedPayment.user}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>المبلغ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let advancedPayment\">{{advancedPayment.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let advancedPayment\">{{advancedPayment.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\" *ngIf=\"role === 'Administrator'\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let advancedPayment\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\"\r\n\t\t\t\t\t\t\t(click)=\"editReading(advancedPayment)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"-->\r\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t(click)=\"deleteReading(advancedPayment)\">-->\r\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>-->\r\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</button>&nbsp;-->\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/employees-actions.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/employees-actions.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n\t<mat-tab label=\"الاجازات\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-vacation></gas-vacation>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"السلف\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-advanced-payment [employees]=\"employees\"></gas-advanced-payment>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<!-- <mat-tab label=\"مبيعات الزيوت\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<oil-sales></oil-sales>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab>\r\n\t<mat-tab label=\"قراءاتي\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<gas-users-readings></gas-users-readings>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</mat-tab> -->\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"oilSalesForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الصنف\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong> الصنف</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"السعر\" formControlName=\"price\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>السعر</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"الكمية\" formControlName=\"amount\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الكمية</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>مبيعات الزيوت</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"سعر جديد\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة حركة بيع</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"category\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الصنف</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.category}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"price\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>السعر</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.price}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"amount\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>الكمية</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.amount}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\">{{oil.date}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let oil\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(oil)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\tdir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"readingForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"العداد\" formControlName=\"gpNumber\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.id\" *ngFor=\"let gasPump of gasPumps\">{{gasPump.name}}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم العداد</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"الشفت\" formControlName=\"shift\">\r\n\t\t\t\t\t\t\t<mat-option [value]=\"shift.id\" *ngFor=\"let shift of shifts\">\r\n\t\t\t\t\t\t\t\t{{shift.name}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>رقم الشفت</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\tاختر <strong>الشفت</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"القراءة\" formControlName=\"reading\" />\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>القراءة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>القراءة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"kt-separator kt-separator--dashed\"></div> -->\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>قراءاتي</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"قراءة جديدة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة قراءة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedFuelType\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"fuelType.id\" *ngFor=\"let fuelType of fuelTypes\">\r\n\t\t\t\t\t\t\t\t\t\t{{fuelType.name}}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>الصنف</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"selectedGasPump\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">الكل</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"gasPump.id\" *ngFor=\"let gasPump of gasPumps\">{{gasPump.name}}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>العداد</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\" style=\"margin-top: -10px;\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"بحث في جميع الحقول\" #searchInput>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>بحث</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadUsersReadingsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"gpNumber\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"gpNumber\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم العداد</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.gpNumber}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"shift\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>رقم الشفت</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.shift}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"reading\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>القراءة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\">{{reading.reading}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"readingDate\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header class=\"dateColumn\">تاريخ القراءة\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" class=\"dateColumn\">{{reading.readingDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let reading\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(reading)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"\r\n\t\t\t\t\t\t\t(click)=\"deleteReading(reading)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress kt-portlet--body-progress-overlay' : viewLoading }\"\r\n\t dir=\"rtl\" style=\"text-align: right;\">\r\n\t<div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<form class=\"kt-form\" [formGroup]=\"VacationForm\">\r\n\t\t<div class=\"kt-portlet__body\">\r\n\r\n\t\t\t<div class=\"kt-portlet__body-progress\">\r\n\t\t\t\t<mat-spinner [diameter]=\"20\"></mat-spinner>\r\n\t\t\t</div>\r\n\r\n\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"10000\" [showCloseButton]=\"true\"\r\n\t\t\t\t\t  (close)=\"onAlertClose($event)\">\r\n\t\t\t\tالرجاء تصحيح الأخطاء والمحاولة مجددا\r\n\t\t\t</kt-alert>\r\n\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"السبب\" formControlName=\"vacationDetails\"></textarea>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>تفاصيل الاجازة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تفاصيل الاجازة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"number\" matInput placeholder=\"عدد ايام الاجازة\"\r\n\t\t\t\t\t\t\t   formControlName=\"vacationPeriodDays\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>عدد الايام</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>عدد الايام</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"date\" matInput placeholder=\"تاريخ الاجازة\" formControlName=\"startDate\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>تاريخ الاجازة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>تاريخ الاجازة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"Vacation.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input type=\"date\" matInput placeholder=\"رد المسؤول\" formControlName=\"adminReply\"/>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>الرد</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>الرد</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\" *ngIf=\"Vacation.id > 0\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<mat-select placeholder=\"حالة الطلب\" formControlName=\"vacationStatusId\">\r\n\t\t\t\t\t\t\t<mat-option value=\"1\">\r\n\t\t\t\t\t\t\t\tموافق عليها\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"2\">\r\n\t\t\t\t\t\t\t\tمرفوضة\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error>الرجاء ادخال\r\n\t\t\t\t\t\t\t<strong>حالة الاجازة</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t<strong>حالة الاجازة</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n\t\t\t<div class=\"kt-form__actions kt-form__actions--solid p-3\">\r\n\t\t\t\t<div class=\"row text-left\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-outline-danger\"\r\n\t\t\t\t\t\t\t\tmat-dialog-close cdkFocusInitial>الغاء\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" style=\"margin: 5px; min-width: 60px;\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t(click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"{{getTitle()}}\">\r\n\t\t\t\t\t\t\tتأكيد\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<!-- [viewLoading$]=\"isLoadingResults\" -->\r\n\t<kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t<span>اجازاتي</span>\r\n\t\t\t</h3>\r\n\t\t\t<!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n\t\t\t<!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addReading()\" mat-raised-button matTooltip=\"طلب اجازة\" color=\"primary\" type=\"button\">\r\n\t\t\t\t<span>اضافة اجازة</span>\r\n\t\t\t</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateFrom\" name=\"dateFrom\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>بداية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-4 col-lg-3 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput type=\"datetime-local\" [(ngModel)]=\"dateTo\" name=\"dateTo\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\tاختر <strong>نهاية الفترة</strong>\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"loadVacationsList()\" mat-raised-button matTooltip=\"\" color=\"primary\" type=\"button\">\r\n\t\t\t\t\t<span>بحث</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div style=\"text-align: right;\">\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"exporter.exportTable('xlsx',\r\n\t\t\t{fileName: getExcelFileName(), sheet: getExcelFileName(), Props: {Author: 'Admin'}})\"\r\n\t\t\t\tmatTooltip=\"Excel\">تنزيل</button>\r\n\t\t</div>\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"date\" matSortDirection=\"asc\" matSortDisableClear matTableExporter\r\n\t\t\t\t#exporter=\"matTableExporter\" [hiddenColumns]=\"[displayedColumns.length - 1]\">\r\n\t\t\t\t<ng-container matColumnDef=\"reason\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>تفاصيل الاجازة</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let vacation\">{{vacation.vacationDetails}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>التاريخ</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let vacation\">{{vacation.startDate}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t <ng-container matColumnDef=\"actions\" *ngIf=\"role === 'Administrator'\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"actionsColumn\">تعديل</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let vacation\" class=\"actionsColumn\">\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\" matTooltip=\"تعديل\" (click)=\"editReading(vacation)\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n<!--\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"حذف\" type=\"button\"-->\r\n<!--\t\t\t\t\t\t\t(click)=\"deleteReading(vacation)\">-->\r\n<!--\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>-->\r\n<!--\t\t\t\t\t\t</button>&nbsp;-->\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<!-- Message for empty data  -->\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"!dataSource.data.length\">{{languageText.empty}}</div>\r\n\t\t\t<div class=\"mat-table__message\" *ngIf=\"isLoadingResults\">{{languageText.searching}}</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\t\t<div class=\"mat-table__bottom\">\r\n\t\t\t<!-- MATERIAL SPINNER | Url: 'https://material.angular.io/components/progress-spinner/overview' -->\r\n\t\t\t<mat-spinner [diameter]=\"20\" *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t<!-- MATERIAL PAGINATOR | Binded to dasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/paginator/overview' -->\r\n\t\t\t<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 100, dataSource.data.length]\" [length]=\"dataSource.data.length\"\r\n\t\t\t\t[showFirstLastButtons]=\"true\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AdvancedPaymentEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPaymentEditDialogComponent", function() { return AdvancedPaymentEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_advanced_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/advanced-payment.model */ "./src/app/views/pages/employees-actions/advanced-payments/models/advanced-payment.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var AdvancedPaymentEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function AdvancedPaymentEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.fuelTypes = [];
        this.employees = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AdvancedPaymentEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.AdvancedPayment = this.data.reading;
        this.employees = this.data.employees;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    AdvancedPaymentEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    AdvancedPaymentEditDialogComponent.prototype.createForm = function () {
        this.AdvancedPaymentForm = this.fb.group({
            id: [this.AdvancedPayment.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userId: [this.AdvancedPayment.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            advancedDetails: [this.AdvancedPayment.advancedDetails, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [this.AdvancedPayment.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            advancedPaymentStatusId: [this.AdvancedPayment.advancedPaymentStatusId, this.AdvancedPayment.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            adminReply: [this.AdvancedPayment.adminReply, this.AdvancedPayment.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
        });
    };
    /**
     * Returns page title
     */
    AdvancedPaymentEditDialogComponent.prototype.getTitle = function () {
        if (this.AdvancedPayment.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629";
        }
        return 'اضافة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    AdvancedPaymentEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.AdvancedPaymentForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared fuel price
     */
    AdvancedPaymentEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.AdvancedPaymentForm.controls;
        var _AdvancedPayment = new _models_advanced_payment_model__WEBPACK_IMPORTED_MODULE_7__["AdvancedPaymentModel"]();
        _AdvancedPayment.id = this.AdvancedPayment.id;
        _AdvancedPayment.userId = controls.userId.value;
        _AdvancedPayment.advancedDetails = controls.advancedDetails.value;
        _AdvancedPayment.amount = controls.amount.value;
        if (this.AdvancedPayment.id > 0) {
            _AdvancedPayment.adminReply = controls.adminReply.value;
            _AdvancedPayment.advancedPaymentStatusId = controls.advancedPaymentStatusId.value;
        }
        return _AdvancedPayment;
    };
    /**
     * On Submit
     */
    AdvancedPaymentEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.AdvancedPaymentForm.controls;
        console.log(this.AdvancedPaymentForm);
        /** check form */
        if (this.AdvancedPaymentForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Fuel price
     *
     * @param _AdvancedPayment: FuelPricesModel
     */
    AdvancedPaymentEditDialogComponent.prototype.updateReading = function (_AdvancedPayment) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/AdvancePayment', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _AdvancedPayment), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _AdvancedPayment: _AdvancedPayment, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل السلفة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _AdvancedPayment: FuelPricesModel
     */
    AdvancedPaymentEditDialogComponent.prototype.createReading = function (_AdvancedPayment) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/AdvancePayment', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _AdvancedPayment), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _AdvancedPayment: _AdvancedPayment, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة السلفة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    AdvancedPaymentEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    AdvancedPaymentEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    AdvancedPaymentEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'advanced-payment-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./advanced-payment-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], AdvancedPaymentEditDialogComponent);
    return AdvancedPaymentEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.row div {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvYWR2YW5jZWQtcGF5bWVudHMvYWR2YW5jZWQtcGF5bWVudC1pbmZvL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGVtcGxveWVlcy1hY3Rpb25zXFxhZHZhbmNlZC1wYXltZW50c1xcYWR2YW5jZWQtcGF5bWVudC1pbmZvXFxhZHZhbmNlZC1wYXltZW50LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtcGxveWVlcy1hY3Rpb25zL2FkdmFuY2VkLXBheW1lbnRzL2FkdmFuY2VkLXBheW1lbnQtaW5mby9hZHZhbmNlZC1wYXltZW50LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREdDO0VBQ0MsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtcGxveWVlcy1hY3Rpb25zL2FkdmFuY2VkLXBheW1lbnRzL2FkdmFuY2VkLXBheW1lbnQtaW5mby9hZHZhbmNlZC1wYXltZW50LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIiwiLmRhdGVDb2x1bW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hY3Rpb25zQ29sdW1uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJvdyBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AdvancedPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPaymentComponent", function() { return AdvancedPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_advanced_payment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/advanced-payment.model */ "./src/app/views/pages/employees-actions/advanced-payments/models/advanced-payment.model.ts");
/* harmony import */ var _advanced_payment_edit_advanced_payment_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advanced-payment-edit/advanced-payment-edit.dialog.component */ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

// Services and Models

// Components

// Http


// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var AdvancedPaymentComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function AdvancedPaymentComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['advancedDetails', 'user', 'amount', 'date']; // , 'actions'
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        this.employees = [];
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.customersResult = [];
        this.selectedEmployee = '';
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
        // Language
        this.languageText = {
            empty: 'لا يوجد بيانات لعرضها',
            searching: 'جار البحث ...',
            search: 'بحث',
            filterEmptyMessage: 'لا يوجد بيانات مطابقة ل ',
            confirm: 'تأكيد',
            close: 'الغاء',
            add: 'اضافة',
            itemsPerPage: 'عدد الصفوف بالصفحة:',
            firstPage: 'الصفحة الأولى',
            lastpage: 'الصفحة الأخيرة',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية'
        };
        this.arabicRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 \u0645\u0646 " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length;
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AdvancedPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.displayedColumns.push('actions');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadAdvancedPaymentsList();
    };
    /**
     * On Destroy
     */
    AdvancedPaymentComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load AdvancedPayments List from service through data-source
     */
    AdvancedPaymentComponent.prototype.loadAdvancedPaymentsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        if (this.selectedEmployee != '')
            url += '&UserId=' + this.selectedEmployee;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/AdvancePayment' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data);
                if (_this.paginator) {
                    _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                    _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                    _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                    _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                    _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                    _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
                }
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        }, function (err) {
            _this.isLoadingResults = false;
            _this.dataSource.data = [];
            if (_this.paginator) {
                _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
            }
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    /**
     * Show add reading dialog
     */
    AdvancedPaymentComponent.prototype.addReading = function () {
        var newReading = new _models_advanced_payment_model__WEBPACK_IMPORTED_MODULE_7__["AdvancedPaymentModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: AdvancedPaymentModel
     */
    AdvancedPaymentComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_advanced_payment_edit_advanced_payment_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedPaymentEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadAdvancedPaymentsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    AdvancedPaymentComponent.prototype.getExcelFileName = function () {
        return 'السلف' + '-' + new Date().toISOString().slice(0, 10);
    };
    AdvancedPaymentComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AdvancedPaymentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AdvancedPaymentComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdvancedPaymentComponent.prototype, "searchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedPaymentComponent.prototype, "employees", void 0);
    AdvancedPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-advanced-payment',
            template: __webpack_require__(/*! raw-loader!./advanced-payment-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./advanced-payment-info.component.scss */ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], AdvancedPaymentComponent);
    return AdvancedPaymentComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/advanced-payments/models/advanced-payment.model.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/advanced-payments/models/advanced-payment.model.ts ***!
  \**************************************************************************************************/
/*! exports provided: AdvancedPaymentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPaymentModel", function() { return AdvancedPaymentModel; });
var AdvancedPaymentModel = /** @class */ (function () {
    function AdvancedPaymentModel() {
    }
    AdvancedPaymentModel.prototype.clear = function () {
        this.id = 0;
        this.userId = 0;
        this.advancedPaymentStatusId = 0;
        this.adminReply = '';
        this.advancedDetails = '';
        this.amount = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return AdvancedPaymentModel;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/employees-actions.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/employees-actions.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZW1wbG95ZWVzLWFjdGlvbnNcXGVtcGxveWVlcy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9lbXBsb3llZXMtYWN0aW9ucy9lbXBsb3llZXMtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNDLGFBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtcGxveWVlcy1hY3Rpb25zL2VtcGxveWVlcy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdDo6bmctZGVlcCB7XHJcblx0XHRuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/employees-actions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/employees-actions.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeesActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesActionsComponent", function() { return EmployeesActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular



// Services
// Widgets model


var EmployeesActionsComponent = /** @class */ (function () {
    function EmployeesActionsComponent(layoutConfigService, store, http) {
        this.layoutConfigService = layoutConfigService;
        this.store = store;
        this.http = http;
        this.employees = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    EmployeesActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.getEmployees();
    };
    /**
     * On Destroy
     */
    EmployeesActionsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    EmployeesActionsComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl + 'api/Users', { headers: this.headers }).subscribe(function (res) {
            _this.employees = res.data.map(function (item) {
                return {
                    name: item.name,
                    id: item.userId
                };
            });
        });
    };
    EmployeesActionsComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmployeesActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gas-employees-actions',
            template: __webpack_require__(/*! raw-loader!./employees-actions.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/employees-actions.component.html"),
            styles: [__webpack_require__(/*! ./employees-actions.component.scss */ "./src/app/views/pages/employees-actions/employees-actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutConfigService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeesActionsComponent);
    return EmployeesActionsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/employees-actions.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/employees-actions.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeesActionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesActionsModule", function() { return EmployeesActionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _employees_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees-actions.component */ "./src/app/views/pages/employees-actions/employees-actions.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _readings_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./readings/users-readings-edit/users-readings-edit.dialog.component */ "./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.ts");
/* harmony import */ var _readings_users_readings_users_readings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readings/users-readings/users-readings.component */ "./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mat-table-exporter */ "./node_modules/mat-table-exporter/fesm5/mat-table-exporter.js");
/* harmony import */ var _vacations_vacation_info_vacation_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vacations/vacation-info/vacation-info.component */ "./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.ts");
/* harmony import */ var _vacations_vacation_edit_vacation_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vacations/vacation-edit/vacation-edit.dialog.component */ "./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.ts");
/* harmony import */ var _advanced_payments_advanced_payment_info_advanced_payment_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./advanced-payments/advanced-payment-info/advanced-payment-info.component */ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-info/advanced-payment-info.component.ts");
/* harmony import */ var _advanced_payments_advanced_payment_edit_advanced_payment_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component */ "./src/app/views/pages/employees-actions/advanced-payments/advanced-payment-edit/advanced-payment-edit.dialog.component.ts");
/* harmony import */ var _oil_sales_oil_sales_info_oil_sales_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./oil-sales/oil-sales-info/oil-sales-info.component */ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.ts");
/* harmony import */ var _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./oil-sales/oil-sales-edit/oil-sales-edit.dialog.component */ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts");

// Angular



// Core Module








var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"]
];







var EmployeesActionsModule = /** @class */ (function () {
    function EmployeesActionsModule() {
    }
    EmployeesActionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _employees_actions_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesActionsComponent"]
                    },
                ]),
                materialModules,
                mat_table_exporter__WEBPACK_IMPORTED_MODULE_12__["MatTableExporterModule"]
            ],
            entryComponents: [_readings_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UsersReadingsEditDialogComponent"], _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__["OilSalesEditDialogComponent"], _vacations_vacation_edit_vacation_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["VacationEditDialogComponent"], _advanced_payments_advanced_payment_edit_advanced_payment_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AdvancedPaymentEditDialogComponent"]],
            exports: [],
            providers: [],
            declarations: [
                _employees_actions_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesActionsComponent"],
                _readings_users_readings_users_readings_component__WEBPACK_IMPORTED_MODULE_11__["UsersReadingsComponent"],
                _readings_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UsersReadingsEditDialogComponent"],
                _oil_sales_oil_sales_info_oil_sales_info_component__WEBPACK_IMPORTED_MODULE_17__["OilSalesComponent"],
                _oil_sales_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_18__["OilSalesEditDialogComponent"],
                _vacations_vacation_info_vacation_info_component__WEBPACK_IMPORTED_MODULE_13__["VacationComponent"],
                _vacations_vacation_edit_vacation_edit_dialog_component__WEBPACK_IMPORTED_MODULE_14__["VacationEditDialogComponent"],
                _advanced_payments_advanced_payment_info_advanced_payment_info_component__WEBPACK_IMPORTED_MODULE_15__["AdvancedPaymentComponent"],
                _advanced_payments_advanced_payment_edit_advanced_payment_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AdvancedPaymentEditDialogComponent"]
            ]
        })
    ], EmployeesActionsModule);
    return EmployeesActionsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/oil-sales/models/oil-sales.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/oil-sales/models/oil-sales.model.ts ***!
  \***********************************************************************************/
/*! exports provided: OilSalesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesModel", function() { return OilSalesModel; });
var OilSalesModel = /** @class */ (function () {
    function OilSalesModel() {
    }
    OilSalesModel.prototype.clear = function () {
        this.id = 0;
        this.category = '';
        this.price = '';
        this.amount = '';
        this.date = new Date().toISOString().substr(0, 16);
    };
    OilSalesModel.prototype.initialize = function () {
        this.id = 1;
        this.category = 'gasoline';
        this.price = '6.5';
        this.amount = '5';
        this.date = new Date().toISOString().substr(0, 16);
    };
    return OilSalesModel;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OilSalesEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesEditDialogComponent", function() { return OilSalesEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-sales.model */ "./src/app/views/pages/employees-actions/oil-sales/models/oil-sales.model.ts");

// Angular


// Material


// CRUD

// Services and Models


var OilSalesEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function OilSalesEditDialogComponent(dialogRef, data, fb, store, typesUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.typesUtilsService = typesUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.fuelTypes = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    OilSalesEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.oilSales = this.data.reading;
        this.fuelTypes = this.data.fuelTypes;
        this.createForm();
    };
    /**
     * On destroy
     */
    OilSalesEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    OilSalesEditDialogComponent.prototype.createForm = function () {
        this.oilSalesForm = this.fb.group({
            id: [this.oilSales.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [this.oilSales.category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [this.oilSales.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [this.oilSales.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    OilSalesEditDialogComponent.prototype.getTitle = function () {
        if (this.oilSales.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629 '" + this.oilSales.category + "'";
        }
        return 'اضافة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    OilSalesEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.oilSalesForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared fuel price
     */
    OilSalesEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.oilSalesForm.controls;
        var _oilSales = new _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__["OilSalesModel"]();
        _oilSales.id = this.oilSales.id;
        _oilSales.category = controls.category.value;
        _oilSales.price = controls.price.value;
        _oilSales.amount = controls.amount.value;
        return _oilSales;
    };
    /**
     * On Submit
     */
    OilSalesEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.oilSalesForm.controls;
        console.log(this.oilSalesForm);
        /** check form */
        if (this.oilSalesForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Fuel price
     *
     * @param _oilSales: FuelPricesModel
     */
    OilSalesEditDialogComponent.prototype.updateReading = function (_oilSales) {
        var updateCustomer = {
            id: _oilSales.id,
            changes: _oilSales
        };
        // hit api to edit reading
        this.dialogRef.close({ _oilSales: _oilSales, isEdit: true });
    };
    /**
     * Create Fuel price
     *
     * @param _oilSales: FuelPricesModel
     */
    OilSalesEditDialogComponent.prototype.createReading = function (_oilSales) {
        // hit api to create reading
        this.dialogRef.close({ _oilSales: _oilSales, isEdit: false });
    };
    /** Alect Close event */
    OilSalesEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    OilSalesEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["TypesUtilsService"] }
    ]; };
    OilSalesEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-sales-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./oil-sales-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["TypesUtilsService"]])
    ], OilSalesEditDialogComponent);
    return OilSalesEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.row div {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvb2lsLXNhbGVzL29pbC1zYWxlcy1pbmZvL0M6XFxVc2Vyc1xcb21lblxcRGVza3RvcFxcR2l0SHViXFxGcm9udC1LYXplYWhcXGdhcy1zdGF0aW9uL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGVtcGxveWVlcy1hY3Rpb25zXFxvaWwtc2FsZXNcXG9pbC1zYWxlcy1pbmZvXFxvaWwtc2FsZXMtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvb2lsLXNhbGVzL29pbC1zYWxlcy1pbmZvL29pbC1zYWxlcy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURHQztFQUNDLG1CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9lbXBsb3llZXMtYWN0aW9ucy9vaWwtc2FsZXMvb2lsLXNhbGVzLWluZm8vb2lsLXNhbGVzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZUNvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFjdGlvbnNDb2x1bW4ge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93IHtcclxuXHRkaXYge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIiwiLmRhdGVDb2x1bW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hY3Rpb25zQ29sdW1uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJvdyBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OilSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilSalesComponent", function() { return OilSalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/oil-sales.model */ "./src/app/views/pages/employees-actions/oil-sales/models/oil-sales.model.ts");
/* harmony import */ var _oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oil-sales-edit/oil-sales-edit.dialog.component */ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-edit/oil-sales-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

// Services and Models

// Components

// Http

// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var OilSalesComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function OilSalesComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['category', 'price', 'amount', 'date', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.employees = [];
        this.fuelTypes = [];
        this.gasPumps = [];
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.customersResult = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        // Language
        this.languageText = {
            empty: 'لا يوجد بيانات لعرضها',
            searching: 'جار البحث ...',
            search: 'بحث',
            filterEmptyMessage: 'لا يوجد بيانات مطابقة ل ',
            confirm: 'تأكيد',
            close: 'الغاء',
            add: 'اضافة',
            itemsPerPage: 'عدد الصفوف بالصفحة:',
            firstPage: 'الصفحة الأولى',
            lastpage: 'الصفحة الأخيرة',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية'
        };
        // Symmary data
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.arabicRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 \u0645\u0646 " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length;
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    OilSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    OilSalesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    OilSalesComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.http.get('', { headers: this.headers })
            .subscribe(function (res) {
            setTimeout(function () {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
                if (_this.paginator) {
                    _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                    _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                    _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                    _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                    _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                    _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
                }
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, 1000);
        }, function (err) {
            _this.isLoadingResults = false;
            _this.dataSource.data = [];
            var userReadingModel = new _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__["OilSalesModel"]();
            userReadingModel.initialize();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([
                userReadingModel
            ]);
            if (_this.paginator) {
                _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
            }
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    /**
     * Delete Reading
     *
     * @param _item: OilSalesModel
     */
    OilSalesComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف القراءة";
        var _description = "هل أنت متأكد من حذف القراءة؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Show add reading dialog
     */
    OilSalesComponent.prototype.addReading = function () {
        var newReading = new _models_oil_sales_model__WEBPACK_IMPORTED_MODULE_7__["OilSalesModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: OilSalesModel
     */
    OilSalesComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_oil_sales_edit_oil_sales_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OilSalesEditDialogComponent"], {
            data: {
                reading: reading,
                fuelTypes: this.fuelTypes
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    OilSalesComponent.prototype.getExcelFileName = function () {
        return 'مبيعات الزيوت' + '-' + new Date().toISOString().slice(0, 10);
    };
    OilSalesComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OilSalesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OilSalesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OilSalesComponent.prototype, "searchInput", void 0);
    OilSalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'oil-sales',
            template: __webpack_require__(/*! raw-loader!./oil-sales-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./oil-sales-info.component.scss */ "./src/app/views/pages/employees-actions/oil-sales/oil-sales-info/oil-sales-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], OilSalesComponent);
    return OilSalesComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/readings/models/user-readings.model.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/readings/models/user-readings.model.ts ***!
  \**************************************************************************************/
/*! exports provided: UserReadingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReadingModel", function() { return UserReadingModel; });
var UserReadingModel = /** @class */ (function () {
    function UserReadingModel() {
    }
    UserReadingModel.prototype.clear = function () {
        this.id = 0;
        this.gpNumber = '';
        this.shift = '';
        this.reading = '';
        this.readingDate = new Date().toISOString().substr(0, 16);
    };
    UserReadingModel.prototype.initialize = function () {
        this.id = 1;
        this.gpNumber = '1';
        this.shift = '1';
        this.reading = '200';
        this.readingDate = new Date().toISOString().substr(0, 16);
    };
    return UserReadingModel;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UsersReadingsEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersReadingsEditDialogComponent", function() { return UsersReadingsEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_user_readings_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user-readings.model */ "./src/app/views/pages/employees-actions/readings/models/user-readings.model.ts");

// Angular


// Material


// CRUD

// Services and Models


var UsersReadingsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function UsersReadingsEditDialogComponent(dialogRef, data, fb, store, typesUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.typesUtilsService = typesUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.fuelTypes = [];
        this.gasPumps = [];
        // TODO: get using api
        this.shifts = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersReadingsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.userReading = this.data.reading;
        this.fuelTypes = this.data.fuelTypes;
        this.gasPumps = this.data.gasPumps;
        this.createForm();
    };
    /**
     * On destroy
     */
    UsersReadingsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    UsersReadingsEditDialogComponent.prototype.createForm = function () {
        this.readingForm = this.fb.group({
            id: [this.userReading.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gpNumber: [this.userReading.gpNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shift: [this.userReading.shift, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reading: [this.userReading.reading, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /**
     * Returns page title
     */
    UsersReadingsEditDialogComponent.prototype.getTitle = function () {
        if (this.userReading.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629";
        }
        return 'اضافة قراءة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    UsersReadingsEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.readingForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared customer
     */
    UsersReadingsEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.readingForm.controls;
        var _reading = new _models_user_readings_model__WEBPACK_IMPORTED_MODULE_7__["UserReadingModel"]();
        _reading.id = this.userReading.id;
        _reading.gpNumber = controls.gpNumber.value;
        _reading.shift = controls.shift.value;
        _reading.reading = controls.shiftInitalReading.value;
        return _reading;
    };
    /**
     * On Submit
     */
    UsersReadingsEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.readingForm.controls;
        console.log(this.readingForm);
        /** check form */
        if (this.readingForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update customer
     *
     * @param _reading: UserReadingModel
     */
    UsersReadingsEditDialogComponent.prototype.updateReading = function (_reading) {
        var updateCustomer = {
            id: _reading.id,
            changes: _reading
        };
        // hit api to edit reading
        this.dialogRef.close({ _reading: _reading, isEdit: true });
    };
    /**
     * Create customer
     *
     * @param _reading: UserReadingModel
     */
    UsersReadingsEditDialogComponent.prototype.createReading = function (_reading) {
        // hit api to create reading
        this.dialogRef.close({ _reading: _reading, isEdit: false });
    };
    /** Alect Close event */
    UsersReadingsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UsersReadingsEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["TypesUtilsService"] }
    ]; };
    UsersReadingsEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-users-readings-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./users-readings-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["TypesUtilsService"]])
    ], UsersReadingsEditDialogComponent);
    return UsersReadingsEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.row div {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvcmVhZGluZ3MvdXNlcnMtcmVhZGluZ3MvQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZW1wbG95ZWVzLWFjdGlvbnNcXHJlYWRpbmdzXFx1c2Vycy1yZWFkaW5nc1xcdXNlcnMtcmVhZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VtcGxveWVlcy1hY3Rpb25zL3JlYWRpbmdzL3VzZXJzLXJlYWRpbmdzL3VzZXJzLXJlYWRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURHQztFQUNDLG1CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9lbXBsb3llZXMtYWN0aW9ucy9yZWFkaW5ncy91c2Vycy1yZWFkaW5ncy91c2Vycy1yZWFkaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iLCIuZGF0ZUNvbHVtbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFjdGlvbnNDb2x1bW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UsersReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersReadingsComponent", function() { return UsersReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users-readings-edit/users-readings-edit.dialog.component */ "./src/app/views/pages/employees-actions/readings/users-readings-edit/users-readings-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_readings_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/user-readings.model */ "./src/app/views/pages/employees-actions/readings/models/user-readings.model.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

// Services and Models
// Components

// Http


// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var UsersReadingsComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function UsersReadingsComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['gpNumber', 'shift', 'reading', 'readingDate', 'actions'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.selectedEmployee = '';
        this.selectedFuelType = '';
        this.selectedGasPump = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // TODO: Get using APIs
        this.fuelTypes = [];
        this.gasPumps = [];
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.customersResult = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        // Language
        this.languageText = {
            empty: 'لا يوجد بيانات لعرضها',
            searching: 'جار البحث ...',
            search: 'بحث',
            filterEmptyMessage: 'لا يوجد بيانات مطابقة ل ',
            confirm: 'تأكيد',
            close: 'الغاء',
            add: 'اضافة',
            itemsPerPage: 'عدد الصفوف بالصفحة:',
            firstPage: 'الصفحة الأولى',
            lastpage: 'الصفحة الأخيرة',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية'
        };
        this.arabicRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 \u0645\u0646 " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length;
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersReadingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadUsersReadingsList();
    };
    /**
     * On Destroy
     */
    UsersReadingsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load UsersReadings List from service through data-source
     */
    UsersReadingsComponent.prototype.loadUsersReadingsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.http.get('', { headers: this.headers })
            .subscribe(function (res) {
            setTimeout(function () {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res);
                if (_this.paginator) {
                    _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                    _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                    _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                    _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                    _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                    _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
                }
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, 1000);
        }, function (err) {
            _this.isLoadingResults = false;
            _this.dataSource.data = [];
            var userReadingModel = new _models_user_readings_model__WEBPACK_IMPORTED_MODULE_9__["UserReadingModel"]();
            userReadingModel.initialize();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([
                userReadingModel
            ]);
            if (_this.paginator) {
                _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
            }
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    /** ACTIONS */
    /**
     * Export Readings
     */
    /**
     * Delete Reading
     *
     * @param _item: UserReadingModel
     */
    UsersReadingsComponent.prototype.deleteReading = function (_item) {
        var _this = this;
        var _title = "حذف القراءة";
        var _description = "هل أنت متأكد من حذف القراءة؟";
        var _waitDesciption = "جاري الحذف";
        var _deleteMessage = "لقد تم الحذف";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            // TODO: Delete action (API)
            _this.layoutUtilsService.showActionNotification(_deleteMessage, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Show add reading dialog
     */
    UsersReadingsComponent.prototype.addReading = function () {
        var newReading = new _models_user_readings_model__WEBPACK_IMPORTED_MODULE_9__["UserReadingModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: UserReadingModel
     */
    UsersReadingsComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_users_readings_edit_users_readings_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UsersReadingsEditDialogComponent"], {
            data: {
                reading: reading,
                gasPumps: this.gasPumps,
                fuelTypes: this.fuelTypes
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadUsersReadingsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    UsersReadingsComponent.prototype.getExcelFileName = function () {
        return 'قراءاتي' + '-' + new Date().toISOString().slice(0, 10);
    };
    UsersReadingsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UsersReadingsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UsersReadingsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersReadingsComponent.prototype, "searchInput", void 0);
    UsersReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-users-readings',
            template: __webpack_require__(/*! raw-loader!./users-readings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./users-readings.component.scss */ "./src/app/views/pages/employees-actions/readings/users-readings/users-readings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], UsersReadingsComponent);
    return UsersReadingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/vacations/models/vacation.model.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/vacations/models/vacation.model.ts ***!
  \**********************************************************************************/
/*! exports provided: VacationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationModel", function() { return VacationModel; });
var VacationModel = /** @class */ (function () {
    function VacationModel() {
    }
    VacationModel.prototype.clear = function () {
        this.id = 0;
        this.userId = 0;
        this.vacationStatusId = 0;
        this.adminReply = '';
        this.vacationPeriodDays = 0;
        this.vacationDetails = '';
        this.startDate = new Date().toISOString().substr(0, 16);
    };
    return VacationModel;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: VacationEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationEditDialogComponent", function() { return VacationEditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_e_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/e-commerce */ "./src/app/core/e-commerce/index.ts");
/* harmony import */ var _models_vacation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/vacation.model */ "./src/app/views/pages/employees-actions/vacations/models/vacation.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular


// Material


// CRUD

// Services and Models




var VacationEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<UsersReadingsEditDialogComponent>
     * @param data: any
     * @param fb: FormBuilder
     * @param store: Store<AppState>
     * @param typesUtilsService: TypesUtilsService
     */
    function VacationEditDialogComponent(dialogRef, data, fb, store, layoutUtilsService, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.http = http;
        this.hasFormErrors = false;
        this.viewLoading = false;
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    VacationEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_core_e_commerce__WEBPACK_IMPORTED_MODULE_6__["selectCustomersActionLoading"])).subscribe(function (res) { return _this.viewLoading = res; });
        this.Vacation = this.data.reading;
        this.createForm();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
    };
    /**
     * On destroy
     */
    VacationEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    VacationEditDialogComponent.prototype.createForm = function () {
        this.VacationForm = this.fb.group({
            id: [this.Vacation.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vacationPeriodDays: [this.Vacation.vacationPeriodDays, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vacationDetails: [this.Vacation.vacationDetails, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: [this.Vacation.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vacationStatusId: [this.Vacation.vacationStatusId, this.Vacation.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
            adminReply: [this.Vacation.adminReply, this.Vacation.id > 0 ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : ''],
        });
    };
    /**
     * Returns page title
     */
    VacationEditDialogComponent.prototype.getTitle = function () {
        if (this.Vacation.id > 0) {
            return "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629";
        }
        return 'اضافة';
    };
    /**
     * Check control is invalid
     * @param controlName: string
     */
    VacationEditDialogComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.VacationForm.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    /** ACTIONS */
    /**
     * Returns prepared fuel price
     */
    VacationEditDialogComponent.prototype.prepareReading = function () {
        var controls = this.VacationForm.controls;
        var _Vacation = new _models_vacation_model__WEBPACK_IMPORTED_MODULE_7__["VacationModel"]();
        _Vacation.id = this.Vacation.id;
        _Vacation.vacationDetails = controls.vacationDetails.value;
        _Vacation.startDate = controls.startDate.value;
        _Vacation.vacationPeriodDays = controls.vacationPeriodDays.value;
        if (this.Vacation.id > 0) {
            _Vacation.adminReply = controls.adminReply.value;
            _Vacation.vacationStatusId = controls.vacationStatusId.value;
        }
        return _Vacation;
    };
    /**
     * On Submit
     */
    VacationEditDialogComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        var controls = this.VacationForm.controls;
        /** check form */
        if (this.VacationForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var editedReading = this.prepareReading();
        if (editedReading.id > 0) {
            this.updateReading(editedReading);
        }
        else {
            this.createReading(editedReading);
        }
    };
    /**
     * Update Fuel price
     *
     * @param _Vacation: FuelPricesModel
     */
    VacationEditDialogComponent.prototype.updateReading = function (_Vacation) {
        var _this = this;
        this.http.put(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/vacations', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _Vacation), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _Vacation: _Vacation, isEdit: true });
        }, function (err) {
            var msg = 'فشل في تعديل الاجازة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /**
     * Create Fuel price
     *
     * @param _Vacation: FuelPricesModel
     */
    VacationEditDialogComponent.prototype.createReading = function (_Vacation) {
        var _this = this;
        this.http.post(_globalVariables__WEBPACK_IMPORTED_MODULE_9__["default"].baseUrl + 'api/vacations', tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _Vacation), { headers: this.headers })
            .subscribe(function (res) {
            _this.dialogRef.close({ _Vacation: _Vacation, isEdit: false });
        }, function (err) {
            var msg = 'فشل في اضافة الاجازة';
            if (err.error) {
                msg = err.error.msg;
            }
            _this.layoutUtilsService.showActionNotification(msg);
        });
    };
    /** Alect Close event */
    VacationEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    VacationEditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
    ]; };
    VacationEditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'vacation-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./vacation-edit.dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], VacationEditDialogComponent);
    return VacationEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dateColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.actionsColumn {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  text-align: right;\n}\n\n.row div {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvdmFjYXRpb25zL3ZhY2F0aW9uLWluZm8vQzpcXFVzZXJzXFxvbWVuXFxEZXNrdG9wXFxHaXRIdWJcXEZyb250LUthemVhaFxcZ2FzLXN0YXRpb24vc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZW1wbG95ZWVzLWFjdGlvbnNcXHZhY2F0aW9uc1xcdmFjYXRpb24taW5mb1xcdmFjYXRpb24taW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvdmFjYXRpb25zL3ZhY2F0aW9uLWluZm8vdmFjYXRpb24taW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FER0M7RUFDQyxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZW1wbG95ZWVzLWFjdGlvbnMvdmFjYXRpb25zL3ZhY2F0aW9uLWluZm8vdmFjYXRpb24taW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlQ29sdW1uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWN0aW9uc0NvbHVtbiB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGRpdiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG4iLCIuZGF0ZUNvbHVtbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFjdGlvbnNDb2x1bW4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: VacationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationComponent", function() { return VacationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _models_vacation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/vacation.model */ "./src/app/views/pages/employees-actions/vacations/models/vacation.model.ts");
/* harmony import */ var _vacation_edit_vacation_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vacation-edit/vacation-edit.dialog.component */ "./src/app/views/pages/employees-actions/vacations/vacation-edit/vacation-edit.dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globalVariables */ "./src/app/views/pages/globalVariables.ts");

// Angular

// Material


// Translate Module

// NGRX

// CRUD

// Services and Models

// Components

// Http


// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/compgetItemCssClassByStatusonents/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var VacationComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     */
    function VacationComponent(dialog, snackBar, layoutUtilsService, translate, store, http) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.translate = translate;
        this.store = store;
        this.http = http;
        this.displayedColumns = ['reason', 'date'];
        this.isLoadingResults = false;
        this.filterStatus = '';
        this.date = new Date();
        this.tzoffset = (this.date).getTimezoneOffset() * 60000;
        this.dateFrom = new Date(+new Date(this.date.getFullYear(), this.date.getMonth(), 1) - this.tzoffset).toISOString().slice(0, 16);
        this.dateTo = new Date(+new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0) - this.tzoffset).toISOString().slice(0, 16);
        // Filter data
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.customersResult = [];
        // Subscriptions
        this.subscriptions = [];
        // Store
        this.token = '';
        this.credentialsSubscription = null;
        this.headers = null;
        this.requestOptions = {};
        this.role = '';
        // Language
        this.languageText = {
            empty: 'لا يوجد بيانات لعرضها',
            searching: 'جار البحث ...',
            search: 'بحث',
            filterEmptyMessage: 'لا يوجد بيانات مطابقة ل ',
            confirm: 'تأكيد',
            close: 'الغاء',
            add: 'اضافة',
            itemsPerPage: 'عدد الصفوف بالصفحة:',
            firstPage: 'الصفحة الأولى',
            lastpage: 'الصفحة الأخيرة',
            previousPage: 'الصفحة السابقة',
            nextPage: 'الصفحة التالية'
        };
        // Symmary data
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.arabicRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "0 \u0645\u0646 " + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " \u0645\u0646 " + length;
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    VacationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init DataSource
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.credentialsSubscription = this.store.select('credentials').subscribe(function (state) {
            _this.role = localStorage.getItem('role');
            _this.displayedColumns.push('actions');
            _this.token = state.authToken;
            _this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ Authorization: 'Bearer ' + _this.token, responseType: 'text' });
            _this.requestOptions = {
                headers: _this.headers,
            };
        });
        this.subscriptions.push(this.credentialsSubscription);
        this.loadVacationsList();
    };
    /**
     * On Destroy
     */
    VacationComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Vacations List from service through data-source
     */
    VacationComponent.prototype.loadVacationsList = function () {
        var _this = this;
        this.isLoadingResults = true;
        var dateFrom = new Date(+new Date(this.dateFrom) - this.tzoffset).toISOString().slice(0, 16);
        var dateTo = new Date(+new Date(this.dateTo) - this.tzoffset).toISOString().slice(0, 16);
        var url = '?FromDate=' + dateFrom + '&ToDate=' + dateTo;
        this.http.get(_globalVariables__WEBPACK_IMPORTED_MODULE_10__["default"].baseUrl + 'api/Vacations' + url, { headers: this.headers })
            .subscribe(function (res) {
            if (res.success) {
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.data);
                if (_this.paginator) {
                    _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                    _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                    _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                    _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                    _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                    _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
                }
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        }, function (err) {
            _this.isLoadingResults = false;
            _this.dataSource.data = [];
            if (_this.paginator) {
                _this.paginator._intl.itemsPerPageLabel = _this.languageText.itemsPerPage;
                _this.paginator._intl.firstPageLabel = _this.languageText.firstPage;
                _this.paginator._intl.previousPageLabel = _this.languageText.previousPage;
                _this.paginator._intl.nextPageLabel = _this.languageText.nextPage;
                _this.paginator._intl.lastPageLabel = _this.languageText.lastpage;
                _this.paginator._intl.getRangeLabel = _this.arabicRangeLabel;
            }
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    /**
     * Show add reading dialog
     */
    VacationComponent.prototype.addReading = function () {
        var newReading = new _models_vacation_model__WEBPACK_IMPORTED_MODULE_7__["VacationModel"]();
        newReading.clear(); // Set all defaults fields
        this.editReading(newReading);
    };
    /**
     * Show Edit reading dialog and save after success close result
     * @param reading: VacationModel
     */
    VacationComponent.prototype.editReading = function (reading) {
        var _this = this;
        var saveMessageTranslateParam = reading.id <= 0 ? 'تم الاضافة بنجاح' : 'تمت التعديل بنجاح';
        var _saveMessage = saveMessageTranslateParam;
        var _messageType = reading.id > 0 ? _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update : _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create;
        var dialogRef = this.dialog.open(_vacation_edit_vacation_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["VacationEditDialogComponent"], {
            data: {
                reading: reading
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType);
            _this.loadVacationsList();
        });
    };
    /**
     * Get file name of the exported excel file
     */
    VacationComponent.prototype.getExcelFileName = function () {
        return 'اجازاتي' + '-' + new Date().toISOString().slice(0, 10);
    };
    VacationComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], VacationComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], VacationComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VacationComponent.prototype, "searchInput", void 0);
    VacationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'gas-vacation',
            template: __webpack_require__(/*! raw-loader!./vacation-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./vacation-info.component.scss */ "./src/app/views/pages/employees-actions/vacations/vacation-info/vacation-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], VacationComponent);
    return VacationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-employees-actions-employees-actions-module.js.map