const MEMES_URL = 'https://api.imgflip.com/';

export const getMeme = () => {
  return fetch(MEMES_URL + 'get_memes')
    .then(response => response.json());
}

export const createMeme = (id, text1, text2) => {
  const formData = new FormData();

   // it is not the correct way, the credentials should be handle on the server side
  formData.append('username', 'LeonardoDAntoni');
  formData.append('password', 'test1234');
  formData.append('template_id', id);
  formData.append('text0', text1);
  formData.append('text1', text2);

  return fetch(
      MEMES_URL + 'caption_image',
      {
        method: 'POST',
        body: formData
      })
    .then(response => response.json());
}