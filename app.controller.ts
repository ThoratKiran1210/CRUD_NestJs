/* eslint-disable prettier/prettier */


import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";




@Controller("book")
export class BookController{

    // Create an object that provide data from book.service.ts
    /* its has some flaws i.e. we have to create a new object everytime n it take our memory alot...
                  */ 
    // public bookService: BookService= new BookService();

    constructor(private bookService: BookService){}



    // Add book
    @Post('/add')
    addbook(): string{
        return this.bookService.addbook();
    }


    // Delete book
    @Delete('/delete')
    deletebook(): string{
        return this.bookService.deletebook();
    }


    // Update book
    @Put('/update')
    updatebook(): string{
        return this.bookService.updatebook();
    }


    // Find all book
    @Get('/')
    findbook(): string{
        return this.bookService.findbook();
    }
}