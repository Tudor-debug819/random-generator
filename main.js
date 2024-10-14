document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput").value;

    const names = nameInput
      .split(/[\s,]+/)
      .filter((name) => name.length>3);
      console.log(names);

    if (names.length < 3) {
      alert("Please enter at least 3 names.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);

    document.getElementById(
      "randomName"
    ).textContent = `The winner that has to pay the bill is: ${names[randomIndex]}`;
  });

document.getElementById("refreshButton").addEventListener("click", function () {
  document.getElementById("nameInput").value = "";
  document.getElementById("randomName").textContent = "";
});
