const imageInput = document.getElementById("image-input");
const imageContainer = document.getElementById("image-container");

imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const imageUrl = reader.result;
            displayImage(imageUrl);
        };
        reader.readAsDataURL(file);
    }
});

function displayImage(url) {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";
    imageItem.style.backgroundImage = `url(${url})`;
    imageContainer.appendChild(imageItem);
}
