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