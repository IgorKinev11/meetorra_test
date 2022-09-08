# meetorra_test

# Задача #7

1. Создание объекта Parser, заполнение имени файла (fileName)
2. Вызов функции UpdateCatalog(), назначение которой считать из файла данные блоками данных и сохранить их в базу данных
3. Функция UpdateCatalog() вызывает метод Reader.ReadAllData(fileName), котороый будет считывать блоками данные и сохранять считанные данные в базу данных.
4. В методе Reader.ReadAllData(fileName) обновляются индексы начала считывания блока данных (start) и конец считывания (end) и пока индекс end не достигнит конца файла вызывается метод Reader.ReadDataChunk(fileName, start, end), который основываясь на индексах считывает данные и сохраняет их в массив data, а затем вызывает метод Reader.UpdateDataBase(data) пердает туда считанные данные и далее уже данный метод подключается подключается к базе данных (DataBaseLogic.connect()), обновляет базу данных (DataBaseLogic.update(data)) и разрывает соединение с базой данных (disconnect())

![alt text](https://github.com/IgorKinev11/meetorra_test/blob/main/images/class_diagram.png)



# Задача #9

В базе данных есть:
 таблица категорий товаров category (id, name), таблица товаров product (id,category_id,name,price), таблица свойств property (id,name), таблица значений свойств товаров property_value (product_id,property_id,value)
 
Необходимо:
 - a. получить значения свойств товара, если известно его ID
 - b. получить список названий уникальных свойств товара по названию категории
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

<h3>Добавляем данные</h3>

<pre>
    <code>
	insert into category (name) values ('smartphone');
	insert into category (name) values ('laptop');
	insert into category (name) values ('periphery');
	
	insert into property_value (product_id, property_id, "value") 
		values (1, 1, 9), (3, 3, 7), (2, 4, 10), (5, 5, 10), (6, 6, 7);
    </code>
</pre>
    
<h3>Запросы </h3>
<h4>Запрос a </h4>
<pre>
    <code>
select property.name from property_value 
inner join property on property.id = property_value.property_id
inner join product on product.id = property_value.product_id
where product.id = 2;
    </code>
</pre>

![alt text](https://github.com/IgorKinev11/meetorra_test/blob/main/images/query_1.PNG)

<h4>Запрос b </h4>
<pre>
    <code>
select distinct property.name from property_value

inner join property on property.id = property_value.property_id
inner join product on product.id = property_value.product_id
inner join category on category.id = product.category_id

where category.name = 'laptop';	
    </code>
</pre>

![alt text](https://github.com/IgorKinev11/meetorra_test/blob/main/images/query_2.PNG)





