// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/helloWorld/HelloWorld.vue";

@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {}
