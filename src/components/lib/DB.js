const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD


const connectionStr = `mongodb+srv://${username}:${password}@cluster0.uv6odwq.mongodb.net/magdesign?retryWrites=true&w=majority&appName=Cluster0`;
export default connectionStr;