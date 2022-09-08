# meetorra_test

# Задача #9

В базе данных есть:
 таблица категорий товаров category (id, name) , 
 таблица товаров product (id,category_id,name,price),
 таблица свойств property (id,name) 
 таблица значений свойств товаров property_value (product_id,property_id,value)
Необходимо:
a. получить значения свойств товара, если известно его ID
b. получить список названий уникальных свойств товара по названию категории
(свойство должно быть только у 1 товара в категории).

<h3>Создаем таблицы</h3>

<pre>
    <code>
        CREATE TABLE category (
	    id serial PRIMARY KEY,
	    name VARCHAR (255)
	);

	CREATE TABLE product (
		id serial PRIMARY KEY,
		category_id int not null,
		name varchar(255),
		price decimal,
		constraint fk_category foreign key(category_id) references category(id)
	)

	CREATE TABLE property (
		id serial PRIMARY KEY,
		name varchar(255)
	);

	CREATE TABLE property_value(
		product_id int not null,
		property_id int not null,
		value int not null,
		constraint fk_product foreign key(product_id) references product(id),
		constraint fk_property foreign key(property_id) references property(id)
	);
    </code>
</pre>



