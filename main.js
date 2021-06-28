var images = [ "man img.jpg", "woman img.jpg", "boy img.jpg"
];
var i = 0; 


function flipimage1() { document.getElementById("image1").src=images[i]; i++;  if (i == 9){i=0;}
}

