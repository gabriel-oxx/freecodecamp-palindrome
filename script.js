const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const showMessage = () => {
  const label = document.querySelector("label");
	const originalText = label.textContent;
  label.setAttribute("role", "alert");
  label.textContent = "Please enter text to check";

  setTimeout(() => {
		label.textContent = originalText;
	}, 	5000);
};

const checkText = () => {
  const textInput = document.querySelector("#text-input");
  const text = textInput.value;
  const modifiedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = modifiedText.split("").reverse().join("");

  if (text === "") {
    showMessage();
    return;
  }

  reversedText === modifiedText
    ? (result.textContent = `${text} is a palindrome`)
    : (result.textContent = `${text} is not a palindrome`);
  textInput.value = "";
};

button.addEventListener("click", checkText);
