

insert into admins (username, password) values ('ali', crypt('111133', gen_salt('bf')));


insert into categories (category_name) values ('qimmat gullar'), ('hona gullar'), ('sitrus gullar');

insert into products (product_name, price, description, count, category_id) values ('rayhon gul', 6000, 'rayhon gul qimmat...', 400, 2),
('kaktus', 10000, 'kaktus tikoni bor ...', 30, 2),  ('arhideya', 13000, 'arhedeya guli...', 50, 3);


insert into images (image, product_id) values ('http://picsum.photos/400', 4), ('http://picsum.photos/400', 4),
('http://picsum.photos/400', 2), ('http://picsum.photos/400', 2), ('http://picsum.photos/400', 3), ('http://picsum.photos/400', 3);




create table music(
    music_id serial primary key,
    music_name varchar(32) not null
);


create table janr(
    janr_id serial primary key,
    janr_name varchar(32) not null
);


create table join_table(
    music_id int references music(music_id),
    janr_id int references janr(janr_id)
);


select 
    *
from janr as j
join join_table as jt on jt.janr_id = j.janr_id 
join music as m on jt.music_id = m.music_id
where janr_id = 1




