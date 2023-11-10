import { createUser, getAllUsers } from "@/lib/prisma/contacts";

// export default async function handler(req, res) {
//   try {
//     switch (req.method) {
//       case "POST": {
//         const { fullname, email, phonenumber, message } = req.body;

//         const newUser = await createUser(fullname, email, phonenumber, message);

//         return res.status(201).json(newUser);
//       }
//       case "GET": {
//         const users = await getAllUsers();
//         return res.status(200).json(users);
//       }
//       case "DELETE": {
//         const { id } = req.query;
//         if (!id) {
//           return res.status(400).json({ message: "Missing 'id' parameter" });
//         }
//         await deleteUser(id);
//         return res.status(204).end(); // No Content
//       }
//       default: {
//         return res.status(405).json({ message: "Method Not Allowed" });
//       }
//     }
//   } catch (error) {
//     console.error("Error in API route:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { users, error } = await getAllUsers();
      if (error) throw new Error(error);
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { user, error } = await createUser(data);
      if (error) throw new Error(error);
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
