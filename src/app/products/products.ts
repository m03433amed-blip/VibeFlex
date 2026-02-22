import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products.interface';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly productsService = inject(ProductsService);
  productList: Product[] = [];
  getProductsData() {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.productList = res.data;
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {
    this.getProductsData();
  }
  truncateWords(text: string, limit: number): string {
    if (!text) return '';
    const words = text.trim().split(/\s+/);
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  }
}
