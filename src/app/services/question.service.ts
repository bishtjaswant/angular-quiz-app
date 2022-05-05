import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../types/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http:HttpClient
  ) { }

  getQuestions(){
    return this.http.get<any>("/assets/question_bank.json")
  }
}
