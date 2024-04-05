const server = require("./src/app");
const { PORT } = require("./src/config/envs");


server.listen(PORT, () => {
   console.log(`Server listening on port 🚀 ${PORT}`);
});
