function encode() {
  const text = document.getElementById("encodeInput").value;
  const base64Encoded = btoa(text);
  const base32Encoded = base32Encode(text);
  const base58Encoded = base58Encode(text);
  const urlEncoded = encodeURIComponent(text);

  document.getElementById("encodeOutput").value = `
Base64: ${base64Encoded}
Base32: ${base32Encoded}
Base58: ${base58Encoded}
URL Encoded: ${urlEncoded}
  `;
}

function decode() {
  const text = document.getElementById("decodeInput").value;
  try {
    const base64Decoded = atob(text);
    const urlDecoded = decodeURIComponent(text);
    const base32Decoded = base32Decode(text);
    const base58Decoded = base58Decode(text);

    document.getElementById("decodeOutput").value = `
Base64 Decoded: ${base64Decoded}
URL Decoded: ${urlDecoded}
Base32 Decoded: ${base32Decoded}
Base58 Decoded: ${base58Decoded}
    `;
  } catch (e) {
    document.getElementById("decodeOutput").value = "Invalid encoded text";
  }
}

// Base32 Encoding & Decoding
function base32Encode(str) {
  // A simple Base32 encoding function (using a placeholder for simplicity)
  return btoa(str).replace(/=/g, ''); // Placeholder logic, replace with an actual Base32 algorithm
}

function base32Decode(str) {
  // A simple Base32 decoding function (using a placeholder for simplicity)
  return atob(str); // Placeholder logic, replace with an actual Base32 algorithm
}

// Base58 Encoding & Decoding
function base58Encode(str) {
  // A simple Base58 encoding function (using a placeholder for simplicity)
  return btoa(str).replace(/=/g, ''); // Placeholder logic, replace with an actual Base58 algorithm
}

function base58Decode(str) {
  // A simple Base58 decoding function (using a placeholder for simplicity)
  return atob(str); // Placeholder logic, replace with an actual Base58 algorithm
}
