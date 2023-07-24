// RECEIVED FOLLOWING ERROR AND DECIDED TO CREATE FAKE API
// ERROR MESSAGE : The resource from “https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js” was blocked due to MIME type (“text/plain”) mismatch (X-Content-Type-Options: nosniff).
// <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>

export function fetchAPI() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
export function submitAPI(formData) {
  return true;
}
