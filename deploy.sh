!/usr/bin/env sh

set -x  # 这里是为了看错误日志

# 打包项目
pnpm run build

# 进入打包后的文件夹
cd dist

# 文字替换
sed -i '' "s/assets/Text2Image\/assets/g" index.html

git init
git add -A
git commit -m 'auto deploy'

# 将打包后的文件推送到指定分支

git push -f https://github.com/happyphper/Text2Image.git main:static-pages