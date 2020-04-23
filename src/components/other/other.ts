// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { Http } from "@/shared/http";
import { UserService } from '@/components/service/user.service'
import { User } from '@/components/model/user.model'

@Component
export default class Other extends Vue {

    private http = new Http();
    private userService = new UserService();
    private user: User[] = [];

    private getList() {
        this.userService.getUserList()
        .then((res) => {
            this.user = res.data;
        });
        console.log("Other -> getList -> user", this.user);
        alert(this.user);
        
    }

}
