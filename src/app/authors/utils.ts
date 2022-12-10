export interface Author {
  id: string
  name: string
  about: string
  photo: Buffer
  photoType: string
}

export interface AuthorRequest {
  id: string
  name: string
  about: string
  photo: string
  photoType: string
}

const SERVER = 'http://localhost:8000/authors';
export const AuthorsPath = '/autores';

export const localServer = {
  server: SERVER,
  create: SERVER.concat('/create'),
  //get: SERVER.concat('?id='),
  get: SERVER.concat('/get?id='),
  update: SERVER.concat('/update'),
  delete: SERVER.concat('/delete'),
  all: SERVER.concat('/'),
};
