var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
require('dotenv').config();
var PrismaClient = require('@prisma/client').PrismaClient;
var faker = require('@faker-js/faker').faker;
var prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function createProductImages() {
            return __awaiter(this, void 0, void 0, function () {
                var productImages, productImageRecords, _loop_1, product_id, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            productImages = [
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600390/adidas_NMD_peka2n.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600390/Puma_Women_s_RS-X_Efekt_Lux_Grey_Pink_Sneaker_irm7k8.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600389/NIKEAir_Humara_chunky-sole_mesh_and_leather_low-top_trainers_rdbkm5.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600389/Air_Pegasus_2K5_Mesh_and_Leather_Sneakers_nxywkt.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600388/Converse_One_Star_Pro_Nubuck_Leather_Sneakers_Black_fkvvvi.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600388/CAMPUS_00S_SHOES_i0kf6x.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/21_meilleures_id%C3%A9es_Adidas_Campus_Rose_en_2024_1_i5ux9f.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/Vintage_y2k_sambas_qbxfpi.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/Converse_Weapon_Classic_Shoes_-_Black_White___Men_s_7_5___Women_s_9_eoblmc.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599631/adidas_NMD_whtand.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599570/Womens_White_Green_Nike_Zoom_Air_Fire_Trainers___schuh_1_xhobf7.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599534/Puma_Women_s_RS-X_Efekt_Lux_Grey_Pink_Sneaker_czr79s.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599509/Womens_White_Green_Nike_Zoom_Air_Fire_Trainers___schuh_1_f2vibs.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438013/Zapatilla_NMD_R1_V2_ewfgpt.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438013/Chaussure_Continental80_fjogv1.jpg',
                                'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438019/Air_Jordan_Kids_Spizike_Low_Obsidian_PS_-_3y_pqidkc.jpg'
                            ];
                            productImageRecords = [];
                            _loop_1 = function (product_id) {
                                var selectedImages = [];
                                for (var i = 0; i < 3; i++) {
                                    var randomIndex = Math.floor(Math.random() * productImages.length);
                                    selectedImages.push(productImages[randomIndex]);
                                }
                                var productImageRecord = selectedImages.map(function (image) { return ({
                                    product_id: product_id,
                                    image_url: image
                                }); });
                                productImageRecords.push.apply(productImageRecords, productImageRecord);
                            };
                            for (product_id = 1; product_id <= 16; product_id++) {
                                _loop_1(product_id);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, prisma.productImage.createMany({
                                    data: productImageRecords
                                })];
                        case 2:
                            _a.sent();
                            console.log('Product images created successfully');
                            return [3 /*break*/, 4];
                        case 3:
                            error_3 = _a.sent();
                            console.error('Error creating product images:', error_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        function createReviews() {
            return __awaiter(this, void 0, void 0, function () {
                var reviews, productId, i, userId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reviews = [];
                            for (productId = 1; productId <= 16; productId++) {
                                for (i = 0; i < 4; i++) {
                                    userId = Math.floor(Math.random() * 10) + 1;
                                    reviews.push({
                                        productId: productId,
                                        userId: userId,
                                        rating: Math.floor(Math.random() * 5) + 1,
                                        comment: faker.lorem.sentence(),
                                        createdAt: faker.date.past(),
                                    });
                                }
                            }
                            return [4 /*yield*/, prisma.review.createMany({
                                    data: reviews,
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var error_1, sizes, colors, stockData, productId, _i, sizes_1, size, _a, colors_1, color, error_2;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 43, 44, 46]);
                    // Xóa hết dữ liệu trong các bảng
                    return [4 /*yield*/, prisma.favorite.deleteMany()];
                case 1:
                    // Xóa hết dữ liệu trong các bảng
                    _b.sent();
                    return [4 /*yield*/, prisma.review.deleteMany()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, prisma.stock.deleteMany()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, prisma.invoice.deleteMany()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, prisma.orderItem.deleteMany()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, prisma.order.deleteMany()];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, prisma.address.deleteMany()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, prisma.product.deleteMany()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, prisma.category.deleteMany()];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, prisma.brand.deleteMany()];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, prisma.user.deleteMany()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, prisma.role.deleteMany()];
                case 12:
                    _b.sent();
                    // Thiết lập lại tuần tự (sequence) nếu bạn đang sử dụng PostgreSQL
                    // Ví dụ:
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Role_role_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Role_role_id_seq\" RESTART WITH 1"]))];
                case 13:
                    // Thiết lập lại tuần tự (sequence) nếu bạn đang sử dụng PostgreSQL
                    // Ví dụ:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"User_user_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"User_user_id_seq\" RESTART WITH 1"]))];
                case 14:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Address_address_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Address_address_id_seq\" RESTART WITH 1"]))];
                case 15:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Brand_brand_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Brand_brand_id_seq\" RESTART WITH 1"]))];
                case 16:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Category_category_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Category_category_id_seq\" RESTART WITH 1"]))];
                case 17:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Product_product_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Product_product_id_seq\" RESTART WITH 1"]))];
                case 18:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Stock_stock_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Stock_stock_id_seq\" RESTART WITH 1"]))];
                case 19:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Order_order_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Order_order_id_seq\" RESTART WITH 1"]))];
                case 20:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"OrderItem_orderItem_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"OrderItem_orderItem_id_seq\" RESTART WITH 1"]))];
                case 21:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Review_review_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Review_review_id_seq\" RESTART WITH 1"]))];
                case 22:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Favorite_favorite_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Favorite_favorite_id_seq\" RESTART WITH 1"]))];
                case 23:
                    _b.sent();
                    return [4 /*yield*/, prisma.$executeRaw(__makeTemplateObject(["ALTER SEQUENCE \"Invoice_invoice_id_seq\" RESTART WITH 1"], ["ALTER SEQUENCE \"Invoice_invoice_id_seq\" RESTART WITH 1"]))];
                case 24:
                    _b.sent();
                    // Tạo lại dữ liệu mới
                    return [4 /*yield*/, prisma.role.createMany({
                            data: [
                                { role_name: 'Admin' },
                                { role_name: 'Customer' },
                            ],
                        })];
                case 25:
                    // Tạo lại dữ liệu mới
                    _b.sent();
                    return [4 /*yield*/, prisma.user.createMany({
                            data: [
                                {
                                    username: 'user1',
                                    email: 'user1@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84901234567',
                                    gender: 'Male',
                                    role_id: 2,
                                },
                                {
                                    username: 'user2',
                                    email: 'user2@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84908765432',
                                    gender: 'Female',
                                    role_id: 2,
                                },
                                {
                                    username: 'user3',
                                    email: 'user3@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84906543210',
                                    gender: 'Male',
                                    role_id: 2,
                                },
                                {
                                    username: 'user4',
                                    email: 'user4@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84907654321',
                                    gender: 'Female',
                                    role_id: 2,
                                },
                                {
                                    username: 'user5',
                                    email: 'user5@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84909876543',
                                    gender: 'Male',
                                    role_id: 2,
                                },
                                {
                                    username: 'user6',
                                    email: 'user6@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84908765432',
                                    gender: 'Female',
                                    role_id: 2,
                                },
                                {
                                    username: 'user7',
                                    email: 'user7@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84907654321',
                                    gender: 'Male',
                                    role_id: 2,
                                },
                                {
                                    username: 'user8',
                                    email: 'user8@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84906543210',
                                    gender: 'Female',
                                    role_id: 2,
                                },
                                {
                                    username: 'user9',
                                    email: 'user9@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84905432109',
                                    gender: 'Male',
                                    role_id: 2,
                                },
                                {
                                    username: 'user10',
                                    email: 'user10@gmail.com',
                                    password: 'password123',
                                    phone_number: '+84904321098',
                                    gender: 'Female',
                                    role_id: 2,
                                },
                            ],
                        })];
                case 26:
                    _b.sent();
                    return [4 /*yield*/, prisma.brand.createMany({
                            data: [
                                { name: 'Nike', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914193/33e63d5adb0da6b303a83901c8e8463a_kovgz8.jpg' },
                                { name: 'Adidas', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914193/logo-adidas-vector-inkythuatso-01-29-09-08-58_mjedoe.jpg' },
                                { name: 'Puma', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914192/logo-thuong-hieu-puma-elle-man-7_ujs1dd.jpg' },
                                { name: 'Reebok', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg' },
                                { name: 'Converse', logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsKBm2sTB24FAw4J2OOz7KFdybDgQKRSpGw&s' },
                            ],
                        })];
                case 27:
                    _b.sent();
                    return [4 /*yield*/, prisma.category.createMany({
                            data: [
                                { name: 'Running Shoes' },
                                { name: 'Basketball Shoes' },
                                { name: 'Casual Shoes' },
                                { name: 'Training Shoes' },
                            ],
                        })];
                case 28:
                    _b.sent();
                    return [4 /*yield*/, prisma.product.createMany({
                            data: [
                                {
                                    name: 'Nike Air Max',
                                    description: 'Comfortable and stylish running shoes',
                                    price: 150.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600390/adidas_NMD_peka2n.jpg',
                                    brand_id: 1,
                                    gender: 'men',
                                    category_id: 1,
                                },
                                {
                                    name: 'Adidas Ultraboost',
                                    description: 'High-performance running shoes',
                                    price: 180.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600390/Puma_Women_s_RS-X_Efekt_Lux_Grey_Pink_Sneaker_irm7k8.jpg',
                                    brand_id: 2,
                                    gender: 'men',
                                    category_id: 1,
                                },
                                {
                                    name: 'Puma Suede Classic',
                                    description: 'Iconic casual shoes',
                                    price: 80.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600389/NIKEAir_Humara_chunky-sole_mesh_and_leather_low-top_trainers_rdbkm5.jpg',
                                    brand_id: 3,
                                    gender: 'men',
                                    category_id: 3,
                                },
                                {
                                    name: 'Reebok Nano X',
                                    description: 'Versatile training shoes',
                                    price: 130.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600389/NIKEAir_Humara_chunky-sole_mesh_and_leather_low-top_trainers_1_qyyqrw.jpg',
                                    brand_id: 4,
                                    gender: 'men',
                                    category_id: 4,
                                },
                                {
                                    name: 'Converse Chuck Taylor',
                                    description: 'Classic basketball shoes',
                                    price: 60.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600389/Air_Pegasus_2K5_Mesh_and_Leather_Sneakers_nxywkt.jpg',
                                    brand_id: 5,
                                    gender: 'men',
                                    category_id: 2,
                                },
                                // Thêm các sản phẩm mới
                                {
                                    name: 'Nike ZoomX',
                                    description: 'Ultimate cushioning and energy return',
                                    price: 200.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600388/Converse_One_Star_Pro_Nubuck_Leather_Sneakers_Black_fkvvvi.jpg',
                                    brand_id: 1,
                                    gender: 'men',
                                    category_id: 1,
                                },
                                {
                                    name: 'Adidas NMD',
                                    description: 'Urban style and comfort',
                                    price: 140.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600388/CAMPUS_00S_SHOES_i0kf6x.jpg',
                                    brand_id: 2,
                                    gender: 'men',
                                    category_id: 3,
                                },
                                {
                                    name: 'Puma RS-X',
                                    description: 'Retro and futuristic design',
                                    price: 110.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/21_meilleures_id%C3%A9es_Adidas_Campus_Rose_en_2024_1_i5ux9f.jpg',
                                    brand_id: 3,
                                    gender: 'men',
                                    category_id: 3,
                                },
                                {
                                    name: 'Reebok Zig Kinetica',
                                    description: 'Bold and innovative cushioning',
                                    price: 160.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/Vintage_y2k_sambas_qbxfpi.jpg',
                                    brand_id: 4,
                                    gender: 'men',
                                    category_id: 1,
                                },
                                {
                                    name: 'Converse One Star',
                                    description: 'Skate culture icon',
                                    price: 70.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720600387/Converse_Weapon_Classic_Shoes_-_Black_White___Men_s_7_5___Women_s_9_eoblmc.jpg',
                                    brand_id: 5,
                                    gender: 'men',
                                    category_id: 3,
                                },
                                {
                                    name: 'Nike Pegasus',
                                    description: 'Everyday training shoes',
                                    price: 120.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599631/adidas_NMD_whtand.jpg',
                                    brand_id: 1,
                                    gender: 'men',
                                    category_id: 1,
                                },
                                {
                                    name: 'Adidas Yeezy',
                                    description: 'High fashion meets streetwear',
                                    price: 300.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599570/Womens_White_Green_Nike_Zoom_Air_Fire_Trainers___schuh_1_xhobf7.jpg',
                                    brand_id: 2,
                                    gender: 'men',
                                    category_id: 3,
                                },
                                {
                                    name: 'Puma Ignite',
                                    description: 'Performance and comfort',
                                    price: 100.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599534/Puma_Women_s_RS-X_Efekt_Lux_Grey_Pink_Sneaker_czr79s.jpg',
                                    brand_id: 3,
                                    gender: 'women',
                                    category_id: 4,
                                },
                                {
                                    name: 'Reebok Classic',
                                    description: 'Timeless design',
                                    price: 90.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720599509/Womens_White_Green_Nike_Zoom_Air_Fire_Trainers___schuh_1_f2vibs.jpg',
                                    brand_id: 4,
                                    gender: 'women',
                                    category_id: 3,
                                },
                                {
                                    name: 'Converse Jack Purcell',
                                    description: 'Sporty and stylish',
                                    price: 80.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438013/Zapatilla_NMD_R1_V2_ewfgpt.jpg',
                                    brand_id: 5,
                                    gender: 'women',
                                    category_id: 2,
                                },
                                {
                                    name: 'Nike Air Force 1',
                                    description: 'Classic and versatile',
                                    price: 100.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438013/Chaussure_Continental80_fjogv1.jpg',
                                    brand_id: 1,
                                    gender: 'women',
                                    category_id: 2,
                                },
                                {
                                    name: 'Adidas Superstar',
                                    description: 'Iconic shell-toe design',
                                    price: 90.0,
                                    image_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1720438019/Air_Jordan_Kids_Spizike_Low_Obsidian_PS_-_3y_pqidkc.jpg',
                                    brand_id: 2,
                                    gender: 'women',
                                    category_id: 3,
                                },
                                // Thêm các sản phẩm khác nếu cần
                            ],
                        })];
                case 29:
                    _b.sent();
                    createProductImages()
                        .catch(function (error) {
                        console.error(error);
                        process.exit(1);
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.$disconnect()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, prisma.address.createMany({
                            data: [
                                {
                                    user_id: 1,
                                    street: '123 Sneaker St',
                                    city: 'Sneakerville',
                                    country: 'Sneakerland',
                                },
                                {
                                    user_id: 2,
                                    street: '456 Sole Rd',
                                    city: 'Kicks City',
                                    country: 'Shoeland',
                                },
                            ],
                        })];
                case 30:
                    _b.sent();
                    return [4 /*yield*/, prisma.order.createMany({
                            data: [
                                {
                                    user_id: 1,
                                    status: 'Pending',
                                    totalAmount: 230.0,
                                    createdAt: new Date(),
                                },
                                {
                                    user_id: 2,
                                    status: 'Shipped',
                                    totalAmount: 210.0,
                                    createdAt: new Date(),
                                },
                            ],
                        })];
                case 31:
                    _b.sent();
                    return [4 /*yield*/, prisma.orderItem.createMany({
                            data: [
                                { orderId: 1, productId: 1, quantity: 1, price: 150.0, size: 'M', color: 'Red' },
                                { orderId: 1, productId: 2, quantity: 1, price: 80.0, size: 'L', color: 'Blue' },
                                { orderId: 2, productId: 3, quantity: 1, price: 80.0, size: 'S', color: 'Black' },
                                { orderId: 2, productId: 4, quantity: 1, price: 130.0, size: 'XL', color: 'White' },
                            ],
                        })];
                case 32:
                    _b.sent();
                    createReviews()
                        .catch(function (error) {
                        console.error(error);
                        process.exit(1);
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.$disconnect()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, prisma.favorite.createMany({
                            data: [
                                { user_id: 1, product_id: 1 },
                                { user_id: 2, product_id: 2 },
                            ],
                        })];
                case 33:
                    _b.sent();
                    return [4 /*yield*/, prisma.invoice.createMany({
                            data: [
                                {
                                    order_id: 1,
                                    date: new Date(),
                                    amount: 230.0,
                                },
                                {
                                    order_id: 2,
                                    date: new Date(),
                                    amount: 210.0,
                                },
                            ],
                        })];
                case 34:
                    _b.sent();
                    _b.label = 35;
                case 35:
                    _b.trys.push([35, 38, 39, 41]);
                    // Xóa hết dữ liệu trong bảng notification nếu có
                    return [4 /*yield*/, prisma.notification.deleteMany()];
                case 36:
                    // Xóa hết dữ liệu trong bảng notification nếu có
                    _b.sent();
                    // Tạo dữ liệu mẫu cho bảng notification
                    return [4 /*yield*/, prisma.notification.createMany({
                            data: [
                                {
                                    user_id: 1,
                                    type: 'Password Change',
                                    message: 'Your password has been successfully changed.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                {
                                    user_id: 2,
                                    type: 'Address Update',
                                    message: 'Your address information has been updated.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                {
                                    user_id: 3,
                                    type: 'Order Shipped',
                                    message: 'Your order #12345 has been shipped.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                {
                                    user_id: 4,
                                    type: 'New Review',
                                    message: 'A new review has been posted on your product.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                {
                                    user_id: 5,
                                    type: 'Account Activation',
                                    message: 'Your account has been activated.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                {
                                    user_id: 1,
                                    type: 'Promotion',
                                    message: 'Get 20% off on your next purchase.',
                                    createdAt: new Date(),
                                    isRead: false,
                                },
                                // Thêm các thông báo khác nếu cần
                            ],
                        })];
                case 37:
                    // Tạo dữ liệu mẫu cho bảng notification
                    _b.sent();
                    console.log('Notifications created successfully');
                    return [3 /*break*/, 41];
                case 38:
                    error_1 = _b.sent();
                    console.error('Error creating notifications:', error_1);
                    return [3 /*break*/, 41];
                case 39: return [4 /*yield*/, prisma.$disconnect()];
                case 40:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 41:
                    sizes = ['S', 'M', 'L', 'XL'];
                    colors = ['Red', 'Black', 'White'];
                    stockData = [];
                    for (productId = 1; productId <= 16; productId++) {
                        for (_i = 0, sizes_1 = sizes; _i < sizes_1.length; _i++) {
                            size = sizes_1[_i];
                            for (_a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
                                color = colors_1[_a];
                                stockData.push({
                                    product_id: productId,
                                    size: size,
                                    color: color,
                                    quantity: Math.floor(Math.random() * 100) + 1,
                                });
                            }
                        }
                    }
                    return [4 /*yield*/, prisma.stock.createMany({
                            data: stockData,
                        })];
                case 42:
                    _b.sent();
                    console.log('Sample data created successfully');
                    return [3 /*break*/, 46];
                case 43:
                    error_2 = _b.sent();
                    console.error('Error creating sample data:', error_2);
                    return [3 /*break*/, 46];
                case 44: return [4 /*yield*/, prisma.$disconnect()];
                case 45:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 46: return [2 /*return*/];
            }
        });
    });
}
main();
