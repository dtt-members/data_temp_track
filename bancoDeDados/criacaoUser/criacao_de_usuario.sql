CREATE USER 'WLan'@'10.18.36.45' IDENTIFIED BY 'UserLan#2023';

GRANT ALL PRIVILEGES ON *.* TO 'WLan'@'10.18.36.45' WITH GRANT OPTION;

FLUSH PRIVILEGES;