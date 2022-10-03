module.exports = {
    "ITR": [
        {
            "type": "category",
            "label": "Personal Info",
            "collapsed": false,
            "items": [

                {
                    "type": "category",
                    "collapsible": true,
                    "label": "Personal Info Details",
                    "items": [
                        "personal-info/personal-info-details/tax-payer-details",
                    ]
                }
            ]
        },
        {
            "type": "category",
            "label": "Income",
            "collapsed": false,
            "items": [
                {
                    "type": "category",
                    "label": "Salary",
                    "collapsed": false,
                    "items": [
                        "income/salary/emp-info/emp-info",
                        "income/salary/salary-details/salary-details",
                    ]
                },
                {
                    "type": "category",
                    "label": "House Property",
                    "collapsed": false,
                    "items": [
                        "income/house-property/property-type/property-type",
                        "income/house-property/expences/expences",                      
                    ]
                }
            ]
        }
    ],
}