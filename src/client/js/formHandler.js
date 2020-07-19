function handleSubmit(event) {
  event.preventDefault();
  const url = document.querySelector("#url").value;

  if (client.validateURL(url)) {
    console.log(`Form submitted with URL: ${url}`);
  } else {
    alert("Please Enter a Valid URL ");
  }
}

export { handleSubmit };
