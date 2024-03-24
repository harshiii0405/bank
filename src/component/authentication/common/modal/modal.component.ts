import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() showModal: boolean | undefined; // Input property to show or hide the modal
  @Output() closeModal = new EventEmitter<void>(); // Output event to close the modal

  submit() {
    // Perform submission logic here
    alert("Submission successful!"); // Example alert, replace with your logic
    this.closeModal.emit(); // Emit the closeModal event to close the modal
  }
}
