drop database if exists flowers;
create database flowers;

create extension pgcrypto;

drop table if exists admins;
create table admins(
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);

drop table if exists categories;
create table categories(
    category_id serial primary key,
    category_name varchar(60) not null,
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp
);

drop table if exists products;
create table products(
    product_id serial primary key,
    product_name varchar(64) not null,
    price decimal(7, 2) not null,
    count int not null,
    description text not null,
    category_id int references categories(category_id),
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp
);

drop table if exists images;
create table images(
    img_id serial primary key,
    image text not null,
    product_id int references products(product_id),
    created_at timestamp default current_timestamp
);

drop table if exists news;
create table news(
    news_id serial primary key,
    title varchar(128) not null,
    description text not null,
    news_image text not null,
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp
);

drop table if exists banners;
create table banners(
    banner_id serial not null,
    banner_image text not null,
    status varchar(16) default 'active',
    created_at timestamp default current_timestamp
);
