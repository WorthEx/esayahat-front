import CoolButton from "@/components/UI/CoolButton.vue";
import OrangeButton from '@/components/UI/OrangeButton.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faLock);
library.add(faEnvelope);

export default [CoolButton, OrangeButton];
