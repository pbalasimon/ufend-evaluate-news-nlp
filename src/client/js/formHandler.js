import validator from "validator";

function clearResults() {
  document.querySelector("#polarity").innerText = null;
  document.querySelector("#subjectivity").innerText = null;
  document.querySelector("#polarityConfidence").innerText = null;
  document.querySelector("#subjectivityConfidence").innerText = null;
}

async function handleSubmit(event) {
  event.preventDefault();
  const url = document.querySelector("#url").value;

  if (validator.isURL(url)) {
    console.log(`Form submitted with URL: ${url}`);
    clearResults();
    try {
      const response = await fetch("http://localhost:8081/sentiment", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log(data);
      document.querySelector("#polarity").innerText = data.polarity;
      document.querySelector("#subjectivity").innerText = data.subjectivity;
      document.querySelector(
        "#polarityConfidence"
      ).innerText = data.polarityConfidence.toFixed(2);
      document.querySelector(
        "#subjectivityConfidence"
      ).innerText = data.subjectivityConfidence.toFixed(2);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please Enter a Valid URL ");
  }
}

export { handleSubmit };
