import prisma from ".";

export async function createUser(contact) {
  try {
    const user = await prisma.contact.create({ data: contact });
    return { contact: user };
  } catch (error) {
    return { success: false, error: "Error creating user" };
  }
}

export async function getAllUsers() {
  try {
    const contact = await prisma.contact.findMany();
    return { success: true, contact };
  } catch (error) {
    return { success: false, error: "Error retrieving users" };
  }
}
export async function getUserById(id) {
  try {
    const user = await prisma.contact.findUnique({
      where: {
        id: id,
      },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
