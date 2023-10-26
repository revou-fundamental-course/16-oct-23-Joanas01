function sound() {
  var snd = new Audio('../assets/quack.mp3')
  snd.play()
}

function onSubmit() {
  let name = document.forms["myForm"]["name"].value;
  let birthdate = document.forms["myForm"]["date"].value;
  let pesan = document.forms["myForm"]["message"].value;
  let gender = document.forms["myForm"]["gender"].value;
  let form = document.forms["myForm"]
  console.log(form);

  if(name==""|| birthdate==""|| gender=="" ||pesan==""){
    alert("tidak boleh ada form yang kosong");
    return false;
  }

  else{
  let display = document.getElementById("submitdisplay")
  display.innerHTML = `<b>Message sent!</b></br> <b>Nama:</b>${name}</br> <b>Tanggal Lahir:</b>${birthdate}</br> <b>Jenis Kelamin:</b>${gender}</br> <b>Pesan:</b>${pesan}`
}}
