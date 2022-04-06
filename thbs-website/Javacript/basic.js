var mydata = [
    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12,
                70
            ],
            "ycord": [
                100,
                45 // mydata[0].matrix.ycord[1]
            ]
        },
        "finalbuild": 12 // mydata[0].finalbuild
    },
    {
        "nexusVersion": "SNAPSHOT-1.0.0",
        "matrix": {
            "zcord": [
                12,
                70
            ],
            "ycord": [
                100,
                45 // mydata[1].matrix.ycord[1]
            ]
        },
        "artifacts": [
            {
                "file": "pom.xml" // mydata[1].artifacts[0].file
            },
            {
                "type": [
                    {
                        "fname": 'traval_final',
                        "ext": ".png",
                        "size": 1024 // mydata[1].artifacts[1].type[0].size
                    },
                    {
                        "fname": 'profile', // 
                        "ext": ".jpeg",
                        "size": 500
                    }
                ]
            }
        ],
        "finalbuild": 12
    }
];