use flaskdb;
db.createUser({user: 'flaskuser', pwd: 'password', roles: [{role: 'readWrite', db: 'flaskdb'}]});