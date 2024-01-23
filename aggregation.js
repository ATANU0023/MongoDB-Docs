db.data.aggregate([

    {
        $match: {
            age:{$gt: 10},
        }
    },
    {
        $group:{
            _id: "$name",
            avgrageAge: {$avg: "$age"},
        },
    }
]);


db.products.aggregate([
    
    {$match: {quentity: 3}},
    {
        $group:{
            _id: "quentity",
            priceTotal: {$sum: '$price'},
            priceAvg: {$avg: "$price"},
        },
    },
    
]);

db.data.aggregate([
    {$match:{'name': 'Sophie' || 'Joe'}},
    {$group:{
        _id: "$name",
        avgage:{$avg: '$age'}
    }},

]);

// $sort sample query

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


//$unwind

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

//$filter

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