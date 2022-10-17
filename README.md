## Wails React + React-Router v6 + Tailwindcss + Arco UI

### Run 

> 首次运行必须编译前端一次一次

```bash
wails init -n <project_name> -t https://github.com/ZTaboo/wails-react-template
```

```bash
cd <project_name>/frontend

pnpm i

pnpm run build

# 退回项目根目录
cd ..

wails dev
```