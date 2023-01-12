const BASE_URL = "http://localhost:3000/api";

//All Users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

//Single Users
export const getUser = async (userId: number) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const data = await response.json();
  if (data) return data;
  return {};
};

//Create User
export const createUser = async (formData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//Update User
export const updateUser = async (userId: string, formData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//Delete User
export const deleteUser = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
