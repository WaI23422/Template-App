import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'any'
})
export class FormHelperService {
    object !: FormGroup;
    
    isDisplay(name: string): boolean {
        return !this.object.controls[name].valid && this.object.controls[name].touched;
    }
    errorDisplay(name: string): string[] {
        let nameConvert:string = convert(name);
        let errorArrayMessage:string[] = [];
        
        if (this.object.get(name)?.errors?.required) {
            errorArrayMessage.push(nameConvert + " không được để trống");
        }
        if (this.object.get(name)?.errors?.email) {
            errorArrayMessage.push(nameConvert + " không đúng định dạng");
        }
        if (this.object.get(name)?.errors?.pattern) {
            errorArrayMessage.push(nameConvert + " cần ít nhất 8 kí tự, 1 kí tự viết hoa, 1 chữ số và 1 kí tự đặc biệt");
        }
        if (this.object.get(name)?.errors?.minlength) {
            errorArrayMessage.push(nameConvert + " cần ít nhất 4 kí tự");
        }

        return errorArrayMessage;
    }
}

function convert(name: string): string {
    switch (name) {
        case "username":
            return "Tài khoản";
        case "password":
            return "Mật khẩu";
        case "email":
            return "Thư điện tử";
        default:
            return "Không rõ";
    }
}

