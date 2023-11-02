import { instance } from '..';
import { PostDataType } from './FirstLogin_Data';

export const sendPostRequest = async (postData: PostDataType) => {
  try {
    const response = await instance.post('/users/FirstLogin', postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


