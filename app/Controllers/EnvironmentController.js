class EnvironmentController {
  index(req, res) {
    const isDocker = process.env.IS_DOCKER === "true";

    return res.json({
      environment: isDocker ? "docker" : "local",
      database: {
        host: process.env.POSTGRES_HOST || "localhost",
        port: Number(process.env.POSTGRES_PORT) || 6789
      },
      web: {
        host: isDocker ? "nodeweb_host" : "localhost",
        port: isDocker ? 8080 : 3000
      }
    });
  }
}

export default new EnvironmentController();
