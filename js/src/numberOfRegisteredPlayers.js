const { project, on } = require("./_project");

module.exports = project(on("PlayerHasRegistered", state => state + 1))(0);
