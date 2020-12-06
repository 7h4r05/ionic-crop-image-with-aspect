# ionic-crop-image-with-aspect

Ionic wrapper for plugin https://github.com/7h4r05/cordova-plugin-crop


## Usage



     import { CropWithAspect } from 'ionic-crop-image-with-aspect';
 
      // include in your module
     @NgModule({
         providers: [
            CropWithAspect,
         ]
     })


     // use in class
    export class CameraService {

     constructor(private camera: Camera,
                 private crop: CropWithAspect) {
     }
     
     getPicture(options: CameraOptions): Promise<string> {
         return this.camera
             .getPicture({})
             .then(async photoUrl => {
                 const url = await this.crop.crop(photoUrl, {
                     quality: 80,
                     aspectWidth: 4,
                     aspectHeight: 5
                 });
                 return url;
             });
     }
    }
