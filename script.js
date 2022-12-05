function adjustPicture() {
  let image = document.querySelector('#image');
  if(image) {
    image.height += 20;
    image.width += 45;
  }
}

function reducePicture() {
    let image = document.querySelector('#image');
    if(image) {
        image.height -= 20;
        image.width -= 45;
    }
}

function addPicture() {
    if(!document.querySelector('#image')) {
        let a = document.querySelector('#picture');
        let image = document.createElement("img");
        image.id = "image";
        image.src = "NYC.jpg";
        image.width = 900;
        a.append(image);
    }
}

function removePicture() {
    let image = document.querySelector('#image');
    if(image) {
        image.remove();
    }
}

function changeColors(e){
    if(e.target.classList.length === 0) {
        e.target.classList.add('colorfull');
    } else {
        e.target.classList.remove('colorfull');
    }
}

document.querySelector("#adjust").addEventListener("click", adjustPicture);
document.querySelector("#reduce").addEventListener("click", reducePicture);
document.querySelector("#add").addEventListener("click", addPicture);
document.querySelector("#remove").addEventListener("click", removePicture);
document.getElementById("seven").addEventListener("click", changeColors);
document.querySelector("#eight").addEventListener("click", changeColors);