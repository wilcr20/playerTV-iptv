import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IptvDataService } from 'src/app/services/iptv-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLocalDev = false;
  channels: any = [];
  constructor(
    private iptvDataService: IptvDataService,
    private router: Router
    ) {
    this.channels = this.iptvDataService.getExistingChannels();
   }

   redirectToPlayer(url:string){   
    this.router.navigate(['/player', url]);

   }

   move(ev: any, index: number) {
    switch (ev.code) {
      case "ArrowDown":
        let newIndex = index + 5;
        let element = document.getElementById("channel_" + newIndex);

        if (element) {
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
          element?.focus();
        }
        break;
      case "ArrowUp":
        if (index > 0) {
          let newIndex =  index - 5;
          if(newIndex < 0){
            return;
          }
          let element = document.getElementById("channel_" + newIndex);
          if (element) {
            element.scrollTop = element.scrollTop - 250;
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
            element?.focus();
          }
        }
        break;
      case "ArrowRight":
        break;
      case "ArrowLeft":
        break;
      default:
        break;
    }
  }


}
