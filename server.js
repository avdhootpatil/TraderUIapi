var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var homeData = require("./data/home");
var productDetails = require("./data/productDetails");
var sellerDetails = require("./data/sellerDetails");
var sellerCatalogDetails = require("./data/sellerCatalogDeatils");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/buyer/home", function(req, res) {
  console.log("Home");
  res.status(200).send(homeData());
});

app.post("/buyer/products/:id/quote", (req, res) => {
  console.log("Req quote with -", req.body, req.params.id);
  let { subject, message } = req.body;
  if (subject && message) {
    res.status(201).send({ Messages: ["Not found"] });
  } else if (subject === "" || subject === "undefined") {
    res.status(400).send({
      errors: {
        subject: ["The input was not valid."]
      },
      title: "One or more validation errors occurred.",
      status: 400,
      traceId: "0HLOKR6L7GCSI:00000001"
    });
  } else if (message === "" || message === "undefined") {
    res.status(400).send({
      errors: {
        message: ["The input was not valid."]
      },
      title: "One or more validation errors occurred.",
      status: 400,
      traceId: "0HLOKR6L7GCSI:00000001"
    });
  }
});

app.get("/buyer/products/:id/quotes", (req, res) => {
  console.log(req.params.id);
  res.status(200).send({
    subject: "10000kgs of raw steel",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
});

app.get("/internalServerError", function(req, res) {
  res.status(500).json("INternal server error ");
});

app.get("/buyer/products/:id", function(req, res) {
  let pD = productDetails();
  res.status(200).send(pD);
});

app.get("/buyer/seller/:id", function(req, res) {
  res.status(200).send({
    id: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b",
    name: "Sketch Co",
    addressLine1: "Stellar Enclave",
    addressLine2: "Vile Parle",
    addressLine3: "",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    countriesOfOperation: [
      "Albania",
      "Andorra",
      "Argentina",
      "Djibouti",
      "India",
      "Iraq"
    ],
    preferedCategories: [
      {
        id: 2,
        name: "Industrial & Machinary",
        icon: "fas fa-industry",
        imageUrl: "http://localhost:10000/devstoreaccount1/categories/2.jpg"
      },
      {
        id: 4,
        name: "Electronics & Electrical",
        icon: "fas fa-couch",
        imageUrl: "http://localhost:10000/devstoreaccount1/categories/4.jpg"
      },
      {
        id: 5,
        name: "Industrial Appliances",
        icon: "fas fa-charging-station",
        imageUrl: "http://localhost:10000/devstoreaccount1/categories/5.jpg"
      }
    ],
    contactPerson: {
      firstName: "Sajith",
      lastName: "K",
      companyId: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b"
    }
  });
});

app.get("/buyer/seller/:id/catalog", function(req, res) {
  console.log("Catalog api called ");
  let cD = sellerCatalogDetails();
  res.status(200).send(cD);
});

app.get("/buyer/products/:id/sponsored", (req, res) => {
  console.log(req.params.id);
  res.status(200).send({
    products: [
      {
        id: "5dbc0a3c867d9b00249cb9c3",
        name: "BWP Plywood",
        minQuantity: "10pcs",
        categoryId: 1,
        subCategoryId: 1,
        productTypeId: 1,
        sellerId: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955a92033a16bfd01d931"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955c125cf01bea0292499"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955c7e6316d9020702650"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c4",
        name: "WPC White Rectangular Foam Board",
        minQuantity: "10pcs",
        categoryId: 1,
        subCategoryId: 1,
        productTypeId: 2,
        sellerId: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955daa641288ee8d35e0d"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955e24ab832999059527a"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c5",
        name: "Wooden Brown WPC Termite Board",
        minQuantity: "10pcs",
        categoryId: 1,
        subCategoryId: 1,
        productTypeId: 2,
        sellerId: "175ff977-c62a-45f4-9539-eb916c52db52",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955eea205ec74a830ee14"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955f687bb371bf97c6f4a"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da955fa64928ae452ee1b58"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c6",
        name: "High Pressure Fly Ash Brick Making Machine",
        minQuantity: "1pc",
        categoryId: 1,
        subCategoryId: 2,
        productTypeId: 3,
        sellerId: "1ed36e9c-922f-4e11-a214-ac3dad1a0caa",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da956011e211318a0cd2bb6"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da956074edb4118d859996d"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da9560b54ec71356649e260"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c7",
        name: "Automatic Fly Ash Brick Plant",
        minQuantity: "1pc",
        categoryId: 1,
        subCategoryId: 2,
        productTypeId: 3,
        sellerId: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da95615dc5d3e18cb6e97c1"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da9561b25f3f623a4a07cd8"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c8",
        name: "PSM - 4 Automatic Brick Machine",
        minQuantity: "1pc",
        categoryId: 1,
        subCategoryId: 2,
        productTypeId: 3,
        sellerId: "175ff977-c62a-45f4-9539-eb916c52db52",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da95627e55d0bf5e89ad232"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9c9",
        name: "Semi-Automatic Hydraulic Concrete Mixer Machine",
        minQuantity: "1pc",
        categoryId: 1,
        subCategoryId: 2,
        productTypeId: 4,
        sellerId: "175ff977-c62a-45f4-9539-eb916c52db52",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da957004cecc1728515870a"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da95707a4dd9212ef161f8c"
          }
        ]
      },
      {
        id: "5dbc0a3c867d9b00249cb9ca",
        name: "Schwing AM 3 SH Concrete Transit Truck Mixer",
        minQuantity: "1pc",
        categoryId: 1,
        subCategoryId: 2,
        productTypeId: 4,
        sellerId: "1ed36e9c-922f-4e11-a214-ac3dad1a0caa",
        images: [
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da9571106c54d52a0ca70bd"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da957164d56e4875dd7a2c6"
          },
          {
            actualSizeUrl: null,
            thumbnailUrl: null,
            id: "5da9571af2d8d64e42897450"
          }
        ]
      }
    ],
    sellers: [
      {
        id: "1ed36e9c-922f-4e11-a214-ac3dad1a0caa",
        name: "Arcenciel Ltd"
      },
      {
        id: "175ff977-c62a-45f4-9539-eb916c52db52",
        name: "Astrum Labs Co."
      },
      {
        id: "eb30dfce-a2a3-49ef-8f86-eda48c636f1b",
        name: "Sketch Co"
      }
    ],
    categories: null,
    subCategories: null,
    productTypes: null
  });
});

app.get("/buyer/products/:id/similar", (req, res) => {
  console.log(req.params.id);
  res.status(200).send({
    products: [
      {
        id: "5d7f8b51887c0320sssac77ebe8151",
        sellerId: "5d7f8b51887c0320sssac77ebe8",
        name: "Earphone",
        description: "Bd earphones (in-ear) ",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0ZyMtb8gKphJhU7HvYwFJcPKfS_9iFMkrZkZNy1Jbg8D3z81L",
            thumbnailUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0ZyMtb8gKphJhU7HvYwFJcPKfS_9iFMkrZkZNy1Jbg8D3z81L",
            thumbnailUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      },
      {
        id: "5d7f8b51887c0320ac77ebe998",
        sellerId: "5d7f8b51887c0320ac77ebe998",
        name: "Tyres",
        description: "Tyssres",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl: "http://www.qwiktyres.com/img/qwiktyres_Tyre.jpg",
            thumbnailUrl: "http://www.qwiktyres.com/img/qwiktyres_Tyre.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_574,q_auto:eco,w_1200/https://inews.co.uk/wp-content/uploads/2019/06/wheel.jpg",
            thumbnailUrl:
              "https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_574,q_auto:eco,w_1200/https://inews.co.uk/wp-content/uploads/2019/06/wheel.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      },
      {
        id: "5d7f8b51887c0320ac77ebe8",
        sellerId: "5d7f8b51887c0320ac77ebe8",
        name: "Mobile Covssser",
        description: "Mobssile Cover",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl:
              "https://5.imimg.com/data5/JV/KN/MY-41126370/printed-mobile-covers-500x500.jpg",
            thumbnailUrl:
              "https://5.imimg.com/data5/JV/KN/MY-41126370/printed-mobile-covers-500x500.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://5.imimg.com/data5/DL/AM/IG/SELLER-9496766/printed-mobile-covers-500x500.jpg",
            thumbnailUrl:
              "https://5.imimg.com/data5/DL/AM/IG/SELLER-9496766/printed-mobile-covers-500x500.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      },
      {
        id: "5d7f8b51887c0320sssac77ebe8",
        sellerId: "5d7f8b51887c0320sssac77ebe8",
        name: "Earphone",
        description: "Black wired earphones (in-ear) ",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            thumbnailUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            thumbnailUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      },
      {
        id: "5d7f8b51887c0320sssac77ebe8",
        sellerId: "5d7f8b51887c0320sssac77ebe8",
        name: "Earphone",
        description: "Black wired earphones (in-ear) ",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            thumbnailUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            thumbnailUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      },
      {
        id: "5d7f8b51887c0320sssac77ebe8",
        sellerId: "5d7f8b51887c0320sssac77ebe8",
        name: "Earphone",
        description: "Black wired earphones (in-ear) ",
        tags: ["earphones", "wired", "in-ear", "mobile earphones"],
        categoryId: 2,
        subCategoryId: 0,
        productTypeId: 2,
        images: [
          {
            actualSizeUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            thumbnailUrl:
              "https://image2.geekbuying.com/ggo_pic/2019-07-11/QCY-T3--Bluetooth-5-0-TWS-Earphone-3D-Stereo-869269-.jpg",
            id: null
          },
          {
            actualSizeUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            thumbnailUrl:
              "https://s23243.pcdn.co/wp-content/uploads/sites/3/2019/06/%E7%9C%9F%E6%97%A0%E7%BA%BF%E8%80%B3%E6%9C%BA-e1561791660393.jpg",
            id: null
          }
        ],
        isVerified: false,
        minQty: ""
      }
    ],
    sellers: [
      {
        id: "5d7f8b51887c0320sssac77ebe8",
        name: "XYZ Exporter"
      },
      {
        id: "5d7f8b51887c0320ac77ebe998",
        name: "ABC Exporter"
      },
      {
        id: "5d7f8b51887c0320ac77ebe8",
        name: "MB Exporter"
      }
    ]
  });
});

app.get("/categories", (req, res) => {
  res.status(200).send([
    {
      id: 3,
      name: "Apparel & Garments",
      icon: "fas fa-tshirt",
      imageUrl: "http://127.0.0.1:10000/devstoreaccount1/categories"
    },
    {
      id: 1,
      name: "Building & Construction",
      icon: "fas fa-building",
      imageUrl: "http://127.0.0.1:10000/devstoreaccount1/categories"
    },
    {
      id: 5,
      name: "Electronics & Electrical",
      icon: "fas fa-charging-station",
      imageUrl: "http://127.0.0.1:10000/devstoreaccount1/categories"
    },
    {
      id: 4,
      name: "Furniture Supplies",
      icon: "fas fa-couch",
      imageUrl: "http://127.0.0.1:10000/devstoreaccount1/categories"
    },
    {
      id: 2,
      name: "Industrial & Machinary",
      icon: "fas fa-industry",
      imageUrl: "http://127.0.0.1:10000/devstoreaccount1/categories"
    }
  ]);
});

app.get("/categories/:catId/subCategories", (req, res) => {
  console.log(req.params.catId);
  if (req.params.catId == 2) {
    res.status(500).send({
      Messages: ["Sorry, something seems to be broken"],
      DeveloperMessage: {
        ClassName: "System.FormatException",
        Message:
          "'5d7798dda4fc18486883de1' is not a valid 24 digit hex string.",
        Data: null,
        InnerException: null,
        HelpURL: null,
        StackTraceString:
          "   at MongoDB.Bson.ObjectId.Parse(String s)\r\n   at MongoDB.Bson.Serialization.Serializers.StringSerializer.SerializeValue(BsonSerializationContext context, BsonSerializationArgs args, String value)\r\n   at MongoDB.Bson.Serialization.Serializers.SealedClassSerializerBase`1.Serialize(BsonSerializationContext context, BsonSerializationArgs args, TValue value)\r\n   at MongoDB.Bson.Serialization.Serializers.SerializerBase`1.MongoDB.Bson.Serialization.IBsonSerializer.Serialize(BsonSerializationContext context, BsonSerializationArgs args, Object value)\r\n   at MongoDB.Bson.Serialization.IBsonSerializerExtensions.Serialize(IBsonSerializer serializer, BsonSerializationContext context, Object value)\r\n   at MongoDB.Bson.Serialization.IBsonSerializerExtensions.ToBsonValue(IBsonSerializer serializer, Object value)\r\n   at MongoDB.Driver.Linq.Translators.PredicateTranslator.TranslateComparison(Expression variableExpression, ExpressionType operatorType, ConstantExpression constantExpression)\r\n   at MongoDB.Driver.Linq.Translators.PredicateTranslator.Translate(Expression node)\r\n   at MongoDB.Driver.Linq.Translators.PredicateTranslator.Translate(Expression node, IBsonSerializerRegistry serializerRegistry)\r\n   at MongoDB.Driver.MongoCollectionImpl`1.CreateFindOperation[TProjection](FilterDefinition`1 filter, FindOptions`2 options)\r\n   at MongoDB.Driver.MongoCollectionImpl`1.FindSync[TProjection](IClientSessionHandle session, FilterDefinition`1 filter, FindOptions`2 options, CancellationToken cancellationToken)\r\n   at MongoDB.Driver.MongoCollectionImpl`1.<>c__DisplayClass41_0`1.<FindSync>b__0(IClientSessionHandle session)\r\n   at MongoDB.Driver.MongoCollectionImpl`1.UsingImplicitSession[TResult](Func`2 func, CancellationToken cancellationToken)\r\n   at MongoDB.Driver.MongoCollectionImpl`1.FindSync[TProjection](FilterDefinition`1 filter, FindOptions`2 options, CancellationToken cancellationToken)\r\n   at MongoDB.Driver.FindFluent`2.ToCursor(CancellationToken cancellationToken)\r\n   at MongoDB.Driver.IAsyncCursorSourceExtensions.FirstOrDefault[TDocument](IAsyncCursorSource`1 source, CancellationToken cancellationToken)\r\n   at MongoDB.Driver.IFindFluentExtensions.FirstOrDefault[TDocument,TProjection](IFindFluent`2 find, CancellationToken cancellationToken)\r\n   at TraderZ.Catalog.Controllers.ProductsController.Get(String id) in W:\\Projects\\TraderZ\\src\\Services\\Catalog\\Catalog.API\\Controllers\\ProductsController.cs:line 84\r\n   at lambda_method(Closure , Object , Object[] )\r\n   at Microsoft.Extensions.Internal.ObjectMethodExecutor.Execute(Object target, Object[] parameters)\r\n   at Microsoft.AspNetCore.Mvc.Internal.ActionMethodExecutor.SyncObjectResultExecutor.Execute(IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)\r\n   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.InvokeActionMethodAsync()\r\n   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.InvokeNextActionFilterAsync()\r\n   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Rethrow(ActionExecutedContext context)\r\n   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)\r\n   at Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.InvokeInnerFilterAsync()\r\n   at Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.InvokeNextExceptionFilterAsync()",
        RemoteStackTraceString: null,
        RemoteStackIndex: 0,
        ExceptionMethod: null,
        HResult: -2146233033,
        Source: "MongoDB.Bson",
        WatsonBuckets: null
      }
    });
  } else {
    res.send([
      {
        name: "Laptops and accessories.",
        categoryId: req.params.catId,
        id: 2,
        createdOn: "2019-10-23T06:10:18.4438855",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.4438933",
        rowVersion: "AAAAAAAADNk="
      },
      {
        name: "Steel Plates & Sheets",
        categoryId: req.params.catId,
        id: 3,
        createdOn: "2019-10-23T06:10:18.4438985",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.4439036",
        rowVersion: "AAAAAAAADNo="
      },
      {
        name: "Veneer & Laminates",
        categoryId: req.params.catId,
        id: 1,
        createdOn: "2019-10-23T06:10:18.4428914",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.4437386",
        rowVersion: "AAAAAAAADNg="
      }
    ]);
  }
});

app.get("/categories/:catId/subCategories/:Id/producttypes", (req, res) => {
  console.log(req.params.Id);
  if (req.params.Id == 3) {
    res.status(503).send([
      {
        name: "Brick Making Machines",
        categoryId: 1,
        subCategoryId: 2,
        id: 3,
        createdOn: "2019-10-23T06:10:18.5880643",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.5880789",
        rowVersion: "AAAAAAAADQI="
      },
      {
        name: "Drum Mixers",
        categoryId: 1,
        subCategoryId: 2,
        id: 4,
        createdOn: "2019-10-23T06:10:18.5880852",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.5880901",
        rowVersion: "AAAAAAAADQE="
      }
    ]);
  } else {
    res.send([
      {
        name: "Tractor Engines",
        categoryId: 1,
        subCategoryId: 2,
        id: 3,
        createdOn: "2019-10-23T06:10:18.5880643",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.5880789",
        rowVersion: "AAAAAAAADQI="
      },
      {
        name: "Turmeric finger",
        categoryId: 1,
        subCategoryId: 2,
        id: 4,
        createdOn: "2019-10-23T06:10:18.5880852",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:18.5880901",
        rowVersion: "AAAAAAAADQE="
      }
    ]);
  }
});

//Presests

app.get("/categories", function(req, res) {
  res.status(200).send([
    {
      id: 1242,
      name: "Tea"
    },
    {
      id: 2454,
      name: "Tractor Engines"
    }
  ]);
});

app.get("/countries", function(req, res) {
  res.status(200).send([
    {
      name: "India",
      callingCode: "91",
      alpha2Code: "IN",
      alpha3code: "IND",
      id: 97,
      createdOn: "2019-10-23T06:10:17.0752187",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0752238",
      rowVersion: "AAAAAAAACIs="
    },
    {
      name: "United Kingdom",
      callingCode: "44",
      alpha2Code: "GB",
      alpha3code: "GBR",
      id: 226,
      createdOn: "2019-10-23T06:10:17.076638",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0766429",
      rowVersion: "AAAAAAAACCk="
    },
    {
      name: "United States",
      callingCode: "1",
      alpha2Code: "US",
      alpha3code: "USA",
      id: 229,
      createdOn: "2019-10-23T06:10:17.0766969",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0767042",
      rowVersion: "AAAAAAAACB8="
    },
    {
      name: "Afghanistan",
      callingCode: "97",
      alpha2Code: "AF",
      alpha3code: "AFG",
      id: 1,
      createdOn: "2019-10-23T06:10:17.069039",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0738197",
      rowVersion: "AAAAAAAAB9E="
    },
    {
      name: "Albania",
      callingCode: "355",
      alpha2Code: "AL",
      alpha3code: "ALB",
      id: 2,
      createdOn: "2019-10-23T06:10:17.0741076",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741199",
      rowVersion: "AAAAAAAACGk="
    },
    {
      name: "Algeria",
      callingCode: "213",
      alpha2Code: "DZ",
      alpha3code: "DZA",
      id: 3,
      createdOn: "2019-10-23T06:10:17.074127",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741326",
      rowVersion: "AAAAAAAACGo="
    },
    {
      name: "American Samoa",
      callingCode: "1-684",
      alpha2Code: "AS",
      alpha3code: "ASM",
      id: 4,
      createdOn: "2019-10-23T06:10:17.0741379",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074143",
      rowVersion: "AAAAAAAACGs="
    },
    {
      name: "Andorra",
      callingCode: "376",
      alpha2Code: "AD",
      alpha3code: "AND",
      id: 5,
      createdOn: "2019-10-23T06:10:17.0741537",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741595",
      rowVersion: "AAAAAAAACGw="
    },
    {
      name: "Angola",
      callingCode: "244",
      alpha2Code: "AO",
      alpha3code: "AGO",
      id: 6,
      createdOn: "2019-10-23T06:10:17.0741649",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07417",
      rowVersion: "AAAAAAAACG0="
    },
    {
      name: "Anguilla",
      callingCode: "1-264",
      alpha2Code: "AI",
      alpha3code: "AIA",
      id: 7,
      createdOn: "2019-10-23T06:10:17.0741751",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741802",
      rowVersion: "AAAAAAAACG4="
    },
    {
      name: "Antarctica",
      callingCode: "672",
      alpha2Code: "AQ",
      alpha3code: "ATA",
      id: 8,
      createdOn: "2019-10-23T06:10:17.0741854",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0741906",
      rowVersion: "AAAAAAAACG8="
    },
    {
      name: "Antigua and Barbuda",
      callingCode: "1-268",
      alpha2Code: "AG",
      alpha3code: "ATG",
      id: 9,
      createdOn: "2019-10-23T06:10:17.0741957",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742007",
      rowVersion: "AAAAAAAACHA="
    },
    {
      name: "Argentina",
      callingCode: "54",
      alpha2Code: "AR",
      alpha3code: "ARG",
      id: 10,
      createdOn: "2019-10-23T06:10:17.0742059",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074211",
      rowVersion: "AAAAAAAACHE="
    },
    {
      name: "Armenia",
      callingCode: "374",
      alpha2Code: "AM",
      alpha3code: "ARM",
      id: 11,
      createdOn: "2019-10-23T06:10:17.074219",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742245",
      rowVersion: "AAAAAAAACHI="
    },
    {
      name: "Aruba",
      callingCode: "297",
      alpha2Code: "AW",
      alpha3code: "ABW",
      id: 12,
      createdOn: "2019-10-23T06:10:17.0742297",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742349",
      rowVersion: "AAAAAAAACHM="
    },
    {
      name: "Australia",
      callingCode: "61",
      alpha2Code: "AU",
      alpha3code: "AUS",
      id: 13,
      createdOn: "2019-10-23T06:10:17.07424",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742451",
      rowVersion: "AAAAAAAACHQ="
    },
    {
      name: "Austria",
      callingCode: "43",
      alpha2Code: "AT",
      alpha3code: "AUT",
      id: 14,
      createdOn: "2019-10-23T06:10:17.0742502",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742552",
      rowVersion: "AAAAAAAACHY="
    },
    {
      name: "Azerbaijan",
      callingCode: "994",
      alpha2Code: "AZ",
      alpha3code: "AZE",
      id: 15,
      createdOn: "2019-10-23T06:10:17.0742602",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742653",
      rowVersion: "AAAAAAAACIM="
    },
    {
      name: "Bahamas",
      callingCode: "1-242",
      alpha2Code: "BS",
      alpha3code: "BHS",
      id: 16,
      createdOn: "2019-10-23T06:10:17.0742704",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742755",
      rowVersion: "AAAAAAAACHc="
    },
    {
      name: "Bahrain",
      callingCode: "973",
      alpha2Code: "BH",
      alpha3code: "BHR",
      id: 17,
      createdOn: "2019-10-23T06:10:17.0742806",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0742929",
      rowVersion: "AAAAAAAACHg="
    },
    {
      name: "Bangladesh",
      callingCode: "880",
      alpha2Code: "BD",
      alpha3code: "BGD",
      id: 18,
      createdOn: "2019-10-23T06:10:17.0742989",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074304",
      rowVersion: "AAAAAAAACHk="
    },
    {
      name: "Barbados",
      callingCode: "1-246",
      alpha2Code: "BB",
      alpha3code: "BRB",
      id: 19,
      createdOn: "2019-10-23T06:10:17.0743091",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743143",
      rowVersion: "AAAAAAAACHo="
    },
    {
      name: "Belarus",
      callingCode: "375",
      alpha2Code: "BY",
      alpha3code: "BLR",
      id: 20,
      createdOn: "2019-10-23T06:10:17.0743195",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743246",
      rowVersion: "AAAAAAAACHs="
    },
    {
      name: "Belgium",
      callingCode: "32",
      alpha2Code: "BE",
      alpha3code: "BEL",
      id: 21,
      createdOn: "2019-10-23T06:10:17.0743297",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743347",
      rowVersion: "AAAAAAAACHw="
    },
    {
      name: "Belize",
      callingCode: "501",
      alpha2Code: "BZ",
      alpha3code: "BLZ",
      id: 22,
      createdOn: "2019-10-23T06:10:17.0743398",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074345",
      rowVersion: "AAAAAAAACH0="
    },
    {
      name: "Benin",
      callingCode: "229",
      alpha2Code: "BJ",
      alpha3code: "BEN",
      id: 23,
      createdOn: "2019-10-23T06:10:17.0743501",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743588",
      rowVersion: "AAAAAAAACH4="
    },
    {
      name: "Bermuda",
      callingCode: "1-441",
      alpha2Code: "BM",
      alpha3code: "BMU",
      id: 24,
      createdOn: "2019-10-23T06:10:17.0743646",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743698",
      rowVersion: "AAAAAAAACH8="
    },
    {
      name: "Bhutan",
      callingCode: "975",
      alpha2Code: "BT",
      alpha3code: "BTN",
      id: 25,
      createdOn: "2019-10-23T06:10:17.074375",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743801",
      rowVersion: "AAAAAAAACIA="
    },
    {
      name: "Bolivia",
      callingCode: "591",
      alpha2Code: "BO",
      alpha3code: "BOL",
      id: 26,
      createdOn: "2019-10-23T06:10:17.0743852",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0743903",
      rowVersion: "AAAAAAAACIE="
    },
    {
      name: "Bosnia and Herzegovina",
      callingCode: "387",
      alpha2Code: "BA",
      alpha3code: "BIH",
      id: 27,
      createdOn: "2019-10-23T06:10:17.0743954",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744005",
      rowVersion: "AAAAAAAACII="
    },
    {
      name: "Botswana",
      callingCode: "267",
      alpha2Code: "BW",
      alpha3code: "BWA",
      id: 28,
      createdOn: "2019-10-23T06:10:17.0744055",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744106",
      rowVersion: "AAAAAAAACGg="
    },
    {
      name: "Brazil",
      callingCode: "55",
      alpha2Code: "BR",
      alpha3code: "BRA",
      id: 29,
      createdOn: "2019-10-23T06:10:17.0744157",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744282",
      rowVersion: "AAAAAAAACHU="
    },
    {
      name: "British Indian Ocean Territory",
      callingCode: "246",
      alpha2Code: "IO",
      alpha3code: "IOT",
      id: 30,
      createdOn: "2019-10-23T06:10:17.0744347",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744398",
      rowVersion: "AAAAAAAACGc="
    },
    {
      name: "British Virgin Islands",
      callingCode: "1-284",
      alpha2Code: "VG",
      alpha3code: "VGB",
      id: 31,
      createdOn: "2019-10-23T06:10:17.0744449",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07445",
      rowVersion: "AAAAAAAACFc="
    },
    {
      name: "Brunei",
      callingCode: "673",
      alpha2Code: "BN",
      alpha3code: "BRN",
      id: 32,
      createdOn: "2019-10-23T06:10:17.0744551",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744603",
      rowVersion: "AAAAAAAACEs="
    },
    {
      name: "Bulgaria",
      callingCode: "359",
      alpha2Code: "BG",
      alpha3code: "BGR",
      id: 33,
      createdOn: "2019-10-23T06:10:17.0744654",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744705",
      rowVersion: "AAAAAAAACEw="
    },
    {
      name: "Burkina Faso",
      callingCode: "226",
      alpha2Code: "BF",
      alpha3code: "BFA",
      id: 34,
      createdOn: "2019-10-23T06:10:17.0744757",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0744807",
      rowVersion: "AAAAAAAACE0="
    },
    {
      name: "Burundi",
      callingCode: "257",
      alpha2Code: "BI",
      alpha3code: "BDI",
      id: 36,
      createdOn: "2019-10-23T06:10:17.0744987",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745041",
      rowVersion: "AAAAAAAACE8="
    },
    {
      name: "Cambodia",
      callingCode: "855",
      alpha2Code: "KH",
      alpha3code: "KHM",
      id: 37,
      createdOn: "2019-10-23T06:10:17.0745094",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745145",
      rowVersion: "AAAAAAAACFA="
    },
    {
      name: "Cameroon",
      callingCode: "237",
      alpha2Code: "CM",
      alpha3code: "CMR",
      id: 38,
      createdOn: "2019-10-23T06:10:17.0745197",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745249",
      rowVersion: "AAAAAAAACFE="
    },
    {
      name: "Canada",
      callingCode: "1",
      alpha2Code: "CA",
      alpha3code: "CAN",
      id: 39,
      createdOn: "2019-10-23T06:10:17.0745304",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745355",
      rowVersion: "AAAAAAAACFI="
    },
    {
      name: "Cape Verde",
      callingCode: "238",
      alpha2Code: "CV",
      alpha3code: "CPV",
      id: 40,
      createdOn: "2019-10-23T06:10:17.0745407",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745461",
      rowVersion: "AAAAAAAACFM="
    },
    {
      name: "Cayman Islands",
      callingCode: "1-345",
      alpha2Code: "KY",
      alpha3code: "CYM",
      id: 41,
      createdOn: "2019-10-23T06:10:17.0745512",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745565",
      rowVersion: "AAAAAAAACFQ="
    },
    {
      name: "Central African Republic",
      callingCode: "236",
      alpha2Code: "CF",
      alpha3code: "CAF",
      id: 42,
      createdOn: "2019-10-23T06:10:17.0745645",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07457",
      rowVersion: "AAAAAAAACFU="
    },
    {
      name: "Chad",
      callingCode: "235",
      alpha2Code: "TD",
      alpha3code: "TCD",
      id: 43,
      createdOn: "2019-10-23T06:10:17.0745752",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745803",
      rowVersion: "AAAAAAAACFY="
    },
    {
      name: "Chile",
      callingCode: "56",
      alpha2Code: "CL",
      alpha3code: "CHL",
      id: 44,
      createdOn: "2019-10-23T06:10:17.0745855",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0745906",
      rowVersion: "AAAAAAAACFg="
    },
    {
      name: "China",
      callingCode: "86",
      alpha2Code: "CN",
      alpha3code: "CHN",
      id: 45,
      createdOn: "2019-10-23T06:10:17.0745957",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746008",
      rowVersion: "AAAAAAAACGU="
    },
    {
      name: "Christmas Island",
      callingCode: "61",
      alpha2Code: "CX",
      alpha3code: "CXR",
      id: 46,
      createdOn: "2019-10-23T06:10:17.0746059",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074611",
      rowVersion: "AAAAAAAACFk="
    },
    {
      name: "Cocos Islands",
      callingCode: "61",
      alpha2Code: "CC",
      alpha3code: "CCK",
      id: 47,
      createdOn: "2019-10-23T06:10:17.0746163",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746214",
      rowVersion: "AAAAAAAACFo="
    },
    {
      name: "Colombia",
      callingCode: "57",
      alpha2Code: "CO",
      alpha3code: "COL",
      id: 48,
      createdOn: "2019-10-23T06:10:17.0746264",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746344",
      rowVersion: "AAAAAAAACFs="
    },
    {
      name: "Comoros",
      callingCode: "269",
      alpha2Code: "KM",
      alpha3code: "COM",
      id: 49,
      createdOn: "2019-10-23T06:10:17.0746399",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746471",
      rowVersion: "AAAAAAAACFw="
    },
    {
      name: "Cook Islands",
      callingCode: "682",
      alpha2Code: "CK",
      alpha3code: "COK",
      id: 52,
      createdOn: "2019-10-23T06:10:17.0747007",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747087",
      rowVersion: "AAAAAAAACF8="
    },
    {
      name: "Costa Rica",
      callingCode: "506",
      alpha2Code: "CR",
      alpha3code: "CRI",
      id: 53,
      createdOn: "2019-10-23T06:10:17.0747142",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747194",
      rowVersion: "AAAAAAAACGA="
    },
    {
      name: "Croatia",
      callingCode: "385",
      alpha2Code: "HR",
      alpha3code: "HRV",
      id: 54,
      createdOn: "2019-10-23T06:10:17.0747245",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747341",
      rowVersion: "AAAAAAAACGE="
    },
    {
      name: "Cuba",
      callingCode: "53",
      alpha2Code: "CU",
      alpha3code: "CUB",
      id: 55,
      createdOn: "2019-10-23T06:10:17.0747402",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747453",
      rowVersion: "AAAAAAAACGI="
    },
    {
      name: "Curacao",
      callingCode: "599",
      alpha2Code: "CW",
      alpha3code: "CUW",
      id: 56,
      createdOn: "2019-10-23T06:10:17.0747504",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747554",
      rowVersion: "AAAAAAAACGM="
    },
    {
      name: "Cyprus",
      callingCode: "357",
      alpha2Code: "CY",
      alpha3code: "CYP",
      id: 57,
      createdOn: "2019-10-23T06:10:17.0747606",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747657",
      rowVersion: "AAAAAAAACGQ="
    },
    {
      name: "Czech Republic",
      callingCode: "420",
      alpha2Code: "CZ",
      alpha3code: "CZE",
      id: 58,
      createdOn: "2019-10-23T06:10:17.0747708",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747759",
      rowVersion: "AAAAAAAACGY="
    },
    {
      name: "Democratic Republic of the Congo",
      callingCode: "243",
      alpha2Code: "CD",
      alpha3code: "COD",
      id: 51,
      createdOn: "2019-10-23T06:10:17.0746627",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0746677",
      rowVersion: "AAAAAAAACF4="
    },
    {
      name: "Denmark",
      callingCode: "45",
      alpha2Code: "DK",
      alpha3code: "DNK",
      id: 59,
      createdOn: "2019-10-23T06:10:17.074781",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747859",
      rowVersion: "AAAAAAAACIQ="
    },
    {
      name: "Djibouti",
      callingCode: "253",
      alpha2Code: "DJ",
      alpha3code: "DJI",
      id: 60,
      createdOn: "2019-10-23T06:10:17.074791",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0747988",
      rowVersion: "AAAAAAAACIU="
    },
    {
      name: "Dominica",
      callingCode: "1-767",
      alpha2Code: "DM",
      alpha3code: "DMA",
      id: 61,
      createdOn: "2019-10-23T06:10:17.0748047",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748097",
      rowVersion: "AAAAAAAACIY="
    },
    {
      name: "Dominican Republic",
      callingCode: "1-809",
      alpha2Code: "DO",
      alpha3code: "DOM",
      id: 62,
      createdOn: "2019-10-23T06:10:17.0748148",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748198",
      rowVersion: "AAAAAAAACKU="
    },
    {
      name: "East Timor",
      callingCode: "670",
      alpha2Code: "TL",
      alpha3code: "TLS",
      id: 63,
      createdOn: "2019-10-23T06:10:17.074825",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748299",
      rowVersion: "AAAAAAAACKY="
    },
    {
      name: "Ecuador",
      callingCode: "593",
      alpha2Code: "EC",
      alpha3code: "ECU",
      id: 64,
      createdOn: "2019-10-23T06:10:17.0748351",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748401",
      rowVersion: "AAAAAAAACKc="
    },
    {
      name: "Egypt",
      callingCode: "20",
      alpha2Code: "EG",
      alpha3code: "EGY",
      id: 65,
      createdOn: "2019-10-23T06:10:17.0748451",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.07485",
      rowVersion: "AAAAAAAACKg="
    },
    {
      name: "El Salvador",
      callingCode: "503",
      alpha2Code: "SV",
      alpha3code: "SLV",
      id: 66,
      createdOn: "2019-10-23T06:10:17.0748552",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748602",
      rowVersion: "AAAAAAAACKk="
    },
    {
      name: "Equatorial Guinea",
      callingCode: "240",
      alpha2Code: "GQ",
      alpha3code: "GNQ",
      id: 67,
      createdOn: "2019-10-23T06:10:17.0748682",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0748735",
      rowVersion: "AAAAAAAACKo="
    },
    {
      name: "Eritrea",
      callingCode: "291",
      alpha2Code: "ER",
      alpha3code: "ERI",
      id: 68,
      createdOn: "2019-10-23T06:10:17.0748942",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074904",
      rowVersion: "AAAAAAAACKs="
    },
    {
      name: "Estonia",
      callingCode: "372",
      alpha2Code: "EE",
      alpha3code: "EST",
      id: 69,
      createdOn: "2019-10-23T06:10:17.0749099",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749151",
      rowVersion: "AAAAAAAACKw="
    },
    {
      name: "Ethiopia",
      callingCode: "251",
      alpha2Code: "ET",
      alpha3code: "ETH",
      id: 70,
      createdOn: "2019-10-23T06:10:17.0749203",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749254",
      rowVersion: "AAAAAAAACK0="
    },
    {
      name: "Falkland Islands",
      callingCode: "500",
      alpha2Code: "FK",
      alpha3code: "FLK",
      id: 71,
      createdOn: "2019-10-23T06:10:17.0749306",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749357",
      rowVersion: "AAAAAAAACK4="
    },
    {
      name: "Faroe Islands",
      callingCode: "298",
      alpha2Code: "FO",
      alpha3code: "FRO",
      id: 72,
      createdOn: "2019-10-23T06:10:17.0749408",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749458",
      rowVersion: "AAAAAAAACK8="
    },
    {
      name: "Fiji",
      callingCode: "679",
      alpha2Code: "FJ",
      alpha3code: "FJI",
      id: 73,
      createdOn: "2019-10-23T06:10:17.0749562",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.074962",
      rowVersion: "AAAAAAAACLA="
    },
    {
      name: "Finland",
      callingCode: "358",
      alpha2Code: "FI",
      alpha3code: "FIN",
      id: 74,
      createdOn: "2019-10-23T06:10:17.0749673",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749724",
      rowVersion: "AAAAAAAACLE="
    },
    {
      name: "France",
      callingCode: "33",
      alpha2Code: "FR",
      alpha3code: "FRA",
      id: 75,
      createdOn: "2019-10-23T06:10:17.0749777",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749827",
      rowVersion: "AAAAAAAACLI="
    },
    {
      name: "French Polynesia",
      callingCode: "689",
      alpha2Code: "PF",
      alpha3code: "PYF",
      id: 76,
      createdOn: "2019-10-23T06:10:17.074988",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0749931",
      rowVersion: "AAAAAAAACLM="
    },
    {
      name: "Gabon",
      callingCode: "241",
      alpha2Code: "GA",
      alpha3code: "GAB",
      id: 77,
      createdOn: "2019-10-23T06:10:17.0749983",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750033",
      rowVersion: "AAAAAAAACLQ="
    },
    {
      name: "Gambia",
      callingCode: "220",
      alpha2Code: "GM",
      alpha3code: "GMB",
      id: 78,
      createdOn: "2019-10-23T06:10:17.0750086",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750138",
      rowVersion: "AAAAAAAACLU="
    },
    {
      name: "Georgia",
      callingCode: "995",
      alpha2Code: "GE",
      alpha3code: "GEO",
      id: 79,
      createdOn: "2019-10-23T06:10:17.075019",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750301",
      rowVersion: "AAAAAAAACLY="
    },
    {
      name: "Germany",
      callingCode: "49",
      alpha2Code: "DE",
      alpha3code: "DEU",
      id: 80,
      createdOn: "2019-10-23T06:10:17.0750363",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750415",
      rowVersion: "AAAAAAAACLc="
    },
    {
      name: "Ghana",
      callingCode: "233",
      alpha2Code: "GH",
      alpha3code: "GHA",
      id: 81,
      createdOn: "2019-10-23T06:10:17.0750467",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750518",
      rowVersion: "AAAAAAAACLg="
    },
    {
      name: "Gibraltar",
      callingCode: "350",
      alpha2Code: "GI",
      alpha3code: "GIB",
      id: 82,
      createdOn: "2019-10-23T06:10:17.0750569",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.075062",
      rowVersion: "AAAAAAAACLk="
    },
    {
      name: "Greece",
      callingCode: "30",
      alpha2Code: "GR",
      alpha3code: "GRC",
      id: 83,
      createdOn: "2019-10-23T06:10:17.0750672",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750722",
      rowVersion: "AAAAAAAACLo="
    },
    {
      name: "Greenland",
      callingCode: "299",
      alpha2Code: "GL",
      alpha3code: "GRL",
      id: 84,
      createdOn: "2019-10-23T06:10:17.0750774",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750825",
      rowVersion: "AAAAAAAACLs="
    },
    {
      name: "Grenada",
      callingCode: "1-473",
      alpha2Code: "GD",
      alpha3code: "GRD",
      id: 85,
      createdOn: "2019-10-23T06:10:17.0750877",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0750958",
      rowVersion: "AAAAAAAACLw="
    },
    {
      name: "Guam",
      callingCode: "1-671",
      alpha2Code: "GU",
      alpha3code: "GUM",
      id: 86,
      createdOn: "2019-10-23T06:10:17.0751016",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751067",
      rowVersion: "AAAAAAAACL0="
    },
    {
      name: "Guatemala",
      callingCode: "502",
      alpha2Code: "GT",
      alpha3code: "GTM",
      id: 87,
      createdOn: "2019-10-23T06:10:17.0751119",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.075117",
      rowVersion: "AAAAAAAACL4="
    },
    {
      name: "Guernsey",
      callingCode: "44-1481",
      alpha2Code: "GG",
      alpha3code: "GGY",
      id: 88,
      createdOn: "2019-10-23T06:10:17.0751222",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751274",
      rowVersion: "AAAAAAAACL8="
    },
    {
      name: "Guinea",
      callingCode: "224",
      alpha2Code: "GN",
      alpha3code: "GIN",
      id: 89,
      createdOn: "2019-10-23T06:10:17.0751325",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751377",
      rowVersion: "AAAAAAAACKQ="
    },
    {
      name: "Guinea-Bissau",
      callingCode: "245",
      alpha2Code: "GW",
      alpha3code: "GNB",
      id: 90,
      createdOn: "2019-10-23T06:10:17.075143",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751481",
      rowVersion: "AAAAAAAACKM="
    },
    {
      name: "Guyana",
      callingCode: "592",
      alpha2Code: "GY",
      alpha3code: "GUY",
      id: 91,
      createdOn: "2019-10-23T06:10:17.0751533",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751584",
      rowVersion: "AAAAAAAACKI="
    },
    {
      name: "Haiti",
      callingCode: "509",
      alpha2Code: "HT",
      alpha3code: "HTI",
      id: 92,
      createdOn: "2019-10-23T06:10:17.0751667",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751719",
      rowVersion: "AAAAAAAACJM="
    },
    {
      name: "Honduras",
      callingCode: "504",
      alpha2Code: "HN",
      alpha3code: "HND",
      id: 93,
      createdOn: "2019-10-23T06:10:17.0751772",
      deletedOn: null,
      lastModifiedOn: "2019-10-23T06:10:17.0751823",
      rowVersion: "AAAAAAAACIc="
    }
  ]);
});

app.get("/countries/:id/states", function(req, res) {
  console.log(req.params.id);
  if (req.params.id == 97) {
    res.status(200).send([
      {
        name: "Andaman and Nicobar Islands",
        countryId: 97,
        id: 1,
        createdOn: "2019-10-23T06:10:17.4060142",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4072313",
        rowVersion: "AAAAAAAACMI="
      },
      {
        name: "Andhra Pradesh",
        countryId: 99,
        id: 2,
        createdOn: "2019-10-23T06:10:17.4074077",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074171",
        rowVersion: "AAAAAAAACNY="
      },
      {
        name: "Arunachal Pradesh",
        countryId: 97,
        id: 3,
        createdOn: "2019-10-23T06:10:17.4074228",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074278",
        rowVersion: "AAAAAAAACNc="
      },
      {
        name: "Assam",
        countryId: 97,
        id: 4,
        createdOn: "2019-10-23T06:10:17.4074328",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074376",
        rowVersion: "AAAAAAAACNg="
      },
      {
        name: "Bihar",
        countryId: 97,
        id: 5,
        createdOn: "2019-10-23T06:10:17.4074425",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074473",
        rowVersion: "AAAAAAAACNk="
      },
      {
        name: "Chandigarh",
        countryId: 97,
        id: 6,
        createdOn: "2019-10-23T06:10:17.4074522",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074571",
        rowVersion: "AAAAAAAACNo="
      },
      {
        name: "Chhattisgarh",
        countryId: 97,
        id: 7,
        createdOn: "2019-10-23T06:10:17.4074619",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074667",
        rowVersion: "AAAAAAAACNs="
      },
      {
        name: "Dadra and Nagar Haveli",
        countryId: 97,
        id: 8,
        createdOn: "2019-10-23T06:10:17.4074714",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074762",
        rowVersion: "AAAAAAAACNw="
      },
      {
        name: "Daman and Diu",
        countryId: 97,
        id: 9,
        createdOn: "2019-10-23T06:10:17.4074842",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074896",
        rowVersion: "AAAAAAAACN0="
      },
      {
        name: "Delhi",
        countryId: 97,
        id: 10,
        createdOn: "2019-10-23T06:10:17.4074947",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4074995",
        rowVersion: "AAAAAAAACN4="
      },
      {
        name: "Goa",
        countryId: 97,
        id: 11,
        createdOn: "2019-10-23T06:10:17.4075044",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075091",
        rowVersion: "AAAAAAAACN8="
      },
      {
        name: "Gujarat",
        countryId: 97,
        id: 12,
        createdOn: "2019-10-23T06:10:17.407514",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075188",
        rowVersion: "AAAAAAAACOA="
      },
      {
        name: "Haryana",
        countryId: 97,
        id: 13,
        createdOn: "2019-10-23T06:10:17.4075237",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075286",
        rowVersion: "AAAAAAAACOE="
      },
      {
        name: "Himachal Pradesh",
        countryId: 97,
        id: 14,
        createdOn: "2019-10-23T06:10:17.4075334",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075381",
        rowVersion: "AAAAAAAACOI="
      },
      {
        name: "Jammu and Kashmir",
        countryId: 97,
        id: 15,
        createdOn: "2019-10-23T06:10:17.407543",
        deletedOn: null,
        lastModifiedOn: "2019-10-23T06:10:17.4075477",
        rowVersion: "AAAAAAAACOM="
      }
    ]);
  } else {
    res.status(200).send([]);
  }
});

app.get("/countries/:id/states/:sId/cities", function(req, res) {
  console.log("Params", req.params.sId, req.params.id);

  res.status(200).send([
    {
      id: 19,
      name: "Mumbai"
    },
    {
      id: 29,
      name: "New Delhi"
    }
  ]);
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
