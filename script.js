function encodeText() {
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

function decodeText() {
  const inputText = document.getElementById("inputText").value;
  const encodeDecodeType = document.getElementById("encodeDecodeType").value;
  
  let outputText = '';

  switch (encodeDecodeType) {
    case "Base64":
      outputText = atob(inputText); // Base64 decode
      break;
    case "Base32":
      outputText = base32Decode(inputText); // Base32 decode
      break;
    case "Base58":
      outputText = base58Decode(inputText); // Base58 decode
      break;
    case "URL":
      outputText = decodeURIComponent(inputText); // URL decode
      break;
    case "HTML":
      outputText = unescapeHtml(inputText); // HTML decode
      break;
    default:
      outputText = "Invalid decoding type";
  }

  document.getElementById("outputText").value = outputText;
}

// Base32 Encoding (simple placeholder)
function base32Encode(str) {
  return btoa(str).replace(/=/g, ''); // Replace with actual Base32 logic
}

// Base32 Decoding (simple placeholder)
function base32Decode(str) {
  return atob(str); // Replace with actual Base32 logic
}

// Base58 Encoding (simple placeholder)
function base58Encode(str) {
  return btoa(str).replace(/=/g, ''); // Replace with actual Base58 logic
}

// Base58 Decoding (simple placeholder)
function base58Decode(str) {
  return atob(str); // Replace with actual Base58 logic
}

// HTML Encoding
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

// HTML Decoding
function unescapeHtml(str) {
  return str.replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#039;/g, "'");
}
