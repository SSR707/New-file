import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd() , 'database' , 'products.json')

export const readUsersDB = () => {
    const data = fs.readFileSync(filePath, "utf8");
  
    if (data) {
      const users = JSON.parse(data);
      return users;
    } else {
      return [];
    }
  };


export const writeUsersDB = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users));
};
  