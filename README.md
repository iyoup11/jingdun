# 晶盾网站部署指南

本文档提供将晶盾网站部署到免费托管服务的详细步骤。

## 目录

1. [部署到 GitHub Pages](#部署到-github-pages)
2. [部署到 Netlify](#部署到-netlify)
3. [部署到 Vercel](#部署到-vercel)
4. [自定义域名设置](#自定义域名设置)

## 部署到 GitHub Pages

GitHub Pages 是一个免费的静态网站托管服务，非常适合托管晶盾这样的静态网站。

### 步骤：

1. **创建 GitHub 账号**（如果还没有）
   - 访问 [GitHub](https://github.com) 并注册账号

2. **创建新仓库**
   - 点击右上角 "+" 图标，选择 "New repository"
   - 仓库名称建议使用：`jingdun-website` 或 `jingdun.github.io`（如果您想使用自己的用户名）
   - 选择公开（Public）仓库
   - 点击 "Create repository"

3. **上传网站文件**
   - 克隆仓库到本地：`git clone https://github.com/您的用户名/仓库名称.git`
   - 将 `web` 目录中的所有文件复制到克隆的仓库目录中
   - 添加文件到 Git：`git add .`
   - 提交更改：`git commit -m "Initial website upload"`
   - 推送到 GitHub：`git push origin main`（或 `master`，取决于默认分支名称）

4. **启用 GitHub Pages**
   - 在仓库页面，点击 "Settings"
   - 滚动到 "GitHub Pages" 部分
   - 在 "Source" 下拉菜单中，选择 "main" 分支（或您的默认分支）
   - 点击 "Save"
   - 等待几分钟，您的网站将在 `https://您的用户名.github.io/仓库名称` 上线

## 部署到 Netlify

Netlify 提供更高级的功能，如自动部署、表单处理等。

### 步骤：

1. **创建 Netlify 账号**
   - 访问 [Netlify](https://www.netlify.com/) 并注册账号（可以使用 GitHub 账号登录）

2. **部署网站**
   - 登录后，点击 "New site from Git"
   - 选择 GitHub 作为 Git 提供商
   - 授权 Netlify 访问您的 GitHub 账号
   - 选择包含晶盾网站的仓库
   - 在部署设置中：
     - 构建命令留空（因为是静态网站）
     - 发布目录设置为 "." 或 "/"（表示根目录）
   - 点击 "Deploy site"

3. **配置自定义域名**（可选）
   - 在站点概览页面，点击 "Domain settings"
   - 点击 "Add custom domain"
   - 输入您的域名并按照指示完成设置

## 部署到 Vercel

Vercel 是另一个优秀的静态网站托管平台，特别适合前端项目。

### 步骤：

1. **创建 Vercel 账号**
   - 访问 [Vercel](https://vercel.com/) 并注册账号（可以使用 GitHub 账号登录）

2. **部署网站**
   - 登录后，点击 "New Project"
   - 导入您的 GitHub 仓库
   - 在配置项目时：
     - 框架预设选择 "Other"
     - 根目录保持默认
     - 构建命令留空
     - 输出目录留空
   - 点击 "Deploy"

3. **配置自定义域名**（可选）
   - 在项目仪表板中，点击 "Settings" > "Domains"
   - 添加您的自定义域名并按照指示完成设置

## 自定义域名设置

如果您有自己的域名，可以将其指向您的网站：

1. **购买域名**（如果还没有）
   - 可以通过 Namecheap、GoDaddy、阿里云等注册商购买

2. **设置 DNS 记录**
   - 登录您的域名注册商的 DNS 管理页面
   - 添加以下记录：
     - 对于 GitHub Pages：创建 CNAME 记录，指向 `您的用户名.github.io`
     - 对于 Netlify：按照 Netlify 提供的 DNS 指示设置
     - 对于 Vercel：按照 Vercel 提供的 DNS 指示设置

3. **在托管平台配置域名**
   - 在相应平台的域名设置中添加您的自定义域名
   - 按照平台指示验证域名所有权

4. **等待 DNS 传播**
   - DNS 更改可能需要 24-48 小时才能完全生效

## 注意事项

- 确保所有资源路径使用相对路径，而不是绝对路径
- 检查网站在部署后是否有任何损坏的链接或资源
- 定期备份您的网站文件
- 如果您更新了网站内容，需要重新上传到 Git 仓库以触发重新部署

如有任何问题，请联系：z11@outlook.lv