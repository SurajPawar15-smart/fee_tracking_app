import { IApiResponseModel } from './../../../core/model/interfaces/APIResponse';

import { Component, inject, OnInit } from '@angular/core';
import { MasterModel } from '../../../core/model/classes/master.model';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../../core/service/master/master-service';

MasterService;
@Component({
  selector: 'app-master',
  imports: [FormsModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master implements OnInit {
  newMasterObj: MasterModel = new MasterModel();
  masterList: MasterModel[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadMaster();
  }

  loadMaster() {
    this.masterService.getAllMaster().subscribe({
      next: (res: IApiResponseModel) => {
        this.masterList = res.data;
      },
    });
  }

  onSaveMaster() {
    this.masterService.saveMaster(this.newMasterObj).subscribe({
      next: (result: IApiResponseModel) => {
        alert('Save Success');
      },
    });
  }
  onUpdate() {
    this.masterService.updateMaster(this.newMasterObj).subscribe({
      next: (result: IApiResponseModel) => {
        alert('Update Success');
        this.loadMaster();
        this.onReset();
      },
      error: (err) => {
        console.error('Error updating master:', err);
      },
    });
  }
  onDelete(masterId: any) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.masterService.deleteMaster(masterId).subscribe({
        next: (result: IApiResponseModel) => {
          alert('Delete Success');
          this.loadMaster();
        },
        error: (err) => {
          console.error('Error deleting master:', err);
        },
      });
    }
  }
  OnEdit(item: any) {
    this.newMasterObj = item;
  }
  onReset() {
    this.newMasterObj = new MasterModel();
  }
}
