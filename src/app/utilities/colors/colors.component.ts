import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = +params.get('type'); // 參數變動時取得新值
    });

    // this.route.queryParamMap.subscribe((params: ParamMap) => {
    //   this.type = +params.get('type'); // 參數變動時取得新值
    // });
  }

  goto(id: number) {
    const newId = ((this.type + 1) % 3) + 1;
    this.router.navigateByUrl('/utilities/colors/' + newId);
  }
}
