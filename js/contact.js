function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;

    }



function myFunction() {
    document.getElementById("frm1").submit();
  }
}