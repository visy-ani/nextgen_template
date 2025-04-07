#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import chalk from "chalk";
import ora from "ora";
import inquirer from "inquirer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProject() {
  console.log(chalk.cyanBright("🚀 Create NextGen App"));
  console.log(chalk.gray("⚡️ If it makes you faster, it makes you better. 🛠️\n"));

  const cliArg = process.argv[2];
  let projectName =
    cliArg && (cliArg === "." || cliArg === "./")
      ? path.basename(process.cwd())
      : cliArg;

  if (!projectName) {
    const nameAnswer = await inquirer.prompt([
      {
        name: "projectName",
        type: "input",
        message: "📁 Project name:",
        validate: input => input.trim() !== "" || "Project name cannot be empty",
      }
    ]);
    projectName = nameAnswer.projectName;
  }

  const answers = await inquirer.prompt([
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

  const { packageManager, installDeps } = answers;

  const isCurrentDir = cliArg === "." || cliArg === "./";
  const targetPath = isCurrentDir
    ? process.cwd()
    : path.join(process.cwd(), projectName);
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
  if (!isCurrentDir) console.log(chalk.gray(`  cd ${projectName}`));
  if (!installDeps) console.log(chalk.gray(`  ${packageManager} install`));
  console.log(chalk.gray(`  ${packageManager} start\n`));
}

createProject();
