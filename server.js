var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var homeData = require("./data/home");
var productDetails = require("./data/productDetails");
var sellerCatalogDetails = require("./data/sellerCatalogDeatils");
var categories = require("./data/categories");
var subCatByProdId = require("./data/subCatByProdId");
var getSellerProducts = require("./data/getSellerProducts");
var getSellerProduct = require("./data/getSellerProduct");
var getBuyerProducts = require("./data/getProducts");
var getBuyerProductsByPT = require("./data/getProductsByPT");
const searchSellers = require("./data/searchSellers");
const { getSellerProfile } = require("./data/seller/");
const {
  getSponsoredProducts,
  getSimilarProducts
} = require("./data/product/index");

const { getCountries } = require("./data/presets/index");

const jwt = require("jsonwebtoken");

const searchProducts = require("./data/searchProducts");

const mockUser = {
  company_id: 1424151,
  access_token: "adgswdjvjsdsjhgvjxsxj"
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  setTimeout(() => next(), 0);
});

app.delete("/seller/products/:id", (req, res) => {
  console.log("/seller./products/:id", req.params.id);
  console.log(JSON.stringify(req.headers));

  res.status(200).send({});
});

app.get("/category/:cId/subCategory/:sId/products", function(req, res) {
  console.log("getBuyerProducts", req.params.sId, req.params.cId);
  res.status(200).send(getBuyerProducts());
});

app.get("/category/:cId/subCategory/:sId/productType/:pTId/products", function(
  req,
  res
) {
  console.log(
    "getBuyerProducts",
    req.params.sId,
    req.params.cId,
    req.params.pTId
  );
  res.status(200).send(getBuyerProductsByPT());
});

app.get("/buyer/search/suggestions", (req, res) => {
  console.log("type", req.query.type, "text", req.query.text);

  res.send([req.query.text, "Astr", "West", "North", "South"]);
});

app.get("/buyer/search/sellers", function(req, res) {
  console.log("SSellers", req.query.name);
  if (req.query.name === "Astr") {
    res.status(200).send(searchSellers());
  } else if (req.query.name === "error") {
    res.status(500).send();
  } else {
    res.status(200).send({ items: [] });
  }
});

app.get("/buyer/search/products", (req, res) => {
  console.log("SProducts", req.query.name);
  if (req.query.name === "Building") {
    res.status(200).send(searchProducts());
  } else if (req.query.name === "error") {
    res.status(404).send();
  } else {
    res.status(200).send({ page: 0, items: [] });
  }
});

app.get("/buyer/home", function(req, res) {
  console.log("Home");
  res.status(200).send(homeData());
});

app.post("/buyer/products/:id/quote", (req, res) => {
  console.log("Req quote with -", req.body, req.params.id);
  console.log(JSON.stringify(req.headers));
  let { subject, message } = req.body;
  if (subject && message) {
    console.log(req);
    setTimeout(() => {
      res.status(200).send({ Messages: ["Not found"] });
    }, 2000);
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
  console.log(JSON.stringify(req.headers));

  setTimeout(() => {
    res.status(400).send({
      subject: "10000kgs of raw steel",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  }, 3000);
});

app.get("/buyer/products/:id", function(req, res) {
  let pD = productDetails();
  res.status(200).send(pD);
});

app.get("/buyer/seller/:id", function(req, res) {
  console.log(req.params);
  // jwt.sign({ user: mockUser }, "key", (er, token) => {
  if (req.params.id) {
    res.status(200).send(getSellerProfile());
  } else {
    res.status(500).send(getSellerProfile());
  }

  // });
});

app.get("/buyer/seller/:id/catalog", function(req, res) {
  console.log("Catalog api called ", req.params);
  let cD = sellerCatalogDetails();
  setTimeout(() => {
    res.status(200).send(cD);
  }, 3000);
});

app.get("/buyer/products/:id/sponsored", (req, res) => {
  console.log("SPonsoredP", req.params.id);
  if (req.params.id) {
    res.status(200).send(getSponsoredProducts());
  } else {
    res.status(500).send(getSponsoredProducts());
  }
});

app.get("/buyer/categories", (req, res) => {
  console.log("Categories");
  let cat = categories();
  res.status(200).send(cat);
});

app.put("/seller/products/:id", (req, res) => {
  console.log("SP Put request -", req.params.id, req.headers);
  res.status(200).send({ sellerProducts: "Added", id: 222555888 });
});

app.get("/seller/products", (req, res) => {
  console.log("seller/products");
  let sellerProducts = getSellerProducts();
  res.status(200).send(sellerProducts);
});

app.post("/seller/products", (req, res) => {
  console.log(req.body);
  // let sellerProducts = getSellerProducts();
  res.status(400).send({ status: "yup", id: "1254" });
});

app.post("/seller/products/:id/images", (req, res) => {
  console.log("Upload Image", req.body);
  // let sellerProducts = getSellerProducts();
  res.status(200).send({ status: "yup" });
});

app.get("/seller/products/:id", (req, res) => {
  console.log("seller/products/id:", req.params.id, req.headers);
  let sellerProduct = getSellerProduct();
  res.status(200).send(sellerProduct);
});

app.get("/categories/:id", (req, res) => {
  console.log("Categories by Id", req.params.id);
  res.status(200).send({
    id: 1,
    name: "Building & Construction",
    icon: "fas fa-building",
    imageUrl:
      "https://careers.carlisleconstructionmaterials.com/wp-content/uploads/home-hero-2000x1489.jpg"
  });
});

app.get("/categories/:id/subCategories", (req, res) => {
  console.log("subCategories by Category Id", req.params.id);

  let sbPid = subCatByProdId();
  if (req.params.id > 4) {
    res.status(500).send(sbPid);
  }
  res.status(200).send(sbPid);
});

app.get("/buyer/products/:id/similar", (req, res) => {
  console.log("SimilarP", req.params.id);
  if (req.params.id) {
    res.status(200).send(getSimilarProducts());
  } else {
    res.status(500).send({});
  }
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
    res.status(200).send([
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
    res.status(500).send([
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

app.get("/countries", function(req, res) {
  res.status(200).send(getCountries());
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

app.get("/", function(req, res) {
  res.send("Hello " + JSON.stringify(req.session));
});

app.listen(6001, () => {
  console.log("Server started at 6001");
});
