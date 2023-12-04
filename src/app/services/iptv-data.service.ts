import { Injectable } from '@angular/core';
import { Category } from '../models/channelType.enum';

@Injectable({
  providedIn: 'root'
})
export class IptvDataService {

  constructor() { }

  getExistingChannels() {
    return [
      {
        "name": "88 Stereo (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/i3YwORV.png",
        "m3u8": "http://k3.usastreams.com/CableLatino/88stereo/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvojRSjyFEu8",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 2 (576p) [Not 24/7]",
        "logo": "https://i.imgur.com/Nn8BtH5.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal2CR/1ccdc8545fd05b83e9c57826d0de1069.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvIl863dUhYD",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 4 (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/5arZEgO.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal4CR/e78ef5ae92191a83ba896fbe4bfda83e.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvWlNOCgJmo9",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 6 (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/nfKJftW.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Canal6CR/201cac55f42a87a46e2d27a75e0c7c84.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv7LJ0cmVGaP",
        "category": Category.CostaRica
      },
      {
        "name": "Teletica Canal 7",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Teletica_Logo.png",
        "m3u8": "",
        "iframeUrl": "https://bradmax.com/client/embed-player/c7c83ebb46fa89529a7383d933e2038729f8e4c9_13428?id=tv7&mediaUrl=https://cdn01.teletica.com/TeleticaLiveStream/Stream/playlist_dvr.m3u8&mediaUrl2=https://6zklxk9bdw9b-hls-live.5centscdn.com/TeleticaLiveStream/d072c3a8dde8622c607ecd258fd628e8.sdp/playlist_dvr.m3u8",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 11 (720p) [Not 24/7]",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Repretel_11_logo.png/512px-Repretel_11_logo.png",
        "m3u8": "https://d2t46xrpai3it5.cloudfront.net/Repretel11/b3e2798525101c45f84a48573676853a.sdp/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvoqjy0aSqzZ",
        "category": Category.CostaRica
      },
      {
        "name": "¡OPA! (1080p)",
        "logo": "https://i.imgur.com/300c1ZH.png",
        "m3u8": "https://cageu.bozztv.com/ssh101/ssh101/opacanal38/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvPKD1g6z6g5",
        "category": ""
      },
      {
        "name": "Agrotendencia TV (1080p)",
        "logo": "https://i.imgur.com/frd60hR.png",
        "m3u8": "https://5fc584f3f19c9.streamlock.net/agrotendencia/videoagrotendencia_hls1/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvC8V1KYStxG",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 3 KMK TV (720p)",
        "logo": "https://i.imgur.com/sgRDRBK.jpg",
        "m3u8": "https://cloudvideo.servers10.com:8081/8120/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emv36DTsO_ZCl",
        "category": ""
      },
      {
        "name": "Canal 17 TV Nosara (720p)",
        "logo": "https://i.imgur.com/pqMTMgF.jpg",
        "m3u8": "https://stmv.streamingvip.click/tvnosara2/tvnosara2/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv76k6r5dmpP",
        "category": Category.CostaRica
      },
      {
        "name": "Cartago Medios TV (720p)",
        "logo": "https://i.imgur.com/Vcd40AL.png",
        "m3u8": "https://tvdatta.com:3384/live/cartagomedioslive.m3u8",
        "iframeUrl": "https://player.livepush.io/emvATSQCSO9_W",
        "category": Category.CostaRica
      },
      {
        "name": "Cartoon Network FreeLive Latam 2 (720p)",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cartoon_Network_HD_logo.svg/512px-Cartoon_Network_HD_logo.svg.png",
        "m3u8": "https://playout.cdn.cartoonnetwork.com.br/playout_06/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvGtWaonBG7r",
        "category": Category.animation
      },
      {
        "name": "Cartoon Network México (720p)",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png",
        "m3u8": "https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist-720p.m3u8",
        "iframeUrl": "https://player.livepush.io/emvUzfaszSzni",
        "category": Category.animation
      },
      {
        "name": "CGTN Español (576p)",
        "logo": "https://i.imgur.com/Poz3xfi.png",
        "m3u8": "https://livees.cgtn.com/1000e/prog_index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvdtlkIPZMRJ",
        "category": Category.news
      },
      {
        "name": "Comunicaciones Jiménez (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/4AvgY72.jpg",
        "m3u8": "https://s1.tvdatta.com:3156/live/jimeneztvlive.m3u8",
        "iframeUrl": "https://player.livepush.io/emvWIUjtUWiZ1",
        "category": Category.general
      },
      {
        "name": "Coto Brus TV (720p)",
        "logo": "https://i.ibb.co/vJZqrFY/a4ed367c69c23110d458a332af95be0be64566f288ccb5f261689344e6ba5e0d.png",
        "m3u8": "https://cloudvideo.servers10.com:8081/8030/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvUeyX1uMn4k",
        "category": Category.CostaRica
      },
      {
        "name": "Discovery Kids FreeLive Latam (720p)",
        "logo": "https://i.imgur.com/C0VEHXU.png",
        "m3u8": "https://playout.cdn.cartoonnetwork.com.br/playout_08/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvMWtwatZY-9",
        "category": Category.animation
      },
      {
        "name": "DW Español (1080p)",
        "logo": "https://i.imgur.com/A1xzjOI.png",
        "m3u8": "https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvO_DTsFRxfM",
        "category": Category.news
      },
      {
        "name": "EnerGeek Radio (936p)",
        "logo": "https://i.imgur.com/euaoN1A.png",
        "m3u8": "https://wifiexpert-1.energeek.cl/energeek/radio/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvgEbZU2o8nF",
        "category": Category.music
      },
      {
        "name": "Fanpop TV (720p) [Not 24/7]",
        "logo": "https://cdn.energeek.cl/logos/Fanpop-512.png",
        "m3u8": "https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvouyMr8U2UJ",
        "category": ""
      },
      {
        "name": "Filmstream",
        "logo": "https://i.imgur.com/DTRPV6B.png",
        "m3u8": "https://spi-filmstream-1-in.samsung.wurl.tv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvsvKPlc_cY-",
        "category": Category.movies
      },
      {
        "name": "Galicia TV América (720p)",
        "logo": "https://i.imgur.com/YBaxWQC.png",
        "m3u8": "https://america-crtvg.flumotion.com/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvg53fGovUiU",
        "category": Category.general
      },
      {
        "name": "Garabito TV (720p)",
        "logo": "https://i.imgur.com/sAYNKJ8.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/garabitoTV/garabitotv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvNKHJu61Jjo",
        "category": Category.CostaRica
      },
      {
        "name": "Guatuso TV (720p)",
        "logo": "https://www.grupodgrajal.com/images/logoguatusochannel.png",
        "m3u8": "https://5cf4a2c2512a2.streamlock.net/8162/8162/master.m3u8",
        "iframeUrl": "https://player.livepush.io/emvYqDxTEgiJM",
        "category": Category.CostaRica
      },
      {
        "name": "HBTV TicaVisión (1080p)",
        "logo": "https://yt3.ggpht.com/-k5QO6YHdanw/AAAAAAAAAAI/AAAAAAAAAAA/UTcqO9gj0z0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        "m3u8": "https://62fc643fbf1aa.streamlock.net/HBTV/HBTV/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvSe-WjoGWTs",
        "category": Category.CostaRica
      },
      {
        "name": "Kanal D Drama (1080p)",
        "logo": "https://i.imgur.com/WIeZMKT.png",
        "m3u8": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01602-themahqfrance-vivekanald-samsungspain/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvGs3LEW4eyy",
        "category": Category.series
      },
      {
        "name": "Las Estrellas Latin America (720p)",
        "logo": "https://i.imgur.com/g5ShxZ7.png",
        "m3u8": "https://channel01.akamaized.net/hls/live/2022749/event01/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emv8Ffyp7EKgC",
        "category": Category.general
      },
      {
        "name": "LatinoKids (480p) [Not 24/7]",
        "logo": "https://i.imgur.com/VEk5aJ6.png",
        "m3u8": "https://6362ca6f1fc28.streamlock.net/8062/8062/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvWKOvOLh0tV",
        "category": Category.animation
      },
      {
        "name": "Los Santos TV (720p)",
        "logo": "https://i.imgur.com/5xw86wu.png",
        "m3u8": "https://lstv.duckdns.org:449/hls/lstv.m3u8",
        "iframeUrl": "https://player.livepush.io/emvBLBaygvd5k",
        "category": Category.CostaRica
      },
      {
        "name": "Memorias TV (480p)",
        "logo": "https://i.imgur.com/RWC55w7.png",
        "m3u8": "https://mediacp.us:8081/8002/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emv5VQPd0o_aA",
        "category": Category.music
      },
      {
        "name": "MetaVersus CR (480p)",
        "logo": "https://i.imgur.com/BKkljlc.png",
        "m3u8": "https://vivo.solumedia.com:19360/metaversus/metaversus.m3u8",
        "iframeUrl": "https://player.livepush.io/emvFlZOJ6EKc4",
        "category": Category.CostaRica
      },
      {
        "name": "Multizonas TV (720p)",
        "logo": "https://i.imgur.com/PD9TCu0.png",
        "m3u8": "https://cloudvideo.servers10.com:8081/8068/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvDtvQE2gZeQ",
        "category": Category.CostaRica
      },
      {
        "name": "Nicoya TV (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/Lj2jRn3.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/nicoyatv/nicoyatv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv2msFLR5kS3",
        "category": Category.CostaRica
      },
      {
        "name": "Norte Informativo TV (240p)",
        "logo": "https://i.ibb.co/2MNzXN7/Channels4-profile-9.jpg",
        "m3u8": "https://videohd.live:19360/8076/8076.m3u8",
        "iframeUrl": "https://player.livepush.io/emvPjuVazPGhs",
        "category": Category.CostaRica
      },
      {
        "name": "Oldies Hits (360p)",
        "logo": "https://i.imgur.com/R4X1mkM.png",
        "m3u8": "https://video01.logicahost.com.br/oldieshits/oldieshits/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvQZGlCWexyx",
        "category": Category.CostaRica
      },
      {
        "name": "San Vito Televisión (720p)",
        "logo": "https://i.imgur.com/Yd7JOxr.png",
        "m3u8": "https://stmv.streamingvip.click/sanvitotv/sanvitotv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvFZ8tjPIuDq",
        "category": Category.CostaRica
      },
      {
        "name": "Somos Cultura TV (720p)",
        "logo": "https://i.imgur.com/kWR3END.png",
        "m3u8": "https://srv.tropicalmoonmedia.com/somosculturatv/somosculturatv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvN9FBvO41bI",
        "category": Category.general
      },
      {
        "name": "TeleBrunca (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/m3xu6Ms.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/telebrunca/telebrunca/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvQ5C4zSvGec",
        "category": Category.CostaRica
      },
      {
        "name": "Telesistema (480p) [Not 24/7]",
        "logo": "https://i.imgur.com/A0BBS4z.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/ARBtv/ARBtv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvzGos82Yvxs",
        "category": Category.CostaRica
      },
      {
        "name": "TV Sur Canal 14 (720p)",
        "logo": "https://i.imgur.com/OpHYYZA.png",
        "m3u8": "https://5bf8041cb3fed.streamlock.net/TVSURCANAL14/TVSURCANAL14/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvm62Zuii9Rz",
        "category": Category.CostaRica
      },
      {
        "name": "TV+ Canal 54 (480p)",
        "logo": "https://i.ibb.co/MsjKNMJ/305398743-500202432109920-5029369673742325729-n-1.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/Tvpluscr/Tvpluscr/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvlt7lnrjep-",
        "category": Category.CostaRica
      },
      {
        "name": "VM Latino (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/Dvo1b82.png",
        "m3u8": "https://59ef525c24caa.streamlock.net/vmtv/vmlatino/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvX4ZJ_zQydR",
        "category": Category.CostaRica
      },
      {
        "name": "VoiceOver Radio TV (720p)",
        "logo": "https://i.imgur.com/HzGs1Eh.png",
        "m3u8": "https://cloudvideo.servers10.com:8081/8198/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvtCyKUYWHNF",
        "category": Category.CostaRica
      },
      {
        "name": "Xpresso Joven Radio (720p)",
        "logo": "https://i.imgur.com/o7MCfuA.jpg",
        "m3u8": "https://stmv.streamingvip.click/xpressojovenradiotv/xpressojovenradiotv/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvVICGi6ht6f",
        "category": Category.CostaRica
      },
      {
        "name": "Zurquí TV (720p)",
        "logo": "https://i.imgur.com/XvktUBB.jpg",
        "m3u8": "https://videoserver.tmcreativos.com:19360/gesfnvpamn/gesfnvpamn.m3u8",
        "iframeUrl": "https://player.livepush.io/emv9rim2EbUvI",
        "category": Category.CostaRica
      },
      {
        "name": "Canal 13 SINART",
        "logo": "https://s3.us-east-1.amazonaws.com/forofms.na/monthly_2022_08/large.Logo-nuevo-canal-13.png.3958313fd210ce88c71c4020a36c73e5.png",
        "m3u8": "",
        "iframeUrl": "https://www.dailymotion.com/embed/video/x7vh8g3?autoplay=1",
        "category": Category.CostaRica
      },
      {
        "name": "Aire de Santa Fe (1080p)",
        "logo": "https://i.imgur.com/60vSWW0.png",
        "m3u8": "https://unlimited1-us.dps.live/airedesantafetv/airedesantafetv.smil/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv1cVzEe9YzK",
        "category": Category.general
      },
      {
        "name": "Antena 91 (720p)",
        "logo": "https://i.imgur.com/HAJxHcV.png",
        "m3u8": "https://tuvideoonline.com.ar:3393/live/antena91live.m3u8",
        "iframeUrl": "https://player.livepush.io/emvM5ImVmpYW3",
        "category": Category.music
      },
      {
        "name": "Argentinísima Satelital (540p)",
        "logo": "https://i.imgur.com/xFgJawa.png",
        "m3u8": "https://stream1.sersat.com/hls/argentinisima.m3u8",
        "iframeUrl": "https://player.livepush.io/emv2nd2WbC2mR",
        "category": Category.general
      },
      {
        "name": "AstroNet (360p)",
        "logo": "https://i.imgur.com/SNbLfau.png",
        "m3u8": "https://stmv1.cnarlatam.com/astronet/astronet/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvJ-HjkvCKn0",
        "category": Category.general
      },
      {
        "name": "ATV Argentina (540p)",
        "logo": "https://i.ibb.co/rMBVDmZ/atvargentina-x1.png",
        "m3u8": "https://stream.arcast.com.ar/atbargentina/atbargentina/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvF80sx4UxZX",
        "category": Category.general
      },
      {
        "name": "Magic Kids",
        "logo": "https://i.imgur.com/CMImqQY.png",
        "m3u8": "https://magicstream.ddns.net/magicstream/stream.m3u",
        "iframeUrl": "https://player.livepush.io/emv0jq0h6p_QR",
        "category": Category.animation
      },
      {
        "name": "Xtrema Cartoons",
        "logo": "https://i.imgur.com/X2d8y4e.png",
        "m3u8": "https://stmv1.cnarlatam.com/cineinfantil/cineinfantil/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvRRB0VQTDcL",
        "category": Category.animation
      },
      {
        "name": "Cartoonito Latam (720p)",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cartoonito_-_Logo_2021.svg/512px-Cartoonito_-_Logo_2021.svg.png",
        "m3u8": "https://playout.cdn.cartoonnetwork.com.br/playout_04/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emv3ohRcgDH2s",
        "category": Category.animation
      },
      {
        "name": "DreikoTv (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/k8U0e0b.png",
        "m3u8": "https://cloudvideo.servers10.com:8081/8138/index.m3u8",
        "iframeUrl": "https://player.livepush.io/emvZ9kRAuIQcT",
        "category": Category.animation
      },
      {
        "name": "Lolo TV (576p)",
        "logo": "https://static.wikia.nocookie.net/logopedia/images/2/2a/LoloTV_logo_2019.png",
        "m3u8": "https://void.greenhosting.ru/PingvinsLV_Mpeg4/video.m3u8",
        "iframeUrl": "https://player.livepush.io/emvPu_dp3fDiA",
        "category": Category.animation
      },
      {
        "name": "Pandamax Channel (1080p)",
        "logo": "https://pandamax.cl/assets/img/pandalogo2.png",
        "m3u8": "https://stream.wifiexpert.cl/telenorte/pandamaxch/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvGc4n2yheyS",
        "category": Category.animation
      },
      {
        "name": "Play Television (720p)",
        "logo": "https://i.ibb.co/nR85vvb/2021-01-03.jpg",
        "m3u8": "https://vivo.solumedia.com:19360/playtv/playtv.m3u8",
        "iframeUrl": "https://player.livepush.io/emvPE811ERiiG",
        "category": Category.general
      },
      {
        "name": "TeleValencia (576p)",
        "logo": "https://i.imgur.com/ILfXDRs.png",
        "m3u8": "https://play.cdn.enetres.net/9E9557EFCEBB43A89CEC8FBD3C500247022/028/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvYyYBnq-LhL",
        "category": Category.general
      },
      {
        "name": "12TV Alicante (720p)",
        "logo": "https://i.imgur.com/VSTgXsh.png",
        "m3u8": "https://cloud.fastchannel.es/mic/manifiest/hls/12tv/12tv.m3u8",
        "iframeUrl": "https://player.livepush.io/emvXqCl9CckuG",
        "category": Category.general
      },
      {
        "name": "101tv Cádiz (1080p)",
        "logo": "https://i.imgur.com/GzI3RC4.png",
        "m3u8": "https://streaming101tv.es/hls/webcadiz.m3u8",
        "iframeUrl": "https://player.livepush.io/emv7t0XBqGYxa",
        "category": Category.general
      },
      {
        "name": "Bon Dia TV (1080p)",
        "logo": "https://i.imgur.com/90WOoro.png",
        "m3u8": "https://directes-tv-int.ccma.cat/live-origin/bondia-hls/master.m3u8",
        "iframeUrl": "https://player.livepush.io/emvUfVNHJymng",
        "category": Category.general
      },
      {
        "name": "Canal 24 Horas Canarias (720p)",
        "logo": "https://i.imgur.com/IUVRm5L.png",
        "m3u8": "https://rtvelivestream.akamaized.net/rtvesec/can/24h_can_main_dvr.m3u8",
        "iframeUrl": "https://player.livepush.io/emvjs98ilQA-i",
        "category": Category.news
      },
      {
        "name": "Canal 33 Madrid (720p) [Not 24/7]",
        "logo": "https://i.imgur.com/1zJpDIX.png",
        "m3u8": "https://5ab29cc78f681.streamlock.net/canal33tvmadridgmailcom/livestream/master.m3u8",
        "iframeUrl": "https://player.livepush.io/emvdwOve98rAG",
        "category": Category.general
      },
      {
        "name": "Canal 45 (España)",
        "logo": "https://i.imgur.com/yEfSnGt.png",
        "m3u8": "https://nlb1-live.emitstream.com/hls/625csn5et2iszm9oze65/master.m3u8",
        "iframeUrl": "https://player.livepush.io/emv5_EGGqlCVh",
        "category": Category.general
      },
      {
        "name": "CanalCosta (1080p)",
        "logo": "https://i.imgur.com/ap4FmYb.png",
        "m3u8": "https://5d8d85cf2c308.streamlock.net:1936/CanalcostaTV/endirecto/playlist.m3u8",
        "iframeUrl": "https://player.livepush.io/emvOunYiDduUF",
        "category": Category.general
      },
      {
        "name": "",
        "logo": "",
        "m3u8": "",
        "iframeUrl": "",
        "category": Category
      },
      {
        "name": "",
        "logo": "",
        "m3u8": "",
        "iframeUrl": "",
        "category": Category
      },   


      

    ]
  }
}
