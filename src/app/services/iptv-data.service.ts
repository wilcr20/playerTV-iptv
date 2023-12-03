import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IptvDataService {

  constructor() { }

  getExistingChannels(){
    return [
      {
        "name": "Canal 4 (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/5arZEgO.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal4CR/e78ef5ae92191a83ba896fbe4bfda83e.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvWlNOCgJmo9"
      },
      {
        "name": "Canal 6 (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/nfKJftW.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal6CR/201cac55f42a87a46e2d27a75e0c7c84.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv7LJ0cmVGaP"
      },
      {
        "name": "Canal 2 (576p) [Not 24/7]",
        "logo": "https://i.imgur.com/Nn8BtH5.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal2CR/1ccdc8545fd05b83e9c57826d0de1069.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvIl863dUhYD"
      }
    ]
  }
}
