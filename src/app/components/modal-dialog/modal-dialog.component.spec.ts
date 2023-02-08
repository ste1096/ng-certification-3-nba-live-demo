import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ModalDialogService } from '../../services/modal-dialog.service'
import { ModalDialogComponent } from './modal-dialog.component'

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let fixture: ComponentFixture<ModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDialogComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});