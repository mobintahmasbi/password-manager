const phoneNumber = document.getElementById("phoneNumber");
const sendOTPBtn = document.getElementById("sendOTPBtn");

sendOTPBtn.addEventListener("click", async (e) => {
  if (phoneNumber.value == "") {
    e.preventDefault();
    return null;
  }
  const response = await postRequest("http://localhost:3000/login", {
    phoneNumber: phoneNumber.value,
  });
  console.log(response);
});

async function postRequest(url, data) {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  res = res.json()
  return res;
}
