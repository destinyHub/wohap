#!/usr/bin/env bash
if [ "$1" = "init" ]; then
    docker pull mysql:8.0.1
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0.1
    docker pull phpmyadmin/phpmyadmin:latest
    docker run phpmyadmin -d mysql:db -p 8081:80 phpmyadmin/phpmyadmin
elif [ "$1" = "start" ]; then
    docker start mysql
    docker start phpmyadmin
elif [ "$1" = "sql" ]; then
     docker exec -it   mysql  mysql -u root -proot whop

#elif [ "$1" = "migrate" ]; then
#    cd tables
#    schemafiles=`ls *-table.sql`
#    for eachfile in $schemafiles; do
#        echo ''
#        echo $eachfile
#        echo '-----------------------------'
#        (docker exec -i edge-postgres psql -U postgres) < $eachfile
#        echo ''
#    done
#elif [ "$1" = "seed" ]; then
#    cd seeders
#    schemafiles=`ls *-seed.sql`
#
#    for eachfile in $schemafiles; do
#        echo ''
#        echo $eachfile
#        echo '-----------------------------'
#        (docker exec -i edge-postgres psql -U postgres) < $eachfile
#        echo ''
#    done
fi

#elif [ "$1" = "schema" ]; then
#    schemafiles=`ls *-schema.sql`
#    for eachfile in $schemafiles; do
#        echo ''
#        echo $eachfile
#        echo '-----------------------------'
#        (docker exec -i edge-postgres psql -U postgres) < $eachfile
#        echo ''
#    done
#elif [ "$1" = "seed" ]; then
#    schemafiles=`ls *-data.sql`
#    for eachfile in $schemafiles; do
#        echo ''
#        echo $eachfile
#        echo '-----------------------------'
#        (docker exec -i edge-postgres psql -U postgres) < $eachfile
#        echo ''
#    done
#elif [ "$1" = "alter" ]; then
#    schemafiles=`ls *-alter.sql`
#    for eachfile in $schemafiles; do
#        echo ''
#        echo $eachfile
#        echo '-----------------------------'
#        (docker exec -i edge-postgres psql -U postgres) < $eachfile
#        echo ''
#    done
#elif [ "$1" = "build" ]; then
#    cat *-schema.sql > schema.sql
#    echo 'Schema sql builded'
#elif [ "$1" = "buildseed" ]; then
#    cat *-data.sql > seed.sql
#    echo 'seed sql builded'
#elif [ "$1" = "buildalter" ]; then
#    cat *-alter.sql > schemaalteredtable.sql
#    echo 'schemaalteredtable sql builded'
#else
#    docker start edge-postgres
#fi
