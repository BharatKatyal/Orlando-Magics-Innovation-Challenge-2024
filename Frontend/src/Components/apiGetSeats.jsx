export default async function () {
  const res = await fetch(
    "https://smswqfjns8.execute-api.us-east-1.amazonaws.com/Prod/getseats/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return data;
}
