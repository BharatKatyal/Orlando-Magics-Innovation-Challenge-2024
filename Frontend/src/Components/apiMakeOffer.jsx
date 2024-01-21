export default async function (seat, price) {
  const res = await fetch(
    "https://smswqfjns8.execute-api.us-east-1.amazonaws.com/Prod/seatoffer/",
    {
      method: "POST",
      body: JSON.stringify({
        id: "34",
        seat_number: seat,
        offer_amount: parseInt(price),
        email: "bharatkatyaltravel@icloud.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return data;
}
