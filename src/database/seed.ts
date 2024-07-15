require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    try {
        // Xóa hết dữ liệu trong các bảng
        await prisma.favorite.deleteMany();
        await prisma.review.deleteMany();
        await prisma.stock.deleteMany();
        await prisma.invoice.deleteMany();
        await prisma.orderItem.deleteMany();
        await prisma.order.deleteMany();
        await prisma.address.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
        await prisma.brand.deleteMany();
        await prisma.user.deleteMany();
        await prisma.role.deleteMany();

        // Thiết lập lại tuần tự (sequence) nếu bạn đang sử dụng PostgreSQL
        // Ví dụ:
        await prisma.$executeRaw`ALTER SEQUENCE "Role_role_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "User_user_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Address_address_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Brand_brand_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Category_category_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Product_product_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Stock_stock_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Order_order_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "OrderItem_orderItem_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Review_review_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Favorite_favorite_id_seq" RESTART WITH 1`;
        await prisma.$executeRaw`ALTER SEQUENCE "Invoice_invoice_id_seq" RESTART WITH 1`;
        // Tạo lại dữ liệu mới
        await prisma.role.createMany({
            data: [
                { role_name: 'Admin' }, 
                { role_name: 'Customer' },
            ],
        });

        await prisma.user.createMany({
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
          });
        await prisma.brand.createMany({
            data: [
                { name: 'Nike', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914193/33e63d5adb0da6b303a83901c8e8463a_kovgz8.jpg' },
                { name: 'Adidas', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914193/logo-adidas-vector-inkythuatso-01-29-09-08-58_mjedoe.jpg' },
                { name: 'Puma', logo_url: 'https://res.cloudinary.com/dpdzbuiml/image/upload/v1719914192/logo-thuong-hieu-puma-elle-man-7_ujs1dd.jpg' },
                { name: 'Reebok', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg' },
                { name: 'Converse', logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsKBm2sTB24FAw4J2OOz7KFdybDgQKRSpGw&s' },
            ],
        });

        await prisma.category.createMany({
            data: [
                { name: 'Running Shoes' },
                { name: 'Basketball Shoes' },
                { name: 'Casual Shoes' },
                { name: 'Training Shoes' },
            ],
        });

        await prisma.product.createMany({
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
        });
        
        
        
        async function createProductImages() {
            const productImages = [
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
        
            const productImageRecords = [];
            for (let product_id = 1; product_id <= 16; product_id++) {
                const selectedImages = [];
                for (let i = 0; i < 3; i++) {
                    const randomIndex = Math.floor(Math.random() * productImages.length);
                    selectedImages.push(productImages[randomIndex]);
                }
                const productImageRecord = selectedImages.map(image => ({
                    product_id: product_id,
                    image_url: image
                }));
                productImageRecords.push(...productImageRecord);
            }
            try {
                await prisma.productImage.createMany({
                    data: productImageRecords
                });
                console.log('Product images created successfully');
            } catch (error) {
                console.error('Error creating product images:', error);
            }
        }
        createProductImages()
        .catch((error) => {
          console.error(error);
          process.exit(1);
        })
        .finally(async () => {
          await prisma.$disconnect();
        });

        

        await prisma.address.createMany({
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
        });

        await prisma.order.createMany({
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
        });

        await prisma.orderItem.createMany({
            data: [
                { orderId: 1, productId: 1, quantity: 1, price: 150.0, size: 'M', color: 'Red' },
                { orderId: 1, productId: 2, quantity: 1, price: 80.0, size: 'L', color: 'Blue' },
                { orderId: 2, productId: 3, quantity: 1, price: 80.0, size: 'S', color: 'Black' },
                { orderId: 2, productId: 4, quantity: 1, price: 130.0, size: 'XL', color: 'White' },
            ],
        });

        // await prisma.review.createMany({
        //     data: [
        //         {
        //             productId: 1,
        //             userId: 1,
        //             rating: 5,
        //             comment: 'Great running shoes!',
        //             createdAt: new Date(),
        //         },
        //         {
        //             productId: 2,
        //             userId: 2,
        //             rating: 4,
        //             comment: 'Very comfortable',
        //             createdAt: new Date(),
        //         },
        //     ],
        // });
        async function createReviews() {
            const reviews = [];
            for (let productId = 1; productId <= 16; productId++) {
              for (let i = 0; i < 4; i++) {
                const userId = Math.floor(Math.random() * 10) + 1; // userId từ 1 đến 10
                reviews.push({
                  productId: productId,
                  userId: userId,
                  rating: Math.floor(Math.random() * 5) + 1,
                  comment: faker.lorem.sentence(),
                  createdAt: faker.date.past(),
                });
              }
            }
          
            await prisma.review.createMany({
              data: reviews,
            });
          }
          
          createReviews()
            .catch((error) => {
              console.error(error);
              process.exit(1);
            })
            .finally(async () => {
              await prisma.$disconnect();
            });

        await prisma.favorite.createMany({
            data: [
                { user_id: 1, product_id: 1 },
                { user_id: 2, product_id: 2 },
            ],
        });

        await prisma.invoice.createMany({
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
        });


        const sizes = ['S', 'M', 'L', 'XL'];
        const colors = ['Red', 'Black', 'White'];

        const stockData = [];
        for (let productId = 1; productId <= 16; productId++) {
            for (const size of sizes) {
                for (const color of colors) {
                    stockData.push({
                        product_id: productId,
                        size: size,
                        color: color,
                        quantity: Math.floor(Math.random() * 100) + 1,
                    });
                }
            }
        }

        await prisma.stock.createMany({
            data: stockData,
        });

        console.log('Sample data created successfully');
    } catch (error) {
        console.error('Error creating sample data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
