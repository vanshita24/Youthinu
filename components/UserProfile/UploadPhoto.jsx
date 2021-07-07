import ImageKit from '../../utils/imageKit';
import React, { PureComponent } from 'react';
import { deleteOldImage } from '~/lib/helpers';
import { LoadingScreenSmall } from '~/components/LoadingScreens';
import ReactCrop from 'react-image-crop';

export default class UploadPhoto extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 100,
      aspect: 1 / 1,
    },
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        resolve(blob);
      }, 'image/jpeg');
    });
  }

  upload = (croppedBlob) => {
    if (croppedBlob) {
      const { userProfile, updateAvatar } = this.props;
      ImageKit.upload(
        {
          file: croppedBlob,
          useUniqueFileName: true,
          folder: `images/avatars/${userProfile.id}`,
          fileName: 'avatar',
          tags: ['profile'],
        },
        function (err, result) {
          if (err) {
            console.log(err);
          } else {
            const imageDelResp = deleteOldImage(userProfile.avatar.fileId);
            imageDelResp.finally(() => {
              //We upload new image regardless of what happens
              if (updateAvatar) {
                const variables = {
                  input: {
                    uri: result.filePath,
                    fileId: result.fileId,
                  },
                };
                updateAvatar(variables);
              }
            });
          }
        }
      );
    }
  };

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    if (this.props.loading) {
      return <LoadingScreenSmall />;
    }
    return (
      <div className='flex items-center flex-col justify-start'>
        <div className='flex flex-col justify-between mt-6 items-center p-3 xl:shadow-md '>
          <input type='file' accept='image/*' onChange={this.onSelectFile} />
          {src && (
            <ReactCrop
              className='mt-6'
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
          )}
        </div>
        {croppedImageUrl ? (
          <button
            onClick={() => this.upload(croppedImageUrl)}
            className='flex justify-between mt-6 items-center xl:text-base text-xl xl:shadow-md py-2 px-4 rounded-full xl:bg-brand-purple-dark capitalize xl:text-gray-50 text-gray-900 font-semibold transition duration-500 ease-in-out xl:hover:bg-brand-red-light xl:hover:ring-4 xl:transform xl:hover:-translate-y-1 xl:hover:scale-110'>
            Upload Image
          </button>
        ) : null}
      </div>
    );
  }
}
