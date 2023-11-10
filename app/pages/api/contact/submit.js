

export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    console.log("Received form data:", formData);

    // Here, you can store the data in a database or perform other actions

    res.status(200).json({ message: "Form data received successfully" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
