@echo off
:: 向git暂存区中添加文件
git add -A

if %errorlevel% == 0  (
    echo "文件添加成功"
    echo.
    ) else (
    echo "文件添加失败"
    goto END
    )

:: 将修改提交到本地版本库
set /p commitText="请输入本次提交的描述信息："
git commit -m %commitText%

if %errorlevel% == 0  (
    echo "文件提交成功"
    echo.
    ) else (
    echo "文件提交失败"
    goto END
    )

:: 将修改上传至远程仓库
git push

if %errorlevel% == 0  (echo "文件上传至远程仓库成功！") else (
    echo "文件上传失败，请检查是否已与远程仓库进行关联或者网络连接是否正常！"
    goto END
    )

:END