export const host = "http://localhost:4000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const getAllMessageRoute = `${host}/api/messages/getmsg`;
export const getMe = `${host}/api/messages/getme/:token`;
