import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  choosenDpt: any;

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params", params['name']);
      this.choosenDpt = params['name'];
      localStorage.setItem('choosenDpt', this.choosenDpt);
      this.getResults(params['name']);
    });
  }

  getResults(dpt) {
    this.loading = true;
    this.apiService.GetData('/ims_05/ims_05/?department=' + dpt).subscribe(data => {
      this.loading = false;
      console.log('all ' + dpt, data['results']);
      this.details = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

}
