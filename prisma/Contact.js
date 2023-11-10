const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const createUser = async (fullname, email, phonenumber, message) => {
  try {
    const user = await prisma.contact.create({
      data: {
        fullname,
        email,
        phonenumber,
        message,
      },
    });
    return { success: true, user };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: "Error creating user" };
  }
};

export const getAllUsers = async () => {
  try {
    const users = await prisma.contact.findMany();
    return { success: true, users };
  } catch (error) {
    console.error("Error retrieving users:", error);
    return { success: false, error: "Error retrieving users" };
  }
};

export const deleteUser = async (id) => {
  try {
    await prisma.contact.delete({
      where: {
        id: id,
      },
    });
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, error: "Error deleting user" };
  }
};
