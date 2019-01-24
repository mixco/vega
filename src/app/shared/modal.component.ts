import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
  // template: `
    // <div class="modal-header">
    //   <h4 class="modal-title">Hi there!</h4>
    //   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    //     <span aria-hidden="true">&times;</span>
    //   </button>
    // </div>
    // <div class="modal-body">
    //   <p>Hello, {{name}}!</p>
    // </div>
    // <div class="modal-footer">
    //   <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    // </div>
  // `
})
export class ModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}



// import { Component, ViewEncapsulation, Input } from '@angular/core';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.css'],
//     // add NgbModalConfig and NgbModal to the component providers

//   encapsulation: ViewEncapsulation.None,
//   styles: [`
//     .dark-modal .modal-content {
//       background-color: #292b2c;
//       color: white;
//     }
//     .dark-modal .close {
//       color: white;
//     }
//     .light-blue-backdrop {
//       background-color: #5cb3fd;
//     }
//   `]
// })
// export class ModalComponent {

//   @Input()
//   imgSubject:Subject<any>;
//   closeResult: string;
//   constructor(config: NgbModalConfig, private modalService: NgbModal) {
//     // customize default values of modals used by this component tree
//     config.backdrop = 'static';
//     config.keyboard = true;
//   }

//   open(content) {
//     this.modalService.open(content, {centered: true});
//   }

//   ngOnInit() {
//     this.imgSubject.subscribe(event => {
//       // called when the notifyChildren method is
//       // called in the parent component
//       const img =  '<img src="./assets/images/'+ event +'">'
//       // <img src="./assets/images/satelite_view_300x225.jpg">
//       this.open(content);
//     });
//   }

//   openBackDropCustomClass(content) {
//     this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
//   }

//   openWindowCustomClass(content) {
//     this.modalService.open(content, { windowClass: 'dark-modal' });
//   }

//   openSm(content) {
//     this.modalService.open(content, { size: 'sm' });
//   }

//   openLg(content) {
//     this.modalService.open(content, { size: 'lg' });
//   }

//   openVerticallyCentered(content) {
//     this.modalService.open(content, { centered: true });
//   }

//   ngOnDestroy() {
//     // needed if child gets re-created (eg on some model changes)
//     // note that subsequent subscriptions on the same subject will fail
//     // so the parent has to re-create parentSubject on changes
//     this.imgSubject.unsubscribe();
//   }

// }
