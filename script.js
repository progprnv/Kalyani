function processText() {
  const inputText = document.getElementById("inputText").value;
  const encodeDecodeType = document.getElementById("encodeDecodeType").value;
  
  let outputText = '';

  switch (encodeDecodeType) {
    case "Base64":
      outputText = btoa(inputText); // Base64 encode
      break;
    case "Base32":
      outputText = base32Encode(inputText); // Base32 encode
      break;
    case "Base58":
      outputText = base58Encode(inputText); // Base58 encode
      break;
    case "URL":
      outputText = encodeURIComponent(inputText); // URL encode
      break;
    case "HTML":
      outputText = escapeHtml(inputText); // HTML encode
      break;
    default:
      outputText = "Invalid encoding type";
  }

  document.getElementById("outputText").value = outputText;
}

// Base32 Encoding (simple placeholder)
function base32Encode(str) {
  return btoa(str).replace(/=/g, ''); // Replace with actual Base32 logic
}

// Base58 Encoding (simple placeholder)
function base58Encode(str) {
  return btoa(str).replace(/=/g, ''); // Replace with actual Base58 logic
}

// HTML Encoding
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}
