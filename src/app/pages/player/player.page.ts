import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  iframeUrl = ""
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: { [x: string]: any; }) => {
      this.iframeUrl = params['url']; // (+) converts string 'id' to a number
      document.getElementById("iframe")?.focus()  
    });
  }

}
