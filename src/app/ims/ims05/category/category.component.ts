import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  realRoute: any;
  
  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  choosenCtg: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  // /ims-05/department/she/category/she-policy
  // /ims-05/department/she/category/consulatation-and-participation
  // /ims-05/department/she/category/legal-and-ims-appointments

  ngOnInit(): void {
    this.getResults(localStorage.getItem('choosenDpt'));
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log("params", params['name']);
      this.choosenCtg = params['name'];
      localStorage.setItem('choosenCtg', this.choosenCtg);
      // this.getResults(params['name']);
    });
  }

  getResults(dpt) {
    this.loading = true;
    this.apiService.GetData('/ims_05/ims_05/?department=' + dpt).subscribe(data => {
      this.loading = false;
      console.log('all ' + dpt, data['results']);
      this.details = data['results'];

      for(let i = 0; i<this.details.length; i++) {
        if(this.choosenCtg == "she-policy") {

        }
        if(this.choosenCtg == "consulatation-and-participation") {

        }
        if(this.choosenCtg == "legal-and-ims-appointments") {

        }
      }
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

}
