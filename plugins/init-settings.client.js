import { useUtilityStore } from "@/stores/utility";

export default defineNuxtPlugin(async () => {
  const utilityStore = useUtilityStore();

  // Check if settings are already loaded (for navigation between pages)
  if (!utilityStore.getSettings) {
    try {
      await utilityStore.fetchSettings();
    } catch (error) {
      console.error("Failed to initialize settings:", error);
    }
  }
});

