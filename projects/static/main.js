var form = document.forms.namedItem("fileinfo");
var lastImage;

/*
For such a simple app I chose not to use a Framework like react, so it's plain vanilla JS.
But it uses Axios for fetching data via HTTP from the server.
*/

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  document.getElementById("loader").style.visibility = "visible";
  let formdata = new FormData(form);

  var requestOptions = {
    method: 'POST',
    body: formdata,
  };

  var loc = window.location;

  fetch(`${loc.protocol}//${loc.hostname}:${loc.port}/predict`, requestOptions)
    .then(response => response.text().then((result => {
      console.log(result);
      DisplayResult(result)
      document.getElementById("loader").style.visibility = "hidden";
    })));
});

//On Image Uploaded
form.addEventListener('change', function (ev) {
  lastImage = URL.createObjectURL(ev.target.files[0]);
  document.getElementById("uploadedImg").src = lastImage
})

function DisplayResult(result) {
  /*I have created some CSS classes to make this look half decent.*/
  resultDiv = document.getElementById("results")

  divContainer = document.createElement("div")
  divContainer.className = "result"

  divImage = document.createElement("div")
  divImage.className = "image"
  divImage.style.backgroundImage = "url('" + lastImage + "')";

  divText = document.createElement("div")
  divText.appendChild(document.createTextNode(result))
  divText.className = "text"
  var description;
  if (result.includes("sashimi")) {
    description = "A Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces.  ";
  } else if (result.includes("panna_cotta")){
    description = "An Italian dessert of sweetened and falvored cream thickened with gelatin. Allergens: Nuts";
  } else {
    description = "A French dish made of the liver of a duck or goose. Allergens: Peanuts";
  }
  console.log(`Description: ${description}`);
  divText.innerHTML = `${result} - ${description}`;

  divContainer.appendChild(divImage)
  divContainer.appendChild(divText)
  while (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }
  resultDiv.appendChild(divContainer)
}