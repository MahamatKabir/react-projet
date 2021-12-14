import bcrypt from 'bcryptjs'

const users = [
    {
        name:'mahamat kabir',
        email:'mahamat@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name:'ali kabir',
        email:'ali@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
    {
        name:'mmoussa kabir',
        email:'moussa@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
];

export default users;