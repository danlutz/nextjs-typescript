// This is a (hopefully) temporary work-around
// https://github.com/okonet/lint-staged/issues/676

const { quote } = require("shell-quote");

module.exports = {
  "*.+(js|jsx|ts|tsx)": "eslint --ext .js,.ts,.tsx",
  "*.+(js|jsx|json|yml|yaml|html|css|less|scss|ts|tsx|md|mdx|graphql|vue|java|php)": filenames =>
    filenames.reduce((commands, filename) => {
      commands.push(
        quote(["prettier", "--write", filename]),
        quote(["git", "add", filename])
      );

      return commands;
    }, [])
};
