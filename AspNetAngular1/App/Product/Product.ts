namespace MyApp {
    export namespace Domain {

        export interface IProduct {
            ProductGUID: string;
            ProductName: string;
            Quantity: number;
        }

        export class Product implements IProduct {
            constructor() { }

            public ProductGUID: string;
            public ProductName: string;
            public Quantity: number;
        }

    }
}