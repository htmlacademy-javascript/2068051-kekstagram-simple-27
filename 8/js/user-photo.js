const img = document.querySelector('.img-upload__preview img');
document.querySelector('input[type="file"]').addEventListener('change', function() {
  if (this.files && this.files[0]) {
    img.onload = () => {
      URL.revokeObjectURL(img.src);
    };

    img.src = URL.createObjectURL(this.files[0]);
  }
});

