#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

async function createProject() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.error("❌ Please provide a project name. Example: npm create nextgen my-app");
    process.exit(1);
  }

  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "template");

  console.log("✨ Copying template...");
  await fs.copy(templatePath, targetPath);

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

  console.log("📦 Installing dependencies...");
  execSync("pnpm install", { cwd: targetPath, stdio: "inherit" });
  execSync("pnpm approve-builds", { cwd: targetPath, stdio: "inherit" });

  console.log("✅ Done!");
  console.log(`\nNext steps:\n  cd ${projectName}\n  pnpm start`);
}

createProject();
