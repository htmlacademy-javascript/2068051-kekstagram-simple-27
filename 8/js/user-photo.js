const image = document.querySelector('.img-upload__preview img');
const images = document.querySelectorAll('.effects__preview');
export const setImageOnChange = ({target: fileInput}) => {
  if (fileInput.files && fileInput.files[0]) {
    image.onload = () => {
      URL.revokeObjectURL(image.src);
    };

    const imageData = URL.createObjectURL(fileInput.files[0]);
    image.src = imageData;
    for (const preview of images) {
      preview.style.backgroundImage = `url(${imageData})`;
    }
  }
};

