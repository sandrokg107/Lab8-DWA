import { Injectable } from "@angular/core";
import { Products } from "./productos.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    private products: Products[] = [];
  
    getProducts(): Products[] {
      return this.products;
    }
  
    addProduct(product: Products) {
      this.products.push(product);
    }
  
    updateProduct(product: Products) {
      const index = this.products.findIndex(p => p.code === product.code);
      if (index !== -1) {
        this.products[index] = product;
      }
    }
  
    deleteProduct(code: number) {
      const index = this.products.findIndex(p => p.code === code);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  }
  