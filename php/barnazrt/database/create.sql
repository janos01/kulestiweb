create database barnazrt
character set utf8
collate utf8_hungarian_ci;

create table dolgozok (
    az int not null primary key auto_increment,
    nev varchar(50),
    tel varchar(50),
    fiz double
);

insert into dolgozok
(nev, tel, fiz)
values
("Perka Béla", "Szolnok", 3800000),
("Tenke Irén", "Szeged", 2800000),
("Pomit Bali", "Szolnok", 3200000),
("Renti Olga", "Miskolc", 3250000),
("Pente Bori", "Szeged", 3150000);

grant all privileges
on barnazrt.*
to 'barnazrt'@'localhost'
identified by '12345';
