use flaskdb;
db.createUser({user: 'flaskuser', pwd: 'password', roles: [{role: 'readWrite', db: 'flaskdb'}]});
db.parts.insertOne(
{
    "_id": {
      "$oid": "5bd761dcae323e45a93ccfe8"
    },
    "saleDate": {
      "$date": {
        "$numberLong": "1427144809506"
      }
    },
    "items": [
      {
        "name": "notepad",
        "tags": [
          "office",
          "writing",
          "school"
        ],
        "price": {
          "$numberDecimal": "35.29"
        },
        "quantity": {
          "$numberInt": "2"
        }
      },
      {
        "name": "pens",
        "tags": [
          "writing",
          "office",
          "school",
          "stationary"
        ],
        "price": {
          "$numberDecimal": "56.12"
        },
        "quantity": {
          "$numberInt": "5"
        }
      },
      {
        "name": "envelopes",
        "tags": [
          "stationary",
          "office",
          "general"
        ],
        "price": {
          "$numberDecimal": "19.95"
        },
        "quantity": {
          "$numberInt": "8"
        }
      },
      {
        "name": "binder",
        "tags": [
          "school",
          "general",
          "organization"
        ],
        "price": {
          "$numberDecimal": "14.16"
        },
        "quantity": {
          "$numberInt": "3"
        }
      }
    ],
    "storeLocation": "Denver",
    "customer": {
      "gender": "M",
      "age": {
        "$numberInt": "42"
      },
      "email": "cauho@witwuta.sv",
      "satisfaction": {
        "$numberInt": "4"
      }
    },
    "couponUsed": true,
    "purchaseMethod": "Online"
  }
)
db.parts.insertOne(
    {
        "_id": {
          "$oid": "5bd761dcae323e45a93ccfe9"
        },
        "saleDate": {
          "$date": {
            "$numberLong": "1427144809546"
          }
        },
        "items": [
          {
            "name": "laptop",
            "tags": [
              "office",
              "writing",
              "school"
            ],
            "price": {
              "$numberDecimal": "935.29"
            },
            "quantity": {
              "$numberInt": "2"
            }
          },
          {
            "name": "pens",
            "tags": [
              "writing",
              "office",
              "school",
              "stationary"
            ],
            "price": {
              "$numberDecimal": "56.12"
            },
            "quantity": {
              "$numberInt": "5"
            }
          },
          {
            "name": "envelopes",
            "tags": [
              "stationary",
              "office",
              "general"
            ],
            "price": {
              "$numberDecimal": "19.95"
            },
            "quantity": {
              "$numberInt": "8"
            }
          },
          {
            "name": "binder",
            "tags": [
              "school",
              "general",
              "organization"
            ],
            "price": {
              "$numberDecimal": "14.16"
            },
            "quantity": {
              "$numberInt": "3"
            }
          }
        ],
        "storeLocation": "Denver",
        "customer": {
          "gender": "M",
          "age": {
            "$numberInt": "42"
          },
          "email": "cauho@witwuta.sv",
          "satisfaction": {
            "$numberInt": "4"
          }
        },
        "couponUsed": true,
        "purchaseMethod": "Online"
      }
    )