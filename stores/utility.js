import { defineStore } from "pinia";
import { PUBLIC_SETTINGS_ENDPOINT } from "@/utils/endpoints";

export const useUtilityStore = defineStore("utilityStore", {
  state: () => ({
    settings: null,
    socials: null,
    main_menus: null,
    footer_menus: null,
    isLoaded: false,
  }),

  getters: {
    getSettings: (state) => state.settings,
    getSocials: (state) => state.socials,
    getMainMenus: (state) => state.main_menus,
    getFooterMenus: (state) => state.footer_menus,
  },

  actions: {
    async fetchSettings() {
      if (this.isLoaded) {
        return;
      }

      try {
        const config = useRuntimeConfig();
        const data = await $fetch(`${PUBLIC_SETTINGS_ENDPOINT}/`, {
          baseURL: config.public.baseURL,
        });

        this.settings = data?.basic_setting || null;
        this.socials = data?.social_setting || null;
        this.main_menus = data?.main_menus || [];
        this.footer_menus = data?.footer_menus || [];
        this.isLoaded = true;

        return data;
      } catch (error) {
        console.error("Failed to fetch settings:", error);
        throw error;
      }
    },
  },
});
