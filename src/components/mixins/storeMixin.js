import { useStore } from "@/stores/store.js";

export default {
  data() {
    const store = useStore();
    return { store };
  },
};
