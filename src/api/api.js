import axios from "axios";

const URL = "https://667256d76ca902ae11afe79a.mockapi.io/api/v1/users";

const getData = async () => {
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const edit = async (userId) => {
  try {
    alert("You want to edit user data?!");
    const response = await axios.put(`${URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

const addNewUser = async () =>{
     try {
    const response = await axios.post(URL ,{
        name,
        id,
        email,
        age,
        cash

    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}


const deleteUser = async (userId) => {
  try {
    alert("ARE YOU SURE ?!")
    const response = await axios.delete(`${URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};





export { getData, addNewUser,  deleteUser, edit};