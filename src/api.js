export const FAKE_USER = {
  firstName: 'Dave',
  lastName: 'Ceddia',
  username: 'dave',
  avatar: 'https://www.linkedin.com/in/joe-jennings-1bbaa821/detail/photo/'
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'dave' && password === 'secret') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}
