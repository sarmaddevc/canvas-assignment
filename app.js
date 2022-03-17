function AddHeader() {
  var headerText = document.getElementById("header").value;
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(headerText, 125, 15);
}

function AddText() {
  var captionText = document.getElementById("caption").value;
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(captionText, 125, 80);
}

function AddFooter() {
  var footerText = document.getElementById("footer").value;
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(footerText, 125, 148);
}

let fileInput = document.getElementById("file");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

fileInput.addEventListener("change", function (event) {
  if (event.target.files) {
    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function (event) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 20, canvas.width, 115);
        ctx.drawImage(image, 0, 20, canvas.width, 115);
      };
    };
  }
});

function DownloadPic() {
  var canvas = document.getElementById("canvas");
  var image = canvas.toDataURL().replace("image/png", "image/octet-stream");
  var DownloadLink = document.createElement("a");
  DownloadLink.download = "canvas_image.png";
  DownloadLink.href = image;
  DownloadLink.click();
}
