import { useUtilityStore } from "@/stores/utility";

export default defineNuxtPlugin(async () => {
  const utilityStore = useUtilityStore();

  if (!utilityStore.getSettings || !utilityStore.getRobots) {
    try {
      if (!utilityStore.getSettings) await utilityStore.fetchSettings();
      if (!utilityStore.getRobots) await utilityStore.fetchRobots();
    } catch (error) {
      console.error("Failed to initialize settings:", error);
    }
  }
});


