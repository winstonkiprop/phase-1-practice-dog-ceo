
console.log("% HI", "color: fireback");
document.addEventListener("DOMContentLoaded", function () {
    fetchDogImages();
    breeds();
});
function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let images = data.message;
      //   console.log(images)
      images.forEach((image) => {
        //  console.log(image)
        loadImagesToDom(image);
      });
    });
}
function loadImagesToDom(image,) {
  let dogCount = document.getElementById("dog-image-container");
  let ourImage = document.createElement("img");
  ourImage.src = image;
  dogCount.appendChild(ourImage);
}
function breeds ()
{
    fetch( "https://dog.ceo/api/breeds/list/all" )
        .then( ( response ) => response.json() )
        .then( ( dogs ) =>
        {
        console.log(dogs);
    })
}