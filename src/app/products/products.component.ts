import { Component } from '@angular/core';
import { Products } from '../productos.model';
import { ProductService } from '../productos.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Products[] = [];
  newProduct: Products = new Products();
  editingProduct: Products | null = null;

  constructor(private productService: ProductService) {
    //this.newProduct = new Product();
    //this.newProduct.code = 0;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = new Products();
  }

  editProduct(products: Products) {
    this.editingProduct = { ...products };
  }

  updateProduct() {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct);
      this.editingProduct = null;
    }
  }

  deleteProduct(code: number) {
    this.productService.deleteProduct(code);
  }
}
