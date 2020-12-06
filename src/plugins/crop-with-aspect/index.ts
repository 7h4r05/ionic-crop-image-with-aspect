import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface CropOptions {
  quality?: number;
  targetHeight?: number;
  targetWidth?: number;
  aspectWidth?: number;
  aspectHeight?: number;
}

/**
 * @name Crop with aspect
 * @description Crops images
 * @usage
 * ```typescript
 * import { Crop } from 'ionic-crop-with-aspect';
 *
 * constructor(private crop: Crop) { }
 *
 * ...
 *
 * this.crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log('new image path is: ' + newImage),
 *     error => console.error('Error cropping image', error)
 *   );
 * ```
 * @interfaces
 * CropOptions
 */
@Plugin({
  pluginName: 'Crop',
  plugin: 'cordova-plugin-crop',
  pluginRef: 'plugins',
  repo: 'https://github.com/7h4r05/cordova-plugin-crop',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CropWithAspect extends IonicNativePlugin {
  /**
   * Crops an image
   * @param {string} pathToImage
   * @param {CropOptions} [options]
   * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  crop(pathToImage: string, options?: CropOptions): Promise<string> {
    return;
  }
}
