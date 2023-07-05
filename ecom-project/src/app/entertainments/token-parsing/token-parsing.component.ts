import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../model/UserInfo';
import { Base64 } from 'js-base64';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-token-parsing',
  templateUrl: './token-parsing.component.html',
  styleUrls: ['./token-parsing.component.css']
})
export class TokenParsingComponent implements OnInit{
  userInfo: any
  token!: string

  constructor(
    private formBuilder: FormBuilder
  ){}

  checkoutForm = this.formBuilder.group({
    token: ['',Validators.required]
  })
  ngOnInit(): void {
    console.log(this.checkoutForm.value.token)
  }

  onSubmit() {
    if(this.checkoutForm.value.token) {
      this.userInfo = this.getUser(this.checkoutForm.value.token);
      console.log(this.checkoutForm.value.token)
      this.checkoutForm.reset();
    } else {
      alert("token is null")
    }
  
  }


  public getUser(token: string): UserInfo | undefined {
    if (token) {
      const decodedJwt = this.decodeJwt(token);
      console.log(decodedJwt)
      console.log("token:"+token)
      return decodedJwt;
    }
    return undefined
  }

  private decodeJwt(jwtToken: string): any {
    const first = jwtToken.indexOf('.');
    const second = jwtToken.lastIndexOf('.');
    const payload = jwtToken.substring(first + 1, second);
    return JSON.parse(Base64.decode(payload));
  }

}
function callingFunction() {
  throw new Error('Function not implemented.');
}

