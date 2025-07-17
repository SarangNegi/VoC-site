function validate() {
  const value = document.getElementById("certificateInput").value.trim();
  const result = document.getElementById("result");

  if (value === "") {
    result.textContent = "❌ Please enter a valid Email or ID.";
    result.style.color = "red";
  } else {
    result.textContent = "✅ Verified successfully (simulated).";
    result.style.color = "green";
  }
}
