create database Library;
use Library;

create table Book (
	id int auto_increment primary key,
    name varchar(50) not null,
    author varchar(30) not null,
    publication_date varchar(10) not null
);

create table Category (
    id int auto_increment primary key,
	name varchar(30) unique not null,
    description varchar(100)
);

create table Human (
    id int auto_increment primary key,
	email varchar(40) unique not null,
    name varchar(50) not null
);

create table Book_Category (
    id_book int not null,
    id_category int not null,
    foreign key (id_book) references Book(id),
    foreign key (id_category) references Category(id)
);

create table Loan (
    id int auto_increment primary key,
    id_book int not null,
    id_human int not null,
    loan_state int default 1,
    loan_date date not null,
    foreign key (id_book) references Book(id),
    foreign key (id_human) references Human(id)
);