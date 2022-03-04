import React, { useEffect } from "react";

// function Contact() {
//   useEffect(() => {
//     window.open(
//       "https://drive.google.com/file/d/1g-8wTaL-euGRWQp4el96RukaU200uSl2/view",
//       "_blank"
//     );
//   }, []);
function Contact() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1YmVe6MJqNl7jGaL9HPS9WG8uSM4yduQH/view";
  }, []);

  return (
    <div>
      <h2></h2>
    </div>
  );
}
export default Contact;
