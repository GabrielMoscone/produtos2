import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  items: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(
      (data: any) => this.items = data
    );
  }

  delete(id: number){
    this.service.delete(id).subscribe(
      (data: any) => this.callbackSuccess(),
      (error: any) => this.callbackError(error)
    );
  }

  private callbackSuccess(){
    alert("Registro excluído com sucesso");
    this.getAll();
  }

  private callbackError(error: any){
    alert("Ocorreu um problema a excluir");
    console.log(error);
  }

}
