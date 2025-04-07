#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");
const ora = require("ora");
const inquirer = require("inquirer");

async function createProject() {
  console.log(chalk.cyanBright("🚀 Create NextGen App"));
  console.log(chalk.gray("Made with ❤️  by Anish\n"));

  // Ask for project setup options
  const answers = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "📁 Project name:",
      validate: input => input.trim() !== "" || "Project name cannot be empty",
    },
    {
      name: "packageManager",
      type: "list",
      message: "📦 Choose a package manager:",
      choices: ["pnpm", "npm", "yarn"],
      default: "pnpm",
    },
    {
      name: "installDeps",
      type: "confirm",
      message: "🔧 Install dependencies now?",
      default: true,
    },
  ]);

  const { projectName, packageManager, installDeps } = answers;

  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "template");

  const copySpinner = ora("✨ Copying template...").start();
  try {
    await fs.copy(templatePath, targetPath);
    copySpinner.succeed("Template copied!");
  } catch (err) {
    copySpinner.fail("Failed to copy template.");
    console.error(err);
    process.exit(1);
  }

  const emptyDirs = [
    "src/assets/fonts",
    "src/assets/icons",
    "src/assets/images",
    "src/assets/videos",
    "src/components",
    "src/hooks",
    "src/layouts",
    "src/pages",
    "src/routes",
    "src/styles",
    "src/store",
    "src/utils"
  ];
  for (const dir of emptyDirs) {
    const fullPath = path.join(targetPath, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }

  if (installDeps) {
    const installSpinner = ora(`📦 Installing dependencies with ${packageManager}...`).start();
    try {
      execSync(`${packageManager} install`, { cwd: targetPath, stdio: "ignore" });
      if (packageManager === "pnpm") {
        execSync(`${packageManager} approve-builds`, { cwd: targetPath, stdio: "ignore" });
      }
      installSpinner.succeed("Dependencies installed!");
    } catch (err) {
      installSpinner.fail("Dependency installation failed.");
      console.error(err);
      process.exit(1);
    }
  }

  console.log(chalk.greenBright("\n✅ Project setup complete!\n"));
  console.log(chalk.cyanBright("Next steps:"));
  console.log(chalk.gray(`  cd ${projectName}`));
  if (!installDeps) {
    console.log(chalk.gray(`  ${packageManager} install`));
  }
  console.log(chalk.gray(`  ${packageManager} start\n`));
}

createProject();
