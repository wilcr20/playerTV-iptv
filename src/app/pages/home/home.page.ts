import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IptvDataService } from 'src/app/services/iptv-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLocalDev = true;
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


}
