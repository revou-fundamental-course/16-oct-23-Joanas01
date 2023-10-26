function sound() {
  var snd = new Audio('../assets/quack.mp3')//wav is also supported
  snd.play()//plays the sound
}

function onSubmit() {
  let name = document.forms["myForm"]["name"].value;
  let birthdate = document.forms["myForm"]["date"].value;
  let pesan = document.forms["myForm"]["message"].value;
  let gender = document.forms["myForm"]["gender"].value;
  let form = document.forms["myForm"]
  console.log(form);

  if(name==""|| date==""|| gender=="" ||message==""){
    alert("tidak boleh ada form yang kosong");
    return false;
  }

  else{
  let display = document.getElementById("submitdisplay")
  display.innerHTML = `<b>Message sent!</b></br> <b>Nama:</b>${name}</br> <b>Tanggal Lahir:</b>${birthdate}</br> <b>Jenis Kelamin:</b>${gender}</br> <b>Pesan:</b>${pesan}`
}}

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n)};

function showDivs(n){
  var i;
  var imgList= document.getElementsByClassName("img-slideshow");
  if (n>imgList.length) slideIndex=1;
  else if (n < 1) slideIndex = imglist.length;

  for (i=0; i<imgList.length; i++){
    imgList[i].style.display="none";
    }

  imgList[slideIndex-1].style.display="block";
  }

setInterval(() =>{
  plusDivs(1);
 },3000);
