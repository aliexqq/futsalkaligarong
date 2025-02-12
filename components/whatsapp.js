function sendtowhatsapp() {
  let number = "087766423616";

  let nama = document.getElementById("nama").value;
  let keterangan = document.getElementById("keterangan").value;

  var url =
    "https://chat.whatsapp.com/HFupcKoPLzAFo3VbDfxzp4" +
    number +
    "?text=" +
    "nama : " +
    nama +
    "%0a" +
    "keterangan: " +
    keterangan +
    "%0a";

  window.open(url, "_blank").focus();
}
