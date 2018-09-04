export class Product {
    name: string;
    code: string;
    description: string;
    imgUrl: string;
    constructor(args: {
        name?: string,
        code?: string,
        description?: string,
        imgUrl?: string
    } = {}) {
        this.name = args.name;
        this.code = args.code;
        this.description = args.description;
        this.imgUrl =args.imgUrl;
    }
}
export const PRODUCT_LIST = [
    new Product({ imgUrl:'image1.jpg', code: 'PROD1', name: 'Product 1', description:'Product Description   1'}),
    new Product({ imgUrl:'image2.jpg', code: 'PROD2', name: 'Product 2', description:'Product Description   2'}),
    new Product({ imgUrl:'image3.jpg', code: 'PROD3', name: 'Product 3', description:'Product Description   3'}),
    new Product({ imgUrl:'image4.jpg', code: 'PROD4', name: 'Product 4', description:'Product Description   4'}),
    new Product({ imgUrl:'image5.jpg', code: 'PROD5', name: 'Product 5', description:'Product Description   5'}),
    new Product({ imgUrl:'image6.jpg', code: 'PROD6', name: 'Product 6', description:'Product Description   6'}),
    new Product({ imgUrl:'image7.jpg', code: 'PROD7', name: 'Product 7', description:'Product Description   7'})
]