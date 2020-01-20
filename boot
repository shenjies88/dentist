#!/bin/bash

CONDITION=99

printFunction() {
    echo '<<<<<**********>>>>>'
    echo '1.打包文件'
    echo '2.打包镜像部署'
    echo '3.启动服务'
    echo '4.停止服务'
    echo '5.停止并移除服务'
    echo '0退出脚本'
    echo '<<<<<**********>>>>>'
    read -p "请输入选项:" CONDITION
}

switchFunction() {
    case $CONDITION in
        0)  echo '退出脚本'
        ;;
        1)
            echo '<<<<<**********>>>>>'
            echo '后端打包中'
            echo '<<<<<**********>>>>>'

            mvn clean package -DskipTests

            echo '<<<<<**********>>>>>'
            echo '后端打包成功'
            echo '<<<<<**********>>>>>'

            cd dentist-front

            echo '<<<<<**********>>>>>'
            echo '前端打包中'
            echo '<<<<<**********>>>>>'

            yarn build

            echo '<<<<<**********>>>>>'
            echo '前端打包成功'
            echo '<<<<<**********>>>>>'
        ;;
        2)
            docker-compose build && docker image prune -f &&  docker-compose up -d
        ;;
        3)
            docker-compose start
        ;;
        4)
            docker-compose stop
        ;;
        5)
            docker-compose down
        ;;
        *)
            echo '错误输入，请重新输入'
        ;;
    esac
}

while [ $CONDITION -ne 0 ]
    do
        printFunction
        switchFunction
    done

echo '<<<<<**********>>>>>'
echo '谢谢使用'
echo '<<<<<**********>>>>>'

