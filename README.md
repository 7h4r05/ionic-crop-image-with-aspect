# ionic-crop-image-with-aspect

Ionic wrapper for plugin https://github.com/7h4r05/cordova-plugin-crop



## Ionic / Typescript Example Angular 10 Service


This is an example service that uses ionic-native's built in camera and the 7h4r05@cordova-plugin-crop to create a cropped version of the image and return the file path. 

```js
import { Injectable } from '@angular/core';

import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { CropWithAspect } from 'ionic-crop-image-with-aspect';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    constructor(private camera: Camera,
                private crop: CropWithAspect) {
    }

    takePicture(): Promise<string> {
        return this.getPicture({ sourceType: this.camera.PictureSourceType.CAMERA });
    }

    choosePicture(): Promise<string> {
        return this.getPicture({ sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM });
    }

    private getPicture(options: CameraOptions): Promise<string> {
        options = !options ? {} : options;
        options.quality = 80;
        options.destinationType = this.camera.DestinationType.FILE_URI;
        options.encodingType = this.camera.EncodingType.PNG;
        options.mediaType = this.camera.MediaType.PICTURE;
        options.targetHeight = 2000;
        options.targetWidth = 2000;
        options.correctOrientation = true;

        return this.camera
            .getPicture(options)
            .then(async photoUrl => {
                const url = await this.crop.crop(photoUrl, {
                    quality: 80,
                    aspectWidth: 4,
                    aspectHeight: 5
                });
                return url;
            })
            .catch(e => {
                return null;
            });
    }
}

```

