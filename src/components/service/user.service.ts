import { Http } from "@/shared/http";
import { User } from "@/components/model/user.model";

export class UserService {
    private http = new Http();
    private apiPrefix = "/user";

    /**
     * 获取用户信息列表
     */
    public getUserList() {
        return this.http.get(this.apiPrefix + '/users')
            .then((res) => res);
    }

    // 保存博客
    public saveUser(user: User) {
        return this.http.post(this.apiPrefix + '/user', user)
            .then((res) => res);
    }
}
