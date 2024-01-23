# _MongoDB_
## Topic 

## Basic 

- introduction to MongoDB
- NoSQL vs SQL
- JSON VS BSON
- Monoging DB & collections
- advance CRUD operations
- comparison operators
- cursors in mongoDB
- logical operator
- soxper and elements operators
- projections & relations
- embedded documents

## Advanced

- introduction to indexes creating and monoging index
understanding the aggregation framework 

   * introduction  to aggregation basic aggregation operations
   combining aggregation stages aggregation operations and expressions.

- pipeline stages

    * ($match , $project ,$group ,$sort, $limit, $unwind ,$filter,$skip, etc)

## Projects 

- working with mongoDB nodeJS drivers ( how to perform CRUD operations in real life projects):
 - working with mongoDB and nodeJS.




 ---------------

## 1. What is MongoDB ?

MongoDB is an open-source document-oriented NoSQL database
    managment system.

here document-oriented means this database stores its data in the form of document. and the document is json documents.

MongoDB is designed for flexibility ,scalibility and performance handling unstructured or semi structured data.

##  10gen company build this MongoDB. and now its name is mongoDB the company was founded by - _```Eliot Horowitz```_ and _```Merriman```_ in 2007 and the first version to mongoDB was released in 2009 .

### MONGO name was came from ```'HUMONGUOS'``` word. which means - huge 

## 2. SQL VS MongoDB (NoSQL).



| SQL |  NoSQL (MongoDB)|
| -------- | -------- | 
| 1. sql database are relational databases.   | 1. Nosql databases are non-relational databases   |   
|2. They use strutured tables to store data in rows and colums. | 2. they provide flexibility in data storage, allowing varied data types and structures.  |
|3. suitable for applications with well-defined schemas and fixed datastructures. | 3. ideal for application with dynamic or evolving data modules. |
|4. E-commerce platform . HR managment etc.   | 4. CMS ,social media platforms, gaming    |
|5. ex - mysql, postgreSql , oracle.   | 5.ex - MongoDB, cassandra .reddis.  |
  


## Basic mongo commands

1. ( to check the version )

        mongod --version  

2. ( to open the mongodb shell )              
   
         mongosh

3. ( it will show the databases. )

         show dbs 

4. (creating new database);

         use 'database-name'

5. ( delete database )

         db.dropDatabase()

6. ( to show the collections ).

         show collections

7. ( to show collections);

         db.createCollection'collection-name'

8. ( to delete the collectio );
   
         db.'collection-name'.drop    


 ### if you created any database and inside it has no document or data or collections . it will not show .when you entered -```show dbs```.

 ### insert operation in MongoDB. 

 - inserting documents in mongoDB,
 - when to use quotes. and when not to?
 - ordered and unordered insert
 - case sensetivity.

1 . Inserting one Documents in MongoDB .
  - 
        db.<'collection-name'>.insetOne({

            field1: value1,
            field2: value2,
            ...
        });
    
    you can directly add document or data like this

         db.data.insertOne({'name': 'atanu', age: 20})

   without creating the collection before mongoDB will create the collection whenever it gets the data or document.

2 . inserting multiple document in MongoDB.
 - 
    
    db.<'collection-name'>.insertMany ({

        {field1: value1, field2: value2, field3 :value3...},
        {field1: value1, field2: value2, field3 :value3...},
        .....

    })
    
    
to add multiple documents onece


    db.data.insertMany([{'name':'atanu',age: 20},{'name': 'arjun',age: 23},{'name':'amit',age:25}])

- To see the inserted data.
    
        db.<'collection-name'>.find ()
    

3 .  When to use quotes and when not to ?
 - 

#### special charactors :

        if a field name contains special characters or spaces, or starts with a numetic digit ,using quotes is necessary.

####  Reserved Words :

        if a field name is a reserved keyword in MongoDB, use quotes , distinguish it from the reserved keyword.    


    - a field cann't contain any space. 

4 . Ordered and Unordered insert
 -

#### ordered insert :

        default behavior is ordered ,where MongoDb stops on the fiest error. 

     db.<'collection-name'>.insertMany([{field1 : value1},{field2: value2},{field3: value3},...]) 

#### unorder insert: 
        here basically if we have a lots of data and we have  an error in between .then MongoDB show error at that data line , and rest others will be inserted

     db.<'collection-name'>.insertMany([{field1 : value1},{field2: value2},{field3: value3},...],{ordered: false})

5 . Case sensitivity in MongoDB.
 - 
    - Collection names are case-sensitive
    - field names within documents are also case sensitive.
    - db.Product.insertOne({name:'atanu',age: 20});
    - db.product.insertOne({name:'atanu',age: 20});        {here this 2 command is totally different because of the capital P and the small p }.

6 . Finding Documents in MongoDB.
 - 
    find();

        db.collection_name.find({ key: value })

    findOne();

        db.collection_name.findOne({key:value})    

7 . Importing JSON in MongoDB
 -  
if the json file not in array format.
       
     mongoimport.jsonfile.json -d database_name -c collection_name

if in array format 

        mongoimport.jsonfile.json -d database_name -c collection_name --jsonArray

```- note``` ;  here ```--jsonArray``` accepts the import of data expressed with multiple MongoDB documnets with in a single JSON file 

    * and the limit to imports of 16 MB or smaller.

* ```it``` (iterator) enter  to show more data's 

8 .  Comparison Operator
 - 
   #### exmaple :
    db.collection.find({'field_name':{$operator : value}})

- ```$eq``` (equal to)

        db.product.find({op:{$eq: 'insert'}})
- ```$ne``` (not equal to )

        db.product.find({op:{$ne: 'insert'}})
- ```$gt``` (greater than)

        db.product.find({numYield:{$gt: 3}})
- ```$gte``` (greater  than equal to)

        db.product.find({numYield:{$gte: 3}})
- ```$lt``` (lesset than)

        db.product.find({numYield:{$lt: 4}})
- ```$lte``` (lesser than equal to)

        db.product.find({numYield:{$lte: 4}})
- ```$in``` (in operator)
        
        db.product.find({price:{$in:[248,120,699]}})
- ```$nin``` (not in operator)

        db.product.find({price:{$nin:[248,120,699]}})



9 . Introduction to Cursors
 - 
 #### Cursors in MongoDB are used to efficiently retrieve lagre reasult sets from queries , providing control over the data retrival process

 ## Cursors Methods 

 - ```count()```

 use ```.count()``` to see the number of documents of that particular comparison.

      db.product.find({numYield:{$lte: 4}}).count()

 - ```limit()```

 Here you fixed the number of documents you want to see. 

     db.product.find({numYield:{$gt: 3}}).sort({numYield: 1}).limit(3)
    

 - ```skip()``` 

 The many number you will enter here it will skip that many documents and will show the others.



     db.product.find({numYield:{$gt: 3}}).sort({numYield: 1}).limit(3).skip(1)
  
 - ```sort()``` 

 It will sort the document according to the key you have entered 
 
 ```note :``` in sort() ```1``` represent sorting in increasing order and ```-1``` represents sorting in decreasing order.

Increasing order :

     db.product.find({numYield:{$gt: 500}}).sort({numYield: 1})
Decreasing order :

    db.product.find({numYield:{$gt: 500}}).sort({numYield: -1})   

 ```note: ``` _performance implictions :_  
 - ```skip()``` can be inefficient for large offsets.
- using ```sort[]``` on large result sets may impact performance.

##### Be cautions when  using ```limit()```  and ```skip()``` on large collections. Consider using indexing to optimize query performance.

10 . Logical Operator
-  
- ```$and```
        
        {$and:[{condition 1},{conditon 2},...]}

    - Example

            db.product.find({$and:[{numYield:{$gt: 500}},{op:{$eq: 'query'}}]})
    - if we write it like this ```db.product.find({numYield:{$gt: 500},op:'query'})```
    then also we find the same output because mongo explicitly take it as and operator. 
- ```$or```

        db.product.find({$or:[{numYield:{$gt: 1000}},{op: 'query'}]})

- ```$not```

        db.product.find({numYield:{$not: {$eq: 5} }})

- ```$nor```

        db.product.find({$nor:[{numYield:{$lt: 4}},{op: 'mankgo'}]})
    
11 . Complex Expression
- 
- The ```$expr``` operator allows using aggregraton expressions within a query.

- Useful when you need to  compare fields from the same documnet in a more complex manner.

- syntax :

        {$expr:{operator: [field, value]}}
- Example :

        db.product.find({$expr:{$gt:['$numYield',500]}})  

## Benifits of using  quary than the logical operator ?

- for this kind of problems where , take it as example. where we have to find it out the multiplication result of 2 operand is greater or lesser (as u can say) than an another operand .

- Example :
        
         db.product.find({$expr:{$gt:[{$multiply:['$numYield','$millis']},'$responseLength']}})

12 . Elements Operator
- 
```$exists```
- 
- It matches documents that have a specific field,regardless of its value.


        {field:{$exists:<boolen>}}
- Example:

        db.product.find({ns:{$exists: true}}).count()

        db.product.find({ns:{$exists: false}}).count()

```$type```
- 
- This operator filters documents based on BSON type of a field.

        {field:{$type:"<bson-data-type>"}}
- The <BSONType> value can be one of the following:

```1: Double```

```2: String ```

```3: Object```
        
```4: Array```

```5: Binary data```

```6: Undefined```

```7: Object id```

```8: Boolean```

```9: Date```

```10: Null```

```11: Regular expression```

```12: JavaScript type```

- Example:

        db.product.find({op: {$type: 'string'}}).count()  

        db.product.find({numYield: {$type: 'number'}})
- you can use like this also: 
        
        db.product.find({op: {$type: 2}}).count() 

```$size```
- 
- The ```$Size``` operator matches document where the size of an array field matches a specified value.

        {field:{$size:<array.length>}}
- Example

        db.data.find({'friends':{$size:3}})


13 .  Projection
- 
- To include specific fields use projection with a value of ```1``` for the  fields you want.
- To cxclude field , use projection with a value of ```0``` for the fields is you want to exclude
- You cannot include and exclude fields simultaneously in the same query porjection.

- 
        db.data.find({},{field:1,field:2})
- Example:

        db.data.find({'friends':{$size:3}},{friends:1})


         db.data.find({'friends':{$size:3}},{friends:1, id:0})
### exclusion after inclusion is not possible and as well as for inlcusion after exclusion. (But the id is exception u can do exclusio or inclusion with it)(1,1,1)is possible (0,0,0) is also ok but (1,0,1)is not ok.

14 . Embedded Documents
- 
- query documents inside embedded documents using dot notation.

        db.collection.find({"parent.child":value})
- Example:

         db.data.find({'friends.name':'Leo'})
-       
        db.collection.find({'comments.user': 'henry', 'metadata.like':{$gt:50}})

15 . $all vs $elemMatch
- 
- usefull inside the embedded document.
- The ```$all``` operator selects the documents where the value of a field is an array that contains all the specified elements.

        {<field>:{$all:[<value1>,<value2>...]}}
- Example:

        db.data.find({'friends.name':{$all:['Leo','Nora']}})   

- The ```$elemMatch``` operator matches documents that contains an array field with least one element that matches all the specified query criteria .

        {<field>:{$elemMatch[<query1>,<query2>....]}}
- Example:

         db.data.find({friends:{$elemMatch:{'name':'Sophie', 'hobbies':'Walking'}}})    

16 . Update Operation in MongoDB
- 
- ```updateOne()``` and ```updateMany()```
- Removing and renaming fields
- Adding, removing items form array.
- Updating embedded documents.

## updateOne()
     
        db.collectionName.updateOne(
                {filter},
                {$set:{existingfield:newValue,newfield:"newValue,//...},}
        );
- Example:

        db.data.updateOne({_id: ObjectId("65a14354118ac805ef13ab77")},{$set:{'age': 45}}) 
        -------------------------
        db.data.updateOne({id:2811},{$set:{'name': 'shreya'}})
## updateMany()

        db.collectionName.updateMany(
                { filter },
                { $set: {existingField:newValue,//...},}
        );
- Example:

        db.data.updateMany({age:{$gt:20}},{$set: {'age':21}} )

17 . Removing and Renaming Fields
- 
### ```Remove/Delete```
 
        
         db.collectionName.updateOne( { filter },{$unset: {fieldName:1}} );
- Example:

        db.data.updateOne({'city':'Washington'},{$unset:{'city':1}})         
### ```Rename```

        db.collectionName.updateOne(
                {filter},
                {$rename:{oldFieldName: "newFieldName"}}
        );
- Example:

        db.data.updateMany( {'city':'San Diego'}, {$rename:{'city':'CITY'}} )              

17 . Updating arrays and Embedded Document.
- 
### Push : 
    db.collectionName.updateOne(
        {filter},
        {$push:{arrayField:"new element}}
        );        
- Example :

        db.data.updateOne({id: 1}, {$push:{friends:{name: 'jhon', hobbies:['cricket','swiming']}}})

### Pop :
      db.collectionName.updateOne(
        {filter},
        {$pop:{arrayField: 1}}
        );
- Example:

        db.data.updateOne({id: 1}, {$pop:{friends: 1}})

- ```positional operator```
-       db.collectionName.updateOne(
        {filter},
        {$set:{"arrayField.$.text": "Update text"}}
        );               
- Example: 

        db.data.updateOne({id: 1, 'friends.name':'Elijah'},{$unset: {'friends.$.hobbies':'cricket'}})

- update the text value within an comments array = "helllo mongo", where id: 1 and name: 'Elijah'.        

18 . Delete
- 
_in MongoDB, the DELETE operations are used to remove documents from a collection, There are two main methods to perform deletion: ```deleteOne()``` and ```deleteMany()```._

- Delete a single Document:

        db.collectionName.deleteOne({_id:objectId("1234")});
- Example:

- Delete Multiple Documents:

        db.collectionName.deleteMany({field:"value"});
- Example:

        db.data.deleteMany({'name':'Luke'})      


## 19 . Indexes in mongoDB.

1. ```what are indexes?```
        
        Indexes are specialized data structure that optimize data retrival speed in mongoDB.
        - indexes are a fraction of data in a more searchable format.
        - they enable mongoDB to locate data faster during queries.
        - indexes are separate form collection and multiple indexes can exist per collection.
2. ```Benifits of indexes```

        # Faster quering:       
                indexes drastically accelerate data retrieval , particular foro large collection.

        # Efficient Sorting: 
                indexes facilitate rapid sorting based on specific fields.

        # Improved Aggregation:
                Aggregation opoerations become more efficient with optimized indexes.

        # Indexing  on Multiple Fields:
                complex queries can be executed efficiently by utilizing multiple fields in indexes.        
3. ```Managing Indexes```

- (1) for storing indexes in asecnding order.
- (-1) for storing indexes in desending order.

        db.collectionName.createIndex({field:1});
- to get index

        db.collectionName.getIndexes();

        */  _id is default index.
- to delete index

        db.collection.dropIndex({field: 1});

-       db.collection.dropIndex("index_name");        
4. ```Unique , Text indexes```

        db.collectionName({field: 1},{unique: true})
* #### To Create Unique Indexes
        db.collectionName.createIndex({field: 1}, {unique: ture})

-       db.collectionName.createIndexes({field:"text"})

-       db.collectionName.find({$text:{$search:"keyword"}});

- Searching using index is faster than ```$regex``` searching.

-       db.collectionName.find({field:{$regex: "air"}});
5. ```When not to use indexes```

* ### Indexes on Rarely Used Field:
        indexing fields that are seldom used in queries can consume unnecessary space and resources.

* ### Balancing Act:
        Indexing requires disk space and memory. Overindexing can lead to resource strain and impact overall performance.

* ### Indexing Small Collections:
        In smaller collection the cost of index maintaince might outweigh the benifits gained form querying.





## explain()
- use explain method to understand query execution in detail.
-       db.product.find ({name:'Air Fryer}).explian();

- use to measure the time taken to execute a query.
-       db.product({name:'Air Fryer'}).explain(
        "executionStats")


20 . Aggregation in MongoDB
-       
( its like frame work in mongoDB ) 

### What is Aggregation ?
        Aggregation is the process  of performing transformations on documents and combining them to produce computed result.
#### Pipeline Stages: 
        Aggregation consist of multiple pipeline stages, each perfoming a specific operation on the input data.

#### Benifits:
 1. Aggregation data:
        
        Complex calculation and operations are possible.
 2. Advanced Transformation:    
 
        Data can be combined, reshaped, and computed for insights.
 3. Efficient Processing:

        Aggregation handles large datasets efficiently.          

## a. ```$match``` 

- The ```$match``` stage is similer to the query used as the first argument in field().it finds documents based on specified conditions.

```syntax:```
        
        {$match:{<query>}}
```Example:```

        db.data.aggregate([{ $match:{age:{$lt: 21}}}]);
## b. ```$group```

* The ```$group``` stage groups documents by specified fields and performs aggregation operation on gouped data.

```syntax:```
        
        {$group:{
                _id: <expression> ,//group-key
                <field1>:{<accumulator1>:<expression>},
                ...
        }}
```Example:```

 -        db.data.aggregate([{$group:{ _id: "$id" , totalID: {$sum: 1}}}])

 -      db.data.aggregate([{$group:{ _id: "$name" , AverageAge: {$avg: "$age"},},}])
- Here iam creating a group using the name and find the average age of the same name people and the people whose age is more than 10.

        db.data.aggregate([

          {
            $match: {
                age:{
                    $gt: 10
                },
             }
         },
         {
          $group:{
              _id: "$name",
              avgrageAge: {
                  $avg: "$age"
                },
             },
           }   
        ])


- Here we find or match the same quentity  and group the queintiy and calculate the sum of the price and average of the price.

        db.products.aggregate([
    
        {$match: {quentity: 3}},
        {
                $group:
                {
                        _id: "quentity",
                        priceTotal: {$sum: '$price'},
                        priceAvg: {$avg: "$price"},
                },
        },]);

*
 ```
db.data.aggregate([ { $match: {'name': 'Joe'} } , { $group: { _id: "$name", avgrageAge: { $avg: "$age" } } }] );

```
## c . ```$sort```
syntax: 
        
        db.collectionName.aggregate({
                {$sort: {totalProducts: 1}}
        });

* use ```1``` for increasing order and ```-1``` for decreasing order.

* ```Example code:```

                db.product.aggregate([
         {$match:{price:{$gt: 1200}}},
        {$group:{
        _id:"$catagory",
        totalPrice: {$sum: "$price"},
        }},
        {
        $sort:{
            totalPrice: 1
        },
            },
        ]);

## d . ```$Project```        

- The $project stage reshapes documents. includes or exclude fields, and performs .operations on fields. 

 
```
{$project:{<field>:<expressions>,..}}
```

```Examples:```
-       

        db.product.aggregate([
                {$project:{
                        name:1, discountPrice:{$subtract:{"$price",5}}
                }}
        ]);

projects the name field and calculates a discounted price field by subtracting 5 from the price , 
- ```$sum```,```$subtract```,```$multiply```,```$avg```, etc are types of expressions operator.

## ```e. $unwind```
- The ```$unwind``` stage deconstructs an array field and products multiple documents

- 
```
{$unwind: <array>}
```

```
db.product.aggregate([
        {$unwind: '$colors'},
        {$group: {
                _id: {company:'$company'},
                products:{$push:"$colors"}
        }}
]);
```
## f . $addToSet

- The $addToSet adds elements to an array field while preventing duplicates.

- 
```
db.data.aggregate([
     {$unwind:'$color'},
     {$match:{age:{$gt: 42}}},
     {
         $group:{
             _id: '$age',
             allColors: {$addToSet:'$color'}
         }
     }
 ]);
```
## g . $size

- The $size stage calculates the length of an array field

```
{$size:<array>}
```
- we can't use $size inside $group bcz the $size operator is not allowed directly within the $group stage, Instade , you can use it in combination with other aggregation operatous or in separate pipeline stages.

-       db.data.aggregate([
         {$unwind:'$color'},
        {$match:{age:{$gt: 42}}},
        {
        $group:{
            _id: '$age',
            allColors: {$addToSet:'$color'},
            
        }
        },
        {
        $project:{
            _id:1,
            color:1,
            colorLength: { $size: "$allColors"},
        }
        }
        ]);

## h. ```$limit``` and ```$skip```

- The $limit and $skip stages are useful for pagination , limitation skipping results.

-       {$limit <positive integer>}

- ```Example :```

```

db.data.aggregate([
    {$unwind:'$color'},
    {$match:{age:{$gt: 42}}},
    {
        $group:{
            _id: '$age',
            allColors: {$addToSet:'$color'},
            
        }
    },
    {
        $project:{
            _id:1,
            color:1,
            colorLength: { $size: "$allColors"},
        }
    },
    {
        $limit: 1
    }
]);

```

- ```$skip Example :```

```

db.data.aggregate([
    {$unwind:'$color'},
    {$match:{age:{$gt: 42}}},
    {
        $group:{
            _id: '$age',
            allColors: {$addToSet:'$color'},
            
        }
    },
    {
        $project:{
            _id:1,
            color:1,
            colorLength: { $size: "$allColors"},
        }
    },
    {
        $skip: 1
    }
]);
```
## i . ```$filter```

- The ```$filter``` is stage fiters elements of an array based on specified conditions.

```
{
    $project: {<field>:{
            $filter :{
                input: '$<array>',
                as: '<variable>'
                cond: <expressions>
            }
        }}
}

```

- ```Sample Example :```

```
db.col.aggregate([
    {
        $project: {
            name: 1,
            atenix: {
                $filter:{
                    input: '$filter',
                    as: ValidityState,
                    cond: {$gt: ['$$val',30]}
            }
        }
    }
}])
```