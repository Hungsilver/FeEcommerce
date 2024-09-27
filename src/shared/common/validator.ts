export const regexEmailOrUserName =
  /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/;

export const regexFullName = /[@A-Za-z]/;

export const regexEmail = /[^@]{2,64}@[^.]{2,253}\.[0-9a-z-.]{2,63}/;

export const regexPhoneVN = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
